import type { Content } from "@/content/types";
import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

/** Certificates grouped by issuer; items with a file open the certificate PDF in a new tab. */
export default function Certificates({ certificates }: { certificates: Content["certificates"] }) {
  return (
    <section id="sertifikalar" aria-labelledby="sertifikalar-title" className="scroll-mt-20">
      <div className="mx-auto max-w-[90rem] px-4 py-24 sm:px-8 md:py-36">
        <SectionHeader
          id="sertifikalar-title"
          title={certificates.title}
          aside={<p>{certificates.intro}</p>}
        />

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.groups.map((group, i) => (
            <Reveal key={group.issuer} delay={(i % 3) * 0.06} className="border-t border-rule pt-4">
              <h3 className="font-semibold">{group.issuer}</h3>
              <ul className="mt-3 space-y-2.5 text-ink-2">
                {group.items.map((c) => (
                  <li key={c.name} className="flex justify-between gap-4 leading-snug">
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noopener" className="link text-ink">
                        {c.name}
                        <span className="mono ml-2 text-accent-ink">{certificates.file} ↗</span>
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
    </section>
  );
}
