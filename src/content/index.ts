import type { Content, Lang, Project } from "./types";
import { tr } from "./tr";
import { en } from "./en";

export type { Content, Lang, Project } from "./types";

export const LANGS: Lang[] = ["tr", "en"];

export function isLang(value: string): value is Lang {
  return (LANGS as string[]).includes(value);
}

const dictionaries: Record<Lang, Content> = { tr, en };

export function getContent(lang: Lang): Content {
  return dictionaries[lang];
}

/** Slugs are shared by both languages, so the TR list is the canonical order. */
export const projectSlugs = tr.projects.items.map((p) => p.slug);

export function getProject(lang: Lang, slug: string): Project | undefined {
  return dictionaries[lang].projects.items.find((p) => p.slug === slug);
}

/** Project detail URL. Kept as `/projects/` because these paths are already indexed. */
export function projectHref(lang: Lang, slug: string) {
  return `/${lang}/projects/${slug}`;
}

export const contactInfo = {
  email: "acar.serkan@outlook.com.tr",
  phone: "+90 543 537 19 63",
  github: "https://github.com/Nakresss",
  linkedin: "https://www.linkedin.com/in/serkan-a-972b63244/",
  cv: "/cv/Serkan-Acar-CV.pdf",
} as const;
