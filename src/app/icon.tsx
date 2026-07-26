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
          alignItems: "center",
          justifyContent: "center",
          background: "#08090b",
          borderRadius: 14,
          border: "3px solid #e30a17",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 700,
            color: "#f4f5f7",
            fontFamily: "sans-serif",
            letterSpacing: -1,
          }}
        >
          S<span style={{ color: "#e30a17" }}>A</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
