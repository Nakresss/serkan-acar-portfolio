import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import CircuitBackground from "@/components/CircuitBackground";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serkan Acar — Software & Systems Developer",
  description:
    "Serkan Acar | Yazılım & Sistem Geliştirici, Maker. TEKNOFEST projeleri, yapay zeka, gömülü sistem ve otonom araç geliştirme portföyü.",
  metadataBase: new URL("https://serkanacar.dev"),
  openGraph: {
    title: "Serkan Acar — Software & Systems Developer",
    description:
      "Dijital algoritmaları fiziksel mekaniklerle birleştiren, Milli Teknoloji vizyonuna odaklı sistem geliştirici.",
    images: ["/images/hero-speaking.jpg"],
    type: "website",
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LanguageProvider>
          <CircuitBackground />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
