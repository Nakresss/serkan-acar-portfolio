"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";
import type { Lang, Project } from "@/content/types";
import { projectHref } from "@/content";
import Reveal from "@/components/motion/Reveal";

/**
 * Project list. On devices with a fine pointer, hovering a row floats its cover photo next to the cursor.
 * On touch screens the cover is shown inline instead.
 */
export default function ProjectIndex({
  lang,
  projects,
  open,
}: {
  lang: Lang;
  projects: Project[];
  open: string;
}) {
  const [hovered, setHovered] = useState<string | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 28, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 260, damping: 28, mass: 0.6 });

  const active = projects.find((p) => p.slug === hovered && p.cover);

  return (
    <div
      className="relative"
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        x.set(e.clientX);
        y.set(e.clientY);
      }}
      onPointerLeave={() => setHovered(null)}
    >
      <ul className="border-b border-rule">
        {projects.map((p, i) => (
          <Reveal as="li" key={p.slug} delay={Math.min(i, 4) * 0.05} className="border-t border-rule">
            <Link
              href={projectHref(lang, p.slug)}
              onPointerEnter={(e) => {
                if (e.pointerType !== "mouse") return;
                // First hover: start the preview at the cursor instead of springing in from (0, 0).
                if (hovered === null) {
                  sx.jump(e.clientX);
                  sy.jump(e.clientY);
                }
                x.set(e.clientX);
                y.set(e.clientY);
                setHovered(p.slug);
              }}
              className="group grid gap-x-8 gap-y-3 py-7 md:grid-cols-12 md:items-baseline md:py-9"
            >
              <span className="mono text-ink-3 md:col-span-1">{p.year}</span>

              <span className="md:col-span-6">
                <span className="block text-[clamp(1.6rem,3.4vw,2.6rem)] font-semibold leading-[1.05] tracking-tight transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-3">
                  {p.title}
                </span>
                <span className="mt-3 block max-w-xl leading-relaxed text-ink-2">{p.summary}</span>
              </span>

              <span className="text-sm md:col-span-3">
                <span className="block text-ink">{p.meta}</span>
                {p.result && <span className="block font-semibold text-accent-ink">{p.result}</span>}
                <span className="mono mt-2 block text-ink-3">{p.stack.join(" · ")}</span>
              </span>

              <span className="hidden items-center justify-end gap-2 text-sm md:col-span-2 md:flex">
                <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">{open}</span>
                <span
                  aria-hidden
                  className="grid h-10 w-10 place-items-center rounded-full border border-rule transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper"
                >
                  →
                </span>
              </span>

              {p.cover && (
                <span className="touch-cover relative mt-2 block aspect-[16/10] overflow-hidden bg-paper-2 md:col-span-11 md:col-start-2">
                  <Image src={p.cover.src} alt={p.cover.alt} fill sizes="100vw" className="object-cover" />
                </span>
              )}
            </Link>
          </Reveal>
        ))}
      </ul>

      <AnimatePresence>
        {active?.cover && (
          <motion.div
            key="preview"
            aria-hidden
            className="pointer-events-none fixed top-0 left-0 z-30 hidden h-64 w-52 overflow-hidden bg-paper-2 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.35)] md:block"
            style={{ x: sx, y: sy, translateX: "24px", translateY: "-50%" }}
            initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={active.slug}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Image src={active.cover.src} alt="" fill sizes="208px" className="object-cover" />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
