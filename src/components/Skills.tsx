"use client";

import { Code2, BrainCircuit, Layers3, Cpu, Boxes, Wrench } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { getContent } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const icons = [Code2, BrainCircuit, Layers3, Cpu, Boxes, Wrench];

export default function Skills() {
  const { lang } = useLanguage();
  const t = getContent(lang);

  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading kicker={t.skills.kicker} heading={t.skills.heading} align="center" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.categories.map((cat, i) => {
            const Icon = icons[i % icons.length];
            return (
              <ScrollReveal key={cat.title} delay={(i % 3) * 0.1}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-accent-2/40 hover:bg-white/[0.05]">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-2/10 text-accent-2 transition-colors group-hover:bg-accent-2/20">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-3 font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
