import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { LANGS } from "@/lib/i18n";
import { projectSlugs } from "@/lib/project-details";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home = LANGS.map((lang) => ({
    url: `${siteUrl}/${lang}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: lang === "tr" ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(LANGS.map((l) => [l, `${siteUrl}/${l}`])),
    },
  }));

  const projects = LANGS.flatMap((lang) =>
    Object.values(projectSlugs).map((slug) => ({
      url: `${siteUrl}/${lang}/projects/${slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    }))
  );

  return [...home, ...projects];
}
