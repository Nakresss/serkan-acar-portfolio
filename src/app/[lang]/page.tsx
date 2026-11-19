import { notFound } from "next/navigation";
import { contactInfo, getContent, isLang } from "@/content";
import { siteUrl } from "@/lib/site";
import Hero from "@/components/sections/Hero";
import Now from "@/components/sections/Now";
import Featured from "@/components/sections/Featured";
import ProjectIndex from "@/components/sections/ProjectIndex";
import Experience from "@/components/sections/Experience";
import Field from "@/components/sections/Field";
import Software from "@/components/sections/Software";
import Skills from "@/components/sections/Skills";
import Background from "@/components/sections/Background";
import Contact from "@/components/sections/Contact";
import SectionHeader from "@/components/ui/SectionHeader";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getContent(lang);

  const others = t.projects.items.filter((p) => p.slug !== t.featured.slug);

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Serkan Acar",
    jobTitle: t.meta.ogRole,
    url: `${siteUrl}/${lang}`,
    image: `${siteUrl}${t.hero.photo.src}`,
    email: `mailto:${contactInfo.email}`,
    address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "İstanbul Nişantaşı Üniversitesi" },
      { "@type": "CollegeOrUniversity", name: "Ordu Üniversitesi" },
    ],
    knowsLanguage: ["tr", "en", "mk"],
    sameAs: [contactInfo.github, contactInfo.linkedin],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // Static data authored in this repo; `<` is escaped so the payload cannot close the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
      />
      <Hero hero={t.hero} />
      <Now now={t.now} />

      <section id="projeler" aria-labelledby="projeler-title" className="scroll-mt-20">
        <Featured lang={lang} featured={t.featured} />
        <div className="mx-auto max-w-[90rem] px-4 py-24 sm:px-8 md:py-36">
          <SectionHeader id="projeler-title" title={t.projects.title} aside={<p>{t.projects.intro}</p>} />
          <div className="mt-14">
            <ProjectIndex lang={lang} projects={others} open={t.projects.open} />
          </div>
        </div>
      </section>

      <Experience experience={t.experience} />
      <Field field={t.field} />
      <Software software={t.software} />
      <Skills skills={t.skills} />
      <Background education={t.education} awards={t.awards} />
      <Contact contact={t.contact} location={t.hero.location} />
    </>
  );
}
