import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Archivo } from "next/font/google";
import { getContent } from "@/content";

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin", "latin-ext"], axes: ["wdth"] });

export const metadata: Metadata = {
  title: "404 · Serkan Acar",
  robots: { index: false },
};

/** Rendered for every unmatched URL. The language is unknown here, so both are shown. */
export default function GlobalNotFound() {
  const tr = getContent("tr").notFound;
  const en = getContent("en").notFound;

  return (
    <html lang="tr" className={`${archivo.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col justify-center px-4 py-20 sm:px-8">
        <main className="mx-auto w-full max-w-[90rem]">
          <p className="mono text-accent-ink">404</p>
          <h1 className="display mt-6 text-[clamp(3rem,10vw,8rem)]">{tr.title}</h1>
          <p className="mt-6 max-w-md text-lg text-ink-2">{tr.text}</p>
          <p lang="en" className="mt-2 max-w-md text-lg text-ink-3">
            {en.title} {en.text}
          </p>
          <div className="mt-10 flex flex-wrap gap-8 text-lg font-semibold">
            <Link href="/tr" className="link">
              ← {tr.home}
            </Link>
            <Link href="/en" lang="en" className="link">
              ← {en.home}
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
