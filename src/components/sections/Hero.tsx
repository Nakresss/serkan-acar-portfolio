import Image from "next/image";
import type { CSSProperties } from "react";
import type { Content } from "@/content/types";
import { contactInfo } from "@/content";
import Reveal from "@/components/motion/Reveal";

const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

export default function Hero({ hero }: { hero: Content["hero"] }) {
  return (
    <section id="top" className="relative mx-auto max-w-[90rem] px-4 pt-24 sm:px-8 md:pt-28">
      <div className="fade flex items-baseline justify-between gap-4 border-b border-rule pb-3 text-sm text-ink-2" style={delay(0.1)}>
        <span>{hero.role}</span>
        <span className="hidden sm:inline">{hero.location}</span>
      </div>

      <div className="grid gap-10 pt-8 md:grid-cols-12 md:gap-8 md:pt-10">
        <div className="flex flex-col md:col-span-7">
          <h1 className="display text-[clamp(4.25rem,15.5vw,11.5rem)] md:text-[clamp(4rem,11vw,11.5rem)]">
            <span className="line-mask">
              <span className="rise" style={delay(0.15)}>
                Serkan
              </span>
            </span>
            <span className="line-mask">
              <span className="rise" style={delay(0.27)}>
                Acar<span className="text-accent">.</span>
              </span>
            </span>
          </h1>

          <div className="mt-10 max-w-xl space-y-4 text-[1.05rem] leading-relaxed text-ink-2 md:mt-auto md:pt-12">
            {hero.intro.map((p, i) => (
              <p key={i} className="fade" style={delay(0.55 + i * 0.1)}>
                {p}
              </p>
            ))}
          </div>

          <div className="fade mt-8 flex flex-wrap items-center gap-x-6 gap-y-3" style={delay(0.8)}>
            <a
              href={`mailto:${contactInfo.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-accent-ink"
            >
              {hero.ctaMail}
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a href={contactInfo.cv} download className="link text-sm">
              {hero.ctaCv} (PDF)
            </a>
          </div>
        </div>

        <figure className="md:col-span-5">
          <div className="unveil relative aspect-[4/5] overflow-hidden bg-paper-2" style={delay(0.35)}>
            <Image
              src={hero.photo.src}
              alt={hero.photo.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-[50%_20%]"
            />
          </div>
          {hero.photo.caption && (
            <figcaption className="fade mt-3 flex items-center gap-2 text-sm text-ink-3" style={delay(1)}>
              <span aria-hidden className="h-px w-6 bg-ink-3" />
              {hero.photo.caption}
            </figcaption>
          )}
        </figure>
      </div>

      <dl className="mt-16 grid grid-cols-2 border-t border-rule md:mt-20 md:grid-cols-4">
        {hero.facts.map((f, i) => (
          <Reveal
            key={f.label}
            delay={i * 0.08}
            className={`flex flex-col gap-2 border-rule py-6 pr-4 ${i % 2 === 1 ? "border-l pl-4" : ""} ${
              i > 1 ? "border-t md:border-t-0" : ""
            } ${i === 2 ? "md:border-l md:pl-4" : ""}`}
          >
            <dt className="order-2 text-sm leading-snug text-ink-2">{f.label}</dt>
            <dd className="display order-1 text-[clamp(2.25rem,5vw,3.75rem)]">
              {i < 2 ? <span className="text-accent">{f.value}</span> : f.value}
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
