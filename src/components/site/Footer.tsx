import type { Content, Lang } from "@/content/types";
import { contactInfo } from "@/content";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export default function Footer({ lang, footer }: { lang: Lang; footer: Content["footer"] }) {
  return (
    <footer className="bg-night text-fog-2">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-6 border-t border-fog-rule px-4 py-8 text-sm sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>
          © 2026 Serkan Acar <span className="px-2 text-fog-rule">/</span> {footer.updated}
        </p>
        <div className="flex items-center gap-6">
          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-fog" aria-label="GitHub">
            <GithubIcon size={16} />
          </a>
          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fog" aria-label="LinkedIn">
            <LinkedinIcon size={16} />
          </a>
          <a href={`/${lang}#top`} className="link text-fog">
            {footer.top} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
