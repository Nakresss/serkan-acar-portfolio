"use client";

import { useLanguage } from "@/lib/language-context";
import { getContent } from "@/lib/content";

export default function Footer() {
  const { lang } = useLanguage();
  const t = getContent(lang);

  return (
    <footer className="rule-top">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="label">
          © {new Date().getFullYear()} Serkan Acar · {t.footer.rights}
        </p>
        <a href="#profile" className="label transition-colors hover:text-ink">
          {t.footer.top} ↑
        </a>
      </div>
    </footer>
  );
}
