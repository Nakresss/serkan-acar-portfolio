"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { getContent } from "@/lib/content";
import Section from "./Section";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const { lang } = useLanguage();
  const t = getContent(lang);

  return (
    <Section id="projects" no="02" title={t.sections.projects}>
      <ul className="divide-y divide-rule-soft border-b border-rule-soft">
        {t.projects.map((p, i) => (
          <li key={p.no} className="py-7 first:pt-0">
            <ScrollReveal delay={i * 0.03}>
              <div className="grid gap-5 md:grid-cols-[1fr_11rem] md:gap-8">
                <div className="min-w-0">
                  <div className="flex items-baseline gap-3">
                    <span className="font-[family-name:var(--font-mono)] text-xs text-accent">
                      {p.no}
                    </span>
                    <h3 className="text-[1.0625rem] font-semibold tracking-tight">{p.title}</h3>
                  </div>
                  <p className="label mt-1.5">{p.meta}</p>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted">{p.summary}</p>
                  <p className="mt-3 text-sm text-ink-muted">
                    <span className="label">{t.roleLabel}</span>{" "}
                    <span className="ml-1">{p.role}</span>
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1">
                    {p.stack.map((s) => (
                      <li
                        key={s}
                        className="border border-rule px-2 py-0.5 font-[family-name:var(--font-mono)] text-[0.6875rem] text-ink-muted"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {p.image && (
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-2 md:aspect-[3/4]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 176px"
                      className="object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
                    />
                  </div>
                )}
              </div>
            </ScrollReveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
