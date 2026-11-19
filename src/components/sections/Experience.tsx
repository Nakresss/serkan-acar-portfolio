import type { Content } from "@/content/types";
import Reveal from "@/components/motion/Reveal";
import ScrollLine from "@/components/motion/ScrollLine";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Experience({ experience }: { experience: Content["experience"] }) {
  return (
    <section id="deneyim" aria-labelledby="deneyim-title" className="scroll-mt-20">
      <div className="mx-auto max-w-[90rem] px-4 py-24 sm:px-8 md:py-36">
        <SectionHeader id="deneyim-title" title={experience.title} />

        <ScrollLine className="mt-14 md:ml-[calc(25%-1rem)]">
          <ol>
            {experience.items.map((item, i) => (
              <Reveal
                as="li"
                key={`${item.org}-${item.start}`}
                delay={Math.min(i, 3) * 0.05}
                className="relative grid gap-3 pb-12 pl-8 md:grid-cols-12 md:gap-8 md:pl-10 last:pb-0"
              >
                <span
                  aria-hidden
                  className={`absolute top-1.5 -left-[4.5px] h-2.5 w-2.5 rounded-full border-2 border-paper ${
                    item.current ? "pulse bg-accent" : "bg-ink"
                  }`}
                />
                <p className="mono pt-1 text-ink-3 md:col-span-3">
                  {item.start} – {item.current ? <span className="text-accent-ink">{experience.present}</span> : item.end}
                </p>
                <div className="md:col-span-9">
                  <h3 className="text-[1.45rem] font-semibold leading-tight tracking-tight">{item.role}</h3>
                  <p className="mt-1 text-ink-2">
                    {item.org}
                    {item.note && <span className="text-ink-3"> · {item.note}</span>}
                  </p>
                  <ul className="mt-4 max-w-2xl space-y-2">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-3 leading-relaxed text-ink-2">
                        <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-ink-3" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </ScrollLine>
      </div>
    </section>
  );
}
