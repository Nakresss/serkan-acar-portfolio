"use client";

import { useLanguage } from "@/lib/language-context";
import { getContent } from "@/lib/content";
import Section from "./Section";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  const { lang } = useLanguage();
  const t = getContent(lang);

  return (
    <Section id="skills" no="04" title={t.sections.skills}>
      <dl className="divide-y divide-rule-soft border-y border-rule-soft">
        {t.skills.map((group, i) => (
          <div key={group.label} className="py-4">
            <ScrollReveal delay={i * 0.02}>
              <div className="grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <dt className="label pt-0.5">{group.label}</dt>
                <dd className="text-sm leading-relaxed text-ink-muted">{group.items}</dd>
              </div>
            </ScrollReveal>
          </div>
        ))}
      </dl>
    </Section>
  );
}
