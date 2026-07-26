"use client";

import { Mail, ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { getContent, socials } from "@/lib/content";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  const { lang } = useLanguage();
  const t = getContent(lang);
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg font-bold text-white">
            SERKAN<span className="text-accent">.</span>ACAR
          </p>
          <p className="mt-1 max-w-xs text-xs text-gray-500">{t.footer.tagline}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-colors hover:border-white/40 hover:text-white"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-colors hover:border-white/40 hover:text-white"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={`mailto:${socials.email}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-colors hover:border-white/40 hover:text-white"
          >
            <Mail size={16} />
          </a>
        </div>

        <a
          href="#top"
          className="flex items-center gap-1.5 text-xs font-medium text-gray-400 transition-colors hover:text-white"
        >
          {t.footer.backToTop}
          <ArrowUp size={14} />
        </a>
      </div>
      <p className="mt-6 text-center text-xs text-gray-600">
        © {year} Serkan Acar. {t.footer.rights}
      </p>
    </footer>
  );
}
