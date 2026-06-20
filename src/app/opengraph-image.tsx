import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lexical Software \u2014 Elite Software Startup & Consulting Group";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "12px",
              backgroundColor: "#2563EB",
              color: "#FFFFFF",
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            L
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: "36px",
                fontWeight: 700,
                color: "#0F172A",
                letterSpacing: "0.05em",
              }}
            >
              LEXICAL
            </div>
            <div
              style={{
                fontSize: "16px",
                color: "#475569",
                letterSpacing: "0.3em",
              }}
            >
              SOFTWARE
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#0F172A",
            lineHeight: 1.1,
            maxWidth: "900px",
          }}
        >
          Elevate Your Vision With{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(90deg, #2563EB, #4F46E5)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Lexical Software
          </span>
        </div>
        <div
          style={{
            marginTop: "32px",
            fontSize: "24px",
            color: "#475569",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Elite Software Startup &amp; Consulting Group
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
