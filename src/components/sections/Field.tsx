import Image from "next/image";
import type { Content } from "@/content/types";
import Parallax from "@/components/motion/Parallax";
import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Field({ field }: { field: Content["field"] }) {
  return (
    <section id="sahadan" aria-labelledby="sahadan-title" className="scroll-mt-20 bg-night text-fog">
      <div className="mx-auto max-w-[90rem] px-4 py-24 sm:px-8 md:py-36">
        <SectionHeader id="sahadan-title" tone="fog" title={field.title} aside={<p>{field.intro}</p>} />

        <div className="mt-20 space-y-28 md:space-y-40">
          {field.stories.map((story, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={story.title} className="grid gap-10 md:grid-cols-12 md:gap-8">
                <div className={`relative md:col-span-7 ${flip ? "md:order-2 md:col-start-6" : ""}`}>
                  <figure>
                    <Parallax strength={50} className="aspect-[4/5] bg-night-2 md:aspect-[5/6]">
                      <Image
                        src={story.photo.src}
                        alt={story.photo.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 55vw"
                        className="object-cover"
                      />
                    </Parallax>
                    {story.photo.caption && (
                      <figcaption className="mt-3 text-sm text-fog-2">{story.photo.caption}</figcaption>
                    )}
                  </figure>
                </div>

                <div
                  className={`flex flex-col md:col-span-5 ${flip ? "md:order-1 md:col-start-1 md:pr-8" : "md:pl-8"}`}
                >
                  <Reveal>
                    <p className="mono text-accent">{story.kicker}</p>
                    <h3 className="display mt-5 text-[clamp(2.1rem,4.2vw,3.5rem)]">{story.title}</h3>
                    <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-fog/85">
                      {story.text.map((t) => (
                        <p key={t}>{t}</p>
                      ))}
                    </div>
                  </Reveal>

                  {story.secondary && (
                    <Reveal delay={0.15} as="figure" className="mt-12 w-3/5 max-w-xs md:mt-auto">
                      <div className="relative aspect-square overflow-hidden bg-night-2">
                        <Image
                          src={story.secondary.src}
                          alt={story.secondary.alt}
                          fill
                          sizes="(max-width: 768px) 60vw, 20rem"
                          className="object-cover"
                        />
                      </div>
                      {story.secondary.caption && (
                        <figcaption className="mt-2 text-sm text-fog-2">{story.secondary.caption}</figcaption>
                      )}
                    </Reveal>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
