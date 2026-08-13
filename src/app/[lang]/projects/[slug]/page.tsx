import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getContent } from "@/lib/content";
import { LANGS, isLang } from "@/lib/i18n";
import { projectSlugs, slugToNo, getProjectDetail } from "@/lib/project-details";

type Params = Promise<{ lang: string; slug: string }>;

export function generateStaticParams() {
  return LANGS.flatMap((lang) =>
    Object.values(projectSlugs).map((slug) => ({ lang, slug }))
  );
}

function resolve(lang: string, slug: string) {
  if (!isLang(lang)) return null;
  const no = slugToNo[slug];
  if (!no) return null;

  const t = getContent(lang);
  const project = t.projects.find((p) => p.no === no);
  if (!project) return null;

  return { t, project, detail: getProjectDetail(lang, no) };
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang, slug } = await params;
  const found = resolve(lang, slug);
  if (!found) return {};

  const { project } = found;
  return {
    title: `${project.title} — Serkan Acar`,
    description: project.summary,
    alternates: {
      canonical: `/${lang}/projects/${slug}`,
      languages: Object.fromEntries(LANGS.map((l) => [l, `/${l}/projects/${slug}`])),
    },
    openGraph: {
      title: `${project.title} — Serkan Acar`,
      description: project.summary,
      url: `/${lang}/projects/${slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { lang, slug } = await params;
  const found = resolve(lang, slug);
  if (!found) notFound();

  const { t, project, detail } = found;

  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <article className="mx-auto w-full max-w-5xl px-6 pt-24 pb-16 md:pt-32">
          <Link
            href={`/${lang}#projects`}
            className="label transition-colors hover:text-ink"
          >
            ← {t.projectPage.back}
          </Link>

          <p className="label mt-8">{project.meta}</p>
          <h1 className="mt-3 max-w-3xl text-[clamp(2rem,5.5vw,3.5rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
            {project.title}
          </h1>

          <div className="mt-8 grid gap-8 border-t border-rule pt-8 md:grid-cols-[1fr_14rem] md:gap-12">
            <div className="min-w-0 space-y-8">
              {detail?.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="label">{section.heading}</h2>
                  {section.paragraphs?.map((p) => (
                    <p key={p} className="mt-3 max-w-2xl text-[0.975rem] leading-relaxed text-ink-muted">
                      {p}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-3 space-y-1.5">
                      {section.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                          <span aria-hidden className="mt-[0.55em] h-px w-3 shrink-0 bg-rule" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <aside className="space-y-6 md:border-l md:border-rule-soft md:pl-8">
              <div>
                <h2 className="label">{t.roleLabel}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.role}</p>
              </div>
              <div>
                <h2 className="label">{t.projectPage.stackLabel}</h2>
                <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
                  {project.stack.map((s) => (
                    <li
                      key={s}
                      className="border border-rule px-2 py-0.5 font-[family-name:var(--font-mono)] text-[0.6875rem] text-ink-muted"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          {detail?.gallery && detail.gallery.length > 0 && (
            <div className="mt-14 grid gap-8 border-t border-rule pt-10 sm:grid-cols-2">
              {detail.gallery.map((item) => (
                <figure key={item.src}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-2">
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      sizes="(max-width: 640px) 100vw, 45vw"
                      className="object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
                    />
                  </div>
                  <figcaption className="label mt-2.5">{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
