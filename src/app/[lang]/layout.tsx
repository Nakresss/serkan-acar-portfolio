import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { LANGS, getContent, isLang } from "@/content";
import { siteUrl } from "@/lib/site";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import MotionProvider from "@/components/motion/MotionProvider";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#edeae2",
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const { meta } = getContent(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: { default: meta.title, template: "%s · Serkan Acar" },
    description: meta.description,
    authors: [{ name: "Serkan Acar", url: siteUrl }],
    alternates: {
      canonical: `/${lang}`,
      languages: { tr: "/tr", en: "/en", "x-default": "/tr" },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/${lang}`,
      siteName: "Serkan Acar",
      locale: lang === "tr" ? "tr_TR" : "en_GB",
      type: "profile",
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
  };
}

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getContent(lang);

  return (
    <html lang={lang} className={`${archivo.variable} ${plexMono.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <MotionProvider>
          <Header lang={lang} nav={t.nav} />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer lang={lang} footer={t.footer} />
        </MotionProvider>
        <div aria-hidden className="grain" />
        <Analytics />
      </body>
    </html>
  );
}
