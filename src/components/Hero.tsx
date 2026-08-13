"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { getContent } from "@/lib/content";

export default function Hero() {
  const { lang } = useLanguage();
  const t = getContent(lang);
  const m = t.hero;

  const meta = [
    [m.metaLabels.location, m.metaValues.location],
    [m.metaLabels.focus, m.metaValues.focus],
    [m.metaLabels.languages, m.metaValues.languages],
    [m.metaLabels.status, m.metaValues.status],
  ];

  return (
    <section id="profile" className="scroll-mt-14">
      <div className="mx-auto w-full max-w-5xl px-6 pt-24 pb-14 md:pt-32 md:pb-20">
        <p className="label">
          {m.role} · {m.field}
        </p>

        <h1 className="mt-5 text-[clamp(3.25rem,13vw,8.5rem)] font-extrabold leading-[0.86] tracking-[-0.045em]">
          Serkan
          <br />
          Acar
        </h1>

        <div className="mt-10 grid gap-8 border-t border-rule pt-8 md:grid-cols-[1.35fr_1fr] md:gap-12">
          <p className="max-w-xl text-[0.975rem] leading-relaxed text-ink-muted">{m.profile}</p>

          <div className="relative aspect-[4/5] w-full max-w-[16rem] overflow-hidden bg-paper-2 md:justify-self-end">
            <Image
              src="/images/about-portrait.jpg"
              alt="Serkan Acar"
              fill
              priority
              sizes="(max-width: 768px) 70vw, 256px"
              className="object-cover object-top grayscale transition-[filter] duration-500 hover:grayscale-0"
            />
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-rule pt-6 md:grid-cols-4">
          {meta.map(([label, value]) => (
            <div key={label}>
              <dt className="label">{label}</dt>
              <dd className="mt-1.5 text-sm leading-snug">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="border border-ink bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-transparent hover:text-ink"
          >
            {m.cta}
          </a>
          <a
            href="/cv/Serkan-Acar-CV.pdf"
            download
            className="border border-rule px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink"
          >
            {m.cvCta}
          </a>
        </div>
      </div>
    </section>
  );
}
