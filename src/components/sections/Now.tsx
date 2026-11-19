import type { Content } from "@/content/types";
import Reveal from "@/components/motion/Reveal";

export default function Now({ now }: { now: Content["now"] }) {
  return (
    <section aria-labelledby="now-title" className="mt-20 bg-paper-2 md:mt-28">
      <div className="mx-auto max-w-[90rem] px-4 py-14 sm:px-8 md:py-20">
        <div className="flex items-center justify-between gap-4">
          <h2 id="now-title" className="flex items-center gap-3 text-sm font-semibold">
            <span aria-hidden className="pulse relative inline-block h-2 w-2 rounded-full bg-accent" />
            {now.title}
          </h2>
          <span className="mono text-ink-3">{now.updated}</span>
        </div>

        <ul className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {now.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 0.1} className="border-t border-rule pt-5">
              <p className="mono text-accent-ink">{item.since}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-1 text-ink-2">{item.place}</p>
              <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-ink-2">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
