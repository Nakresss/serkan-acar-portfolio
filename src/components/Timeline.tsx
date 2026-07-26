"use client";

import { GraduationCap, Briefcase, Trophy, Users } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { getContent } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import type { TimelineItem } from "@/lib/content";

const typeIcon: Record<TimelineItem["type"], typeof GraduationCap> = {
  education: GraduationCap,
  experience: Briefcase,
  leadership: Trophy,
};

const typeColor: Record<TimelineItem["type"], string> = {
  education: "text-accent-2 bg-accent-2/10 border-accent-2/30",
  experience: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  leadership: "text-accent bg-accent/10 border-accent/30",
};

export default function Timeline() {
  const { lang } = useLanguage();
  const t = getContent(lang);

  return (
    <section id="timeline" className="relative py-28">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading kicker={t.timelineKicker} heading={t.timelineHeading} align="center" />

        <div className="relative mt-16">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {t.timeline.map((item, i) => {
              const Icon = typeIcon[item.type];
              const isEven = i % 2 === 0;
              return (
                <div key={i} className="relative md:grid md:grid-cols-2 md:gap-10">
                  <div
                    className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-[#08090b] md:left-1/2 md:-translate-x-1/2 ${typeColor[item.type]}`}
                  >
                    <Icon size={16} />
                  </div>

                  <div className={isEven ? "md:col-start-1 md:text-right md:pr-14" : "md:col-start-2 md:pl-14"}>
                    <ScrollReveal direction={isEven ? "right" : "left"}>
                      <div className="ml-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:ml-0">
                        <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-widest text-gray-500">
                          {item.period}
                        </span>
                        <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-accent-2">{item.place}</p>
                        <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.description}</p>
                      </div>
                    </ScrollReveal>
                  </div>
                  {isEven && <div className="hidden md:block" />}
                </div>
              );
            })}
          </div>
        </div>

        <ScrollReveal>
          <div className="mt-16">
            <h3 className="mb-6 flex items-center justify-center gap-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-gray-500">
              <Users size={14} />
              {t.leadershipHeading}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {t.leadership.map((l) => (
                <div key={l.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <h4 className="font-semibold text-white">{l.title}</h4>
                  <p className="mt-1.5 text-sm text-gray-400">{l.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
