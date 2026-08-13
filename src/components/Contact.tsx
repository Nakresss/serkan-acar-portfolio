"use client";

import { useState, FormEvent } from "react";
import { useLanguage } from "@/lib/language-context";
import { getContent, socials } from "@/lib/content";
import Section from "./Section";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  const { lang } = useLanguage();
  const t = getContent(lang);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${name} — portfolyo sitesi`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full border-b border-rule bg-transparent py-2 text-sm outline-none transition-colors focus:border-ink";

  return (
    <Section id="contact" no="07" title={t.sections.contact}>
      <p className="text-sm text-ink-muted">{t.contact.intro}</p>

      <dl className="mt-5 divide-y divide-rule-soft border-y border-rule-soft">
        <div className="grid gap-0.5 py-3 sm:grid-cols-[7rem_1fr] sm:gap-6">
          <dt className="label pt-0.5">{t.contact.labels.email}</dt>
          <dd>
            <a href={`mailto:${socials.email}`} className="link-underline text-sm">
              {socials.email}
            </a>
          </dd>
        </div>
        <div className="grid gap-0.5 py-3 sm:grid-cols-[7rem_1fr] sm:gap-6">
          <dt className="label pt-0.5">{t.contact.labels.phone}</dt>
          <dd>
            <a
              href={`tel:${socials.phone.replace(/\s/g, "")}`}
              className="link-underline text-sm"
            >
              {socials.phone}
            </a>
          </dd>
        </div>
        <div className="grid gap-0.5 py-3 sm:grid-cols-[7rem_1fr] sm:gap-6">
          <dt className="label pt-0.5">{t.contact.labels.location}</dt>
          <dd className="text-sm text-ink-muted">{socials.location}</dd>
        </div>
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

      <form onSubmit={handleSubmit} className="mt-10 max-w-lg space-y-5">
        <div>
          <label htmlFor="c-name" className="label">
            {t.contact.formName}
          </label>
          <input
            id="c-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={field}
          />
        </div>
        <div>
          <label htmlFor="c-email" className="label">
            {t.contact.formEmail}
          </label>
          <input
            id="c-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={field}
          />
        </div>
        <div>
          <label htmlFor="c-msg" className="label">
            {t.contact.formMessage}
          </label>
          <textarea
            id="c-msg"
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${field} resize-none`}
          />
        </div>
        <button
          type="submit"
          className="border border-ink bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-transparent hover:text-ink"
        >
          {t.contact.formSend}
        </button>
        <p className="text-xs text-ink-muted">{t.contact.formNote}</p>
      </form>
    </Section>
  );
}
