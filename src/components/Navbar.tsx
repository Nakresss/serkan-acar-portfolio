"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Languages } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { getContent } from "@/lib/content";

export default function Navbar() {
  const { lang, toggle } = useLanguage();
  const t = getContent(lang);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#timeline", label: t.nav.timeline },
    { href: "#projects", label: t.nav.projects },
    { href: "#code", label: t.nav.code },
    { href: "#achievements", label: t.nav.achievements },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-[#08090b]/85 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-white">
          SERKAN<span className="text-accent">.</span>ACAR
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-gray-200 transition-colors hover:border-white/40 hover:text-white"
            aria-label="Toggle language"
          >
            <Languages size={14} />
            {lang === "tr" ? "EN" : "TR"}
          </button>
          <a
            href="/cv/Serkan-Acar-CV.pdf"
            download
            className="flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white shadow-[0_0_20px_rgba(227,10,23,0.35)] transition-transform hover:scale-105"
          >
            <Download size={14} />
            {t.nav.cv}
          </a>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#08090b]/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-3 px-3">
                <button
                  onClick={toggle}
                  className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-gray-200"
                >
                  <Languages size={14} />
                  {lang === "tr" ? "EN" : "TR"}
                </button>
                <a
                  href="/cv/Serkan-Acar-CV.pdf"
                  download
                  className="flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white"
                >
                  <Download size={14} />
                  {t.nav.cv}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
