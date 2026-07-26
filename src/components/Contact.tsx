"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Download, Send } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { getContent, socials } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  const { lang } = useLanguage();
  const t = getContent(lang);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portföy Sitesi — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const contactItems = [
    { icon: Mail, label: socials.email, href: `mailto:${socials.email}` },
    { icon: Phone, label: socials.phone, href: `tel:${socials.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: socials.location, href: undefined },
  ];

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading kicker={t.contact.kicker} heading={t.contact.heading} align="center" />

        <ScrollReveal>
          <p className="mx-auto mt-6 max-w-xl text-center text-gray-400">{t.contact.intro}</p>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal direction="left">
            <div className="space-y-4">
              <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-accent-2">
                {t.contact.directTitle}
              </h3>
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-gray-300 transition-colors hover:border-white/25 hover:text-white">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-2/10 text-accent-2">
                      <Icon size={16} />
                    </span>
                    {item.label}
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}

              <div className="flex gap-3 pt-2">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-white/40 hover:bg-white/5"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-white/40 hover:bg-white/5"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href="/cv/Serkan-Acar-CV.pdf"
                  download
                  className="flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 text-sm font-semibold text-accent-2 transition-colors hover:bg-accent/20"
                >
                  <Download size={16} />
                  {t.contact.downloadCv}
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-gray-400">{t.contact.formName}</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-[#0d0e11] px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-accent-2/60"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-gray-400">{t.contact.formEmail}</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-[#0d0e11] px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-accent-2/60"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-gray-400">{t.contact.formMessage}</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-lg border border-white/10 bg-[#0d0e11] px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-accent-2/60"
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(227,10,23,0.35)] transition-transform hover:scale-[1.02]"
              >
                <Send size={16} />
                {sent ? t.contact.formSending : t.contact.formSend}
              </button>
              <p className="text-center text-xs text-gray-500">{t.contact.formNote}</p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
