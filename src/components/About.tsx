"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { getContent } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { lang } = useLanguage();
  const t = getContent(lang);

  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker={t.about.kicker} heading={t.about.heading} />

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <ScrollReveal direction="left">
            <div className="relative mx-auto max-w-sm lg:mx-0">
              <div className="absolute -inset-3 -z-10 rounded-3xl border border-accent-2/20" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/images/about-portrait.jpg"
                  alt="Serkan Acar portresi"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090b]/70 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-5 rounded-xl border border-white/10 bg-[#0d0e11] px-4 py-3 shadow-xl">
                <p className="font-[family-name:var(--font-mono)] text-xs text-accent-2">
                  Milli Teknoloji Hamlesi
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {t.about.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <p className="text-balance leading-relaxed text-gray-300">{p}</p>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.3}>
              <div className="pt-4">
                <h3 className="mb-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-accent-2">
                  {t.about.stackHeading}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {t.about.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
