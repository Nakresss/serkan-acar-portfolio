import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          padding: "0 0 8px 9px",
          background: "#161511",
          color: "#edeae2",
          fontSize: 34,
          fontWeight: 800,
          fontFamily: "sans-serif",
          letterSpacing: -2,
          lineHeight: 1,
        }}
      >
        SA<span style={{ color: "#e0531b" }}>.</span>
      </div>
    ),
    { ...size }
  );
}
