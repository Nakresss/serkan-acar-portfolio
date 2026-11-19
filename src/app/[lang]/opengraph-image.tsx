import { ImageResponse } from "next/og";
import { getContent, isLang } from "@/content";

export const alt = "Serkan Acar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { meta } = getContent(isLang(lang) ? lang : "tr");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#edeae2",
          color: "#161511",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#4a473f" }}>
          <span>{meta.ogRole}</span>
          <span>İstanbul</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 168, fontWeight: 800, letterSpacing: -8, lineHeight: 0.9 }}>
            Serkan
          </div>
          <div style={{ display: "flex", fontSize: 168, fontWeight: 800, letterSpacing: -8, lineHeight: 0.9 }}>
            Acar<span style={{ color: "#e0531b" }}>.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            borderTop: "2px solid rgba(22,21,17,0.15)",
            paddingTop: 24,
            fontSize: 28,
            color: "#4a473f",
          }}
        >
          {meta.ogField}
        </div>
      </div>
    ),
    { ...size }
  );
}
