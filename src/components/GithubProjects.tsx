"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { getContent, socials } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { GithubIcon } from "./icons";

export default function GithubProjects() {
  const { lang } = useLanguage();
  const t = getContent(lang);

  return (
    <section id="code" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker={t.githubKicker} heading={t.githubHeading} align="center" />

        <ScrollReveal>
          <p className="mx-auto mt-6 max-w-2xl text-center text-gray-400">{t.githubIntro}</p>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.github.map((repo, i) => (
            <ScrollReveal key={repo.title} delay={(i % 3) * 0.08}>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-accent-2/40 hover:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white">
                    <GithubIcon size={18} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-gray-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-2"
                  />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                  {repo.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">{repo.description}</p>
                <span className="mt-4 w-fit rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-accent-2">
                  {repo.language}
                </span>
              </a>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.3}>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full min-h-[220px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/15 p-6 text-center transition-colors hover:border-accent/40"
            >
              <GithubIcon size={28} className="text-gray-400" />
              <span className="text-sm font-semibold text-white">github.com/Nakresss</span>
              <span className="text-xs text-gray-500">Tüm repoları görüntüle →</span>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
