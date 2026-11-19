import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LANGS, getContent, getProject, isLang, projectHref, projectSlugs } from "@/content";
import Reveal from "@/components/motion/Reveal";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.flatMap((lang) => projectSlugs.map((slug) => ({ lang, slug })));
}

function resolve(lang: string, slug: string) {
  if (!isLang(lang)) return null;
  const project = getProject(lang, slug);
  if (!project) return null;
  const t = getContent(lang);
  const index = t.projects.items.indexOf(project);
  const next = t.projects.items[(index + 1) % t.projects.items.length];
  return { lang, t, project, next };
}

export async function generateMetadata({ params }: PageProps<"/[lang]/projects/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const found = resolve(lang, slug);
  if (!found) return {};
  const { project } = found;
  const images = project.cover ? [{ url: project.cover.src, alt: project.cover.alt }] : undefined;

  // `openGraph` and `twitter` replace the layout's objects wholesale, so every field is repeated here.
  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: projectHref(found.lang, slug),
      languages: Object.fromEntries(LANGS.map((l) => [l, projectHref(l, slug)])),
    },
    openGraph: {
      title: `${project.title} · Serkan Acar`,
      description: project.summary,
      url: projectHref(found.lang, slug),
      siteName: "Serkan Acar",
      locale: found.lang === "tr" ? "tr_TR" : "en_GB",
      type: "article",
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} · Serkan Acar`,
      description: project.summary,
      ...(images ? { images } : {}),
    },
  };
}

const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

export default async function ProjectPage({ params }: PageProps<"/[lang]/projects/[slug]">) {
  const { lang, slug } = await params;
  const found = resolve(lang, slug);
  if (!found) notFound();
  const { t, project, next } = found;
  const p = t.projectPage;

  const facts = [
    { label: p.year, value: project.year },
    ...(project.result ? [{ label: p.result, value: project.result }] : []),
    { label: p.role, value: project.role },
    { label: p.stack, value: project.stack.join(", ") },
  ];

  return (
    <article>
      <header className="mx-auto max-w-[90rem] px-4 pt-28 sm:px-8 md:pt-36">
        <Link href={`/${found.lang}#projeler`} className="link fade text-sm text-ink-2" style={delay(0)}>
          ← {p.back}
        </Link>

        <p className="mono fade mt-12 text-accent-ink" style={delay(0.05)}>
          {project.meta}
        </p>
        <h1 className="display mt-5 max-w-6xl text-[clamp(2.75rem,8.5vw,7.5rem)]">
          <span className="line-mask">
            <span className="rise" style={delay(0.1)}>
              {project.title}
            </span>
          </span>
        </h1>
        <p className="fade mt-8 max-w-2xl text-[1.2rem] leading-relaxed text-ink-2" style={delay(0.35)}>
          {project.summary}
        </p>

        <dl className="fade mt-14 grid gap-6 border-t border-rule pt-6 sm:grid-cols-2 lg:grid-cols-4" style={delay(0.45)}>
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="mono text-ink-3">{f.label}</dt>
              <dd className={`mt-2 leading-snug ${f.label === p.result ? "font-semibold text-accent-ink" : ""}`}>
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      {project.cover && (
        <div className="mx-auto mt-14 max-w-[90rem] px-4 sm:px-8">
          <div className="unveil relative aspect-[16/9] overflow-hidden bg-paper-2" style={delay(0.5)}>
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1376px"
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="mx-auto max-w-[90rem] px-4 py-24 sm:px-8 md:py-32">
        <div className="space-y-16">
          {project.sections.map((s) => (
            <Reveal key={s.heading} className="grid gap-4 border-t border-rule pt-6 md:grid-cols-12 md:gap-8">
              <h2 className="text-xl font-semibold tracking-tight md:col-span-3">{s.heading}</h2>
              <div className="md:col-span-8 md:col-start-5">
                {s.paragraphs?.map((para) => (
                  <p key={para} className="max-w-2xl text-[1.1rem] leading-relaxed text-ink-2 [&+p]:mt-4">
                    {para}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="max-w-2xl space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-4 text-[1.05rem] leading-relaxed text-ink-2">
                        <span aria-hidden className="mt-[0.75em] h-px w-4 shrink-0 bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {project.gallery && project.gallery.length > 0 && (
          <section aria-labelledby="gallery-title" className="mt-28">
            <h2 id="gallery-title" className="mono text-ink-3">
              {p.photos}
            </h2>
            <div className="mt-6 grid gap-x-8 gap-y-12 sm:grid-cols-2">
              {project.gallery.map((item, i) => (
                <Reveal as="figure" key={item.src} delay={(i % 2) * 0.1} className={i % 2 === 1 ? "sm:mt-24" : ""}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-paper-2">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 45vw"
                      className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] hover:scale-[1.04]"
                    />
                  </div>
                  {item.caption && <figcaption className="mt-3 text-sm text-ink-3">{item.caption}</figcaption>}
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </div>

      <Link
        href={projectHref(found.lang, next.slug)}
        className="group block bg-night text-fog transition-colors hover:bg-night-2"
      >
        <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-8 md:py-28">
          <p className="mono text-fog-2">{p.next}</p>
          <p className="display mt-6 flex items-end justify-between gap-6 text-[clamp(2.25rem,6.5vw,5.5rem)]">
            <span>{next.title}</span>
            <span
              aria-hidden
              className="text-accent transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-3"
            >
              →
            </span>
          </p>
        </div>
      </Link>
    </article>
  );
}
