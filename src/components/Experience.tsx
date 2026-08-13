"use client";

import { useLanguage } from "@/lib/language-context";
import { getContent } from "@/lib/content";
import Section from "./Section";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  const { lang } = useLanguage();
  const t = getContent(lang);

  return (
    <Section id="experience" no="01" title={t.sections.experience}>
      <ul className="divide-y divide-rule-soft border-b border-rule-soft">
        {t.experience.map((item, i) => (
          <li key={item.role + item.period} className="py-6 first:pt-0">
            <ScrollReveal delay={i * 0.03}>
              <p className="label">{item.period}</p>
              <h3 className="mt-2 text-[1.0625rem] font-semibold tracking-tight">{item.role}</h3>
              <p className="mt-0.5 text-sm text-ink-muted">{item.org}</p>
              <ul className="mt-3 space-y-1.5">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                    <span aria-hidden className="mt-[0.55em] h-px w-3 shrink-0 bg-rule" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
