import type { Content } from "@/content/types";
import Reveal from "@/components/motion/Reveal";

export default function Skills({ skills }: { skills: Content["skills"] }) {
  return (
    <section aria-labelledby="skills-title" className="bg-paper-2">
      <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <h2 id="skills-title" className="display text-[clamp(2.25rem,5vw,4rem)] md:col-span-4">
            {skills.title}
          </h2>
          <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-2 md:col-span-8 lg:grid-cols-3">
            {skills.groups.map((g, i) => (
              <Reveal key={g.label} delay={(i % 3) * 0.06} className="border-t border-rule pt-4">
                <dt className="mono text-accent-ink">{g.label}</dt>
                <dd className="mt-4">
                  <ul className="space-y-1.5">
                    {g.items.map((item) => (
                      <li key={item} className="text-lg leading-snug">
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
