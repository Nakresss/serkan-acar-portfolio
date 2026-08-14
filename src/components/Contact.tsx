"use client";

import { useLanguage } from "@/lib/language-context";
import { getContent, socials } from "@/lib/content";
import Section from "./Section";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  const { lang } = useLanguage();
  const t = getContent(lang);

  const rows = [
    {
      label: t.contact.labels.email,
      value: socials.email,
      href: `mailto:${socials.email}`,
    },
    {
      label: t.contact.labels.phone,
      value: socials.phone,
      href: `tel:${socials.phone.replace(/\s/g, "")}`,
    },
    { label: t.contact.labels.location, value: socials.location },
  ];

  return (
    <Section id="contact" no="07" title={t.sections.contact}>
      <p className="text-sm text-ink-muted">{t.contact.intro}</p>

      <dl className="mt-5 divide-y divide-rule-soft border-y border-rule-soft">
        {rows.map((row) => (
          <div key={row.label} className="grid gap-0.5 py-3 sm:grid-cols-[7rem_1fr] sm:gap-6">
            <dt className="label pt-0.5">{row.label}</dt>
            <dd>
              {row.href ? (
                <a href={row.href} className="link-underline text-sm">
                  {row.value}
                </a>
              ) : (
                <span className="text-sm text-ink-muted">{row.value}</span>
              )}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-5 flex gap-5">
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
        >
          <LinkedinIcon size={15} />
          LinkedIn
        </a>
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
        >
          <GithubIcon size={15} />
          GitHub
        </a>
      </div>
    </Section>
  );
}
