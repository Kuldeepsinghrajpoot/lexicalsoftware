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
          backgroundColor: "#0A0A0B",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
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
              backgroundColor: "#141416",
              border: "1px solid #262629",
              color: "#FF6B1A",
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            {">"}_
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
                color: "#E8E6E3",
                letterSpacing: "0.05em",
              }}
            >
              LEX<span style={{ color: "#FF6B1A" }}>I</span>CAL
            </div>
            <div
              style={{
                fontSize: "16px",
                color: "#8B8B92",
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
            color: "#E8E6E3",
            lineHeight: 1.1,
            maxWidth: "900px",
          }}
        >
          Elevate Your Vision With{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(90deg, #FF6B1A, #FFB627)",
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
            color: "#8B8B92",
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
