import Link from "next/link";
import type { Content, Lang } from "@/content/types";
import { projectHref } from "@/content";
import Reveal from "@/components/motion/Reveal";

export default function Featured({ lang, featured }: { lang: Lang; featured: Content["featured"] }) {
  const href = projectHref(lang, featured.slug);

  return (
    <section aria-labelledby="featured-title" className="relative overflow-hidden bg-night text-fog">
      {/* The placing, set huge behind the content. Decorative: the result is also stated in text. */}
      <span
        aria-hidden
        className="display pointer-events-none absolute -top-[0.12em] -right-[0.06em] select-none text-[clamp(16rem,48vw,44rem)] leading-none text-night-2"
      >
        3.
      </span>

      <div className="relative mx-auto max-w-[90rem] px-4 py-20 sm:px-8 md:py-32">
        <Reveal>
          <p className="mono text-fog-2">{featured.label}</p>
          <h2 id="featured-title" className="display mt-6 max-w-4xl text-[clamp(2.75rem,8vw,7rem)]">
            {featured.title}
          </h2>
          <p className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-xl">
            <span className="font-semibold text-accent">{featured.result}</span>
            <span className="text-fog-2">{featured.meta}</span>
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 max-w-2xl">
          <p className="text-[1.1rem] leading-relaxed text-fog/90">{featured.intro}</p>
        </Reveal>

        <h3 className="mono mt-20 text-fog-2">{featured.tasksTitle}</h3>
        <ol className="mt-5 grid gap-px overflow-hidden bg-fog-rule md:grid-cols-3">
          {featured.tasks.map((task, i) => (
            <Reveal as="li" key={task.title} delay={i * 0.1} className="flex flex-col bg-night p-6 md:p-8">
              <span className="mono text-accent">0{i + 1}</span>
              <h4 className="mt-8 text-2xl font-semibold tracking-tight">{task.title}</h4>
              <p className="mt-3 leading-relaxed text-fog-2">{task.text}</p>
              <p className="mono mt-auto pt-8 text-fog/80">{task.tools}</p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-20 grid gap-10 md:grid-cols-12">
          <h3 className="mono text-fog-2 md:col-span-3">{featured.metricsTitle}</h3>
          <dl className="grid gap-8 sm:grid-cols-3 md:col-span-9">
            {featured.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.08} className="flex flex-col gap-2 border-t border-fog-rule pt-4">
                <dt className="order-2 text-fog-2">{m.label}</dt>
                <dd className="display order-1 whitespace-nowrap text-[clamp(2rem,4vw,3.25rem)]">{m.value}</dd>
              </Reveal>
            ))}
          </dl>
        </div>

        <Link
          href={href}
          className="group mt-16 inline-flex items-center gap-3 border-b border-fog/40 pb-1 text-lg transition-colors hover:border-accent hover:text-accent"
        >
          {featured.more}
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
