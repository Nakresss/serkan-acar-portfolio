import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";

const archivo = Archivo({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Serkan Acar — Yazılım Geliştirici",
  description:
    "Serkan Acar. Yazılım geliştirici; yapay zekâ, görüntü işleme ve gömülü sistemler. Deneyim, projeler, yetkinlikler ve iletişim bilgileri.",
  openGraph: {
    title: "Serkan Acar — Yazılım Geliştirici",
    description:
      "Yapay zekâ, görüntü işleme ve gömülü sistemler alanında proje deneyimi.",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${archivo.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
