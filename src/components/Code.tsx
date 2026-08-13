"use client";

import { useLanguage } from "@/lib/language-context";
import { getContent, socials } from "@/lib/content";
import Section from "./Section";
import ScrollReveal from "./ScrollReveal";

export default function Code() {
  const { lang } = useLanguage();
  const t = getContent(lang);

  return (
    <Section id="code" no="03" title={t.sections.code}>
      <p className="max-w-xl text-sm leading-relaxed text-ink-muted">{t.codeIntro}</p>

      <ul className="mt-6 divide-y divide-rule-soft border-y border-rule-soft">
        {t.repos.map((repo, i) => (
          <li key={repo.name}>
            <ScrollReveal delay={i * 0.03}>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-1 py-4 sm:grid-cols-[13rem_1fr_4rem] sm:items-baseline sm:gap-6"
              >
                <span className="font-[family-name:var(--font-mono)] text-sm group-hover:text-accent">
                  {repo.name}
                </span>
                <span className="text-sm leading-relaxed text-ink-muted">{repo.summary}</span>
                <span className="label sm:text-right">{repo.lang}</span>
              </a>
            </ScrollReveal>
          </li>
        ))}
      </ul>

      <a
        href={socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className="link-underline mt-5 inline-block font-[family-name:var(--font-mono)] text-xs"
      >
        {t.reposAll} · github.com/Nakresss
      </a>
    </Section>
  );
}
