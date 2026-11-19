import type { Content } from "@/content/types";
import { contactInfo } from "@/content";
import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Software({ software }: { software: Content["software"] }) {
  return (
    <section id="yazilim" aria-labelledby="yazilim-title" className="scroll-mt-20">
      <div className="mx-auto max-w-[90rem] px-4 py-24 sm:px-8 md:py-36">
        <SectionHeader id="yazilim-title" title={software.title} aside={<p>{software.intro}</p>} />

        <ul className="mt-14 border-b border-rule">
          {software.repos.map((repo, i) => (
            <Reveal
              as="li"
              key={repo.name}
              delay={Math.min(i, 4) * 0.04}
              className="grid gap-x-8 gap-y-2 border-t border-rule py-6 md:grid-cols-12 md:items-baseline"
            >
              <span className="mono text-ink-3 md:col-span-1">{repo.year}</span>
              <h3 className="text-xl font-semibold tracking-tight md:col-span-3">{repo.name}</h3>
              <p className="max-w-xl leading-relaxed text-ink-2 md:col-span-5">{repo.summary}</p>
              <div className="flex flex-col gap-1 text-sm md:col-span-3 md:items-end md:text-right">
                <span className="mono text-ink-3">{repo.stack}</span>
                <span className="flex gap-4">
                  {repo.live && (
                    <a href={repo.live} target="_blank" rel="noopener noreferrer" className="link-static">
                      {software.liveLabel} ↗
                    </a>
                  )}
                  {repo.url ? (
                    <a href={repo.url} target="_blank" rel="noopener noreferrer" className="link-static">
                      {software.sourceLabel} ↗
                    </a>
                  ) : (
                    <span className="text-ink-3">{software.privateLabel}</span>
                  )}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
          <p className="max-w-xl leading-relaxed text-ink-2">{software.notebooks}</p>
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link shrink-0 font-semibold"
          >
            {software.all} · github.com/Nakresss ↗
          </a>
        </div>
      </div>
    </section>
  );
}
