"use client";

import { useLanguage } from "@/lib/language-context";
import { getContent } from "@/lib/content";
import Section from "./Section";
import ScrollReveal from "./ScrollReveal";

export default function Awards() {
  const { lang } = useLanguage();
  const t = getContent(lang);

  return (
    <Section id="awards" no="06" title={t.sections.awards}>
      <ul className="divide-y divide-rule-soft border-y border-rule-soft">
        {t.awards.map((a, i) => (
          <li key={a.title}>
            <ScrollReveal delay={i * 0.03}>
              <div className="grid gap-0.5 py-4 sm:grid-cols-[5rem_1fr_auto] sm:gap-6">
                <span className="label pt-0.5">{a.year}</span>
                <span className="text-sm">{a.title}</span>
                <span className="text-sm text-ink-muted">{a.detail}</span>
              </div>
            </ScrollReveal>
          </li>
        ))}
      </ul>

      <h3 className="label mt-10">{t.leadershipLabel}</h3>
      <ul className="mt-3 divide-y divide-rule-soft border-y border-rule-soft">
        {t.leadership.map((l) => (
          <li key={l.title} className="py-4">
            <ScrollReveal>
              <p className="text-sm font-medium">{l.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">{l.detail}</p>
            </ScrollReveal>
          </li>
        ))}
      </ul>

      <div className="mt-8 grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-6">
        <span className="label pt-0.5">{t.interestsLabel}</span>
        <span className="text-sm text-ink-muted">{t.interests}</span>
      </div>
    </Section>
  );
}
