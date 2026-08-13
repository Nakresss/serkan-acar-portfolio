"use client";

import { createContext, useContext, ReactNode } from "react";
import { usePathname } from "next/navigation";
import type { Lang } from "./i18n";

export type { Lang };

interface LanguageContextValue {
  lang: Lang;
  other: Lang;
  otherHref: string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  lang,
  children,
}: {
  lang: Lang;
  children: ReactNode;
}) {
  const pathname = usePathname() ?? `/${lang}`;
  const other: Lang = lang === "tr" ? "en" : "tr";
  const otherHref = pathname.startsWith(`/${lang}`)
    ? `/${other}${pathname.slice(lang.length + 1)}`
    : `/${other}`;

  return (
    <LanguageContext.Provider value={{ lang, other, otherHref }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
