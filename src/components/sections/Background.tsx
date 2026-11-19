import type { Content } from "@/content/types";
import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

/** Education, certificates, awards and clubs, set as two columns. */
export default function Background({
  education,
  awards,
}: {
  education: Content["education"];
  awards: Content["awards"];
}) {
  return (
    <section id="egitim" aria-labelledby="egitim-title" className="scroll-mt-20">
      <div className="mx-auto max-w-[90rem] px-4 py-24 sm:px-8 md:py-36">
        <SectionHeader id="egitim-title" title={education.title} />

        <div className="mt-14 grid gap-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <ol className="border-b border-rule">
              {education.items.map((e, i) => (
                <Reveal
                  as="li"
                  key={e.program}
                  delay={i * 0.06}
                  className="grid gap-2 border-t border-rule py-6 sm:grid-cols-[8rem_1fr] sm:gap-6"
                >
                  <span className="mono pt-1.5 text-ink-3">{e.period}</span>
                  <div>
                    <h3 className="flex flex-wrap items-center gap-3 text-xl font-semibold tracking-tight">
                      {e.program}
                      {e.current && <span aria-hidden className="pulse relative h-2 w-2 rounded-full bg-accent" />}
                    </h3>
                    <p className="mt-1 text-ink-2">{e.school}</p>
                    {e.detail && <p className="mt-3 max-w-lg leading-relaxed text-ink-3">{e.detail}</p>}
                  </div>
                </Reveal>
              ))}
            </ol>

            <h3 className="mono mt-16 text-ink-3">{education.certsTitle}</h3>
            <div className="mt-5 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {education.certs.map((group) => (
                <Reveal key={group.issuer} className="border-t border-rule pt-4">
                  <p className="font-semibold">{group.issuer}</p>
                  <ul className="mt-3 space-y-2 text-ink-2">
                    {group.items.map((c) => (
                      <li key={c.name} className="flex justify-between gap-4 leading-snug">
                        {c.href ? (
                          <a href={c.href} target="_blank" rel="noopener" className="link">
                            {c.name}
                          </a>
                        ) : (
                          <span>{c.name}</span>
                        )}
                        {c.year && <span className="mono shrink-0 pt-0.5 text-ink-3">{c.year}</span>}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>

          <aside aria-labelledby="awards-title" className="lg:col-span-4 lg:col-start-9">
            <h3 id="awards-title" className="display text-[clamp(2rem,3.5vw,2.75rem)]">
              {awards.title}
            </h3>
            <ol className="mt-8 border-b border-rule">
              {awards.items.map((a, i) => (
                <Reveal as="li" key={a.title} delay={i * 0.06} className="border-t border-rule py-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="mono text-ink-3">{a.year}</span>
                    <span className="text-right font-semibold text-accent-ink">{a.result}</span>
                  </div>
                  <p className="mt-2 leading-snug">{a.title}</p>
                </Reveal>
              ))}
            </ol>

            <h3 className="mono mt-14 text-ink-3">{awards.leadershipTitle}</h3>
            <ul className="mt-4 space-y-6">
              {awards.leadership.map((l) => (
                <Reveal as="li" key={l.title}>
                  <p className="font-semibold leading-snug">{l.title}</p>
                  <p className="mt-1 leading-relaxed text-ink-2">{l.text}</p>
                </Reveal>
              ))}
            </ul>

            <h3 className="mono mt-14 text-ink-3">{awards.interestsTitle}</h3>
            <p className="mt-3 leading-relaxed text-ink-2">{awards.interests}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
