"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { getContent } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const { lang } = useLanguage();
  const t = getContent(lang);

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker={t.projectsKicker} heading={t.projectsHeading} align="center" />

        <div className="mt-16 space-y-16">
          {t.projects.map((project, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={project.title}
                className={`grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14 ${
                  reversed ? "lg:[direction:rtl]" : ""
                }`}
              >
                <ScrollReveal direction={reversed ? "right" : "left"}>
                  <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 ${reversed ? "lg:[direction:ltr]" : ""}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090b]/60 via-transparent to-transparent" />
                  </div>
                </ScrollReveal>

                <ScrollReveal direction={reversed ? "left" : "right"} className={reversed ? "lg:[direction:ltr]" : ""}>
                  <div>
                    <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-gray-500">
                      {project.year}
                    </span>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-gray-400">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-medium text-accent-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
