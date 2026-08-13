"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { getContent } from "@/lib/content";

export default function Navbar() {
  const { lang, other, otherHref } = useLanguage();
  const t = getContent(lang);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const base = `/${lang}`;
  const links = [
    { href: `${base}#experience`, label: t.nav.experience },
    { href: `${base}#projects`, label: t.nav.projects },
    { href: `${base}#code`, label: t.nav.code },
    { href: `${base}#skills`, label: t.nav.skills },
    { href: `${base}#education`, label: t.nav.education },
    { href: `${base}#contact`, label: t.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur-sm">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-3">
        <Link href={base} className="text-sm font-semibold tracking-tight">
          Serkan Acar
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.8125rem] text-ink-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={otherHref}
            hrefLang={other}
            aria-label="Change language"
            className="font-[family-name:var(--font-mono)] text-xs text-ink-muted transition-colors hover:text-ink"
          >
            {other.toUpperCase()}
          </Link>
          <a
            href="/cv/Serkan-Acar-CV.pdf"
            download
            className="hidden border border-rule px-3 py-1.5 text-xs font-medium transition-colors hover:border-ink sm:block"
          >
            {t.nav.cv}
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            className="font-[family-name:var(--font-mono)] text-xs lg:hidden"
          >
            {open ? "×" : "≡"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-rule bg-paper lg:hidden">
          <div className="mx-auto w-full max-w-5xl px-6 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-rule-soft py-3 text-sm last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/cv/Serkan-Acar-CV.pdf"
              download
              className="block py-3 text-sm sm:hidden"
            >
              {t.nav.cv} (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
