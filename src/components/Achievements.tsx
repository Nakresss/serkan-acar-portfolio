"use client";

import Image from "next/image";
import { Trophy } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { getContent } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function Achievements() {
  const { lang } = useLanguage();
  const t = getContent(lang);

  return (
    <section id="achievements" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker={t.achievementsKicker} heading={t.achievementsHeading} align="center" />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {t.achievements.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-accent/20 bg-gradient-to-b from-accent/[0.07] to-transparent p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Trophy size={20} />
                </div>
                <span className="font-[family-name:var(--font-mono)] text-xs font-semibold text-gray-500">
                  {a.year}
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-base font-bold text-white">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{a.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-24">
          <ScrollReveal>
            <div className="text-center">
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-accent-2">
                {t.internationalKicker}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold text-white sm:text-3xl">
                {t.internationalHeading}
              </h3>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {t.internationalBlocks.map((block, i) => (
              <ScrollReveal key={block.title} direction={i === 0 ? "left" : "right"}>
                <div className="group overflow-hidden rounded-2xl border border-white/10">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={block.image}
                      alt={block.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090b] via-[#08090b]/20 to-transparent" />
                  </div>
                  <div className="bg-white/[0.03] p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent-2">
                      {block.subtitle}
                    </p>
                    <h4 className="mt-1.5 font-[family-name:var(--font-display)] text-lg font-bold text-white">
                      {block.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">{block.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
