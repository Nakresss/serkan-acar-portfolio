import type { Content } from "@/content/types";
import { contactInfo } from "@/content";
import Reveal from "@/components/motion/Reveal";
import CopyButton from "@/components/ui/CopyButton";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export default function Contact({ contact, location }: { contact: Content["contact"]; location: string }) {
  const [user, domain] = contactInfo.email.split("@");

  return (
    <section id="iletisim" aria-labelledby="iletisim-title" className="scroll-mt-20 bg-night text-fog">
      <div className="mx-auto max-w-[90rem] px-4 pt-24 pb-20 sm:px-8 md:pt-36 md:pb-28">
        <Reveal className="grid gap-8 md:grid-cols-12">
          <h2 id="iletisim-title" className="mono text-fog-2 md:col-span-3">
            {contact.title}
          </h2>
          <p className="max-w-2xl text-[clamp(1.4rem,2.6vw,2.1rem)] leading-snug md:col-span-9">{contact.lead}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-16 md:mt-24">
          <a
            href={`mailto:${contactInfo.email}`}
            className="group block text-[clamp(1.9rem,8.5vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.035em] [font-stretch:112%] lg:text-[clamp(3rem,5vw,5rem)]"
          >
            <span className="block lg:inline">{user}</span>
            <span className="block text-fog-2 transition-colors duration-300 group-hover:text-accent lg:inline">
              @{domain}
            </span>
          </a>
          <div className="mt-6 flex items-center gap-6 text-sm">
            <CopyButton
              value={contactInfo.email}
              label={contact.copy}
              done={contact.copied}
              className="rounded-full border border-fog/40 px-4 py-1.5 transition-colors hover:border-fog"
            />
            <a href={`mailto:${contactInfo.email}`} className="link text-fog-2 hover:text-fog">
              mailto ↗
            </a>
          </div>
        </Reveal>

        <dl className="mt-20 grid gap-8 border-t border-fog-rule pt-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <dt className="mono text-fog-2">{contact.phone}</dt>
            <dd className="mt-2">
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="link">
                {contactInfo.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="mono text-fog-2">{contact.location}</dt>
            <dd className="mt-2">{location}</dd>
          </div>
          <div>
            <dt className="mono text-fog-2">Online</dt>
            <dd className="mt-2 flex flex-col gap-1.5">
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
                <LinkedinIcon size={15} /> LinkedIn
              </a>
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
                <GithubIcon size={15} /> GitHub
              </a>
            </dd>
          </div>
          <div>
            <dt className="mono text-fog-2">CV</dt>
            <dd className="mt-2">
              <a href={contactInfo.cv} download className="link">
                {contact.cv} ↓
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
