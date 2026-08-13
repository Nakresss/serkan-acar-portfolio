import { ImageResponse } from "next/og";
import type { Lang } from "@/lib/i18n";

export const alt = "Serkan Acar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const copy = {
  tr: { role: "Yazılım Geliştirici", field: "Yapay zekâ · Görüntü işleme · Gömülü sistemler" },
  en: { role: "Software Developer", field: "AI · Image processing · Embedded systems" },
} as const;

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = copy[(lang as Lang) in copy ? (lang as Lang) : "tr"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f2f1ec",
          color: "#14130f",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#56534a",
          }}
        >
          {t.role}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 150,
              fontWeight: 800,
              letterSpacing: -6,
              lineHeight: 1,
            }}
          >
            Serkan Acar
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 34,
              height: 5,
              width: 190,
              background: "#b83a1e",
            }}
          />
        </div>

        <div style={{ display: "flex", fontSize: 30, color: "#56534a" }}>{t.field}</div>
      </div>
    ),
    { ...size }
  );
}
