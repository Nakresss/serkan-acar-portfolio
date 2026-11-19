import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { LANGS, projectHref, projectSlugs } from "@/content";

// Fixed date of the last content update, so the sitemap does not claim a change on every build.
const lastModified = new Date("2026-11-19");

export default function sitemap(): MetadataRoute.Sitemap {
  const home = LANGS.map((lang) => ({
    url: `${siteUrl}/${lang}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: lang === "tr" ? 1 : 0.9,
    alternates: { languages: Object.fromEntries(LANGS.map((l) => [l, `${siteUrl}/${l}`])) },
  }));

  const projects = LANGS.flatMap((lang) =>
    projectSlugs.map((slug) => ({
      url: `${siteUrl}${projectHref(lang, slug)}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(LANGS.map((l) => [l, `${siteUrl}${projectHref(l, slug)}`])),
      },
    }))
  );

  return [...home, ...projects];
}
