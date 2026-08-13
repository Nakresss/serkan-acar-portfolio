"use client";

import { useLanguage } from "@/lib/language-context";
import { getContent } from "@/lib/content";
import Section from "./Section";
import ScrollReveal from "./ScrollReveal";

export default function Education() {
  const { lang } = useLanguage();
  const t = getContent(lang);

  return (
    <Section id="education" no="05" title={t.sections.education}>
      <ul className="divide-y divide-rule-soft border-b border-rule-soft">
        {t.education.map((e, i) => (
          <li key={e.program} className="py-6 first:pt-0">
            <ScrollReveal delay={i * 0.03}>
              <p className="label">{e.period}</p>
              <h3 className="mt-2 text-[1.0625rem] font-semibold tracking-tight">{e.program}</h3>
              <p className="mt-0.5 text-sm text-ink-muted">{e.school}</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted">{e.detail}</p>
            </ScrollReveal>
          </li>
        ))}
      </ul>

      <h3 className="label mt-10">{t.certsLabel}</h3>

      {t.certs.map((group) => (
        <div key={group.issuer} className="mt-5">
          <ScrollReveal>
            <p className="text-sm font-semibold">{group.issuer}</p>
            <ul className="mt-2 divide-y divide-rule-soft border-y border-rule-soft">
              {group.items.map((c) => (
                <li key={c.name} className="grid gap-0.5 py-3 sm:grid-cols-[16rem_1fr] sm:gap-6">
                  <span className="text-sm">{c.name}</span>
                  {c.detail && (
                    <span className="text-sm leading-relaxed text-ink-muted">{c.detail}</span>
                  )}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      ))}
    </Section>
  );
}
