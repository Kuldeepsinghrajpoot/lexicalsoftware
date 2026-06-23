import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Lexical Software — Web & App Development Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Read logo from local filesystem (works both locally and on Vercel)
  const logoBuffer = await readFile(
    join(process.cwd(), "public/images/logo/lexical-mark.jpg")
  );
  const logoBase64 = `data:image/jpeg;base64,${logoBuffer.toString("base64")}`;

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
          backgroundColor: "#f6f8fa",
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #2563EB 0%, #4F46E5 100%)",
            display: "flex",
          }}
        />

        {/* Glow blob */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "999px",
            background: "rgba(37,99,235,0.08)",
            filter: "blur(80px)",
            display: "flex",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(37,99,235,0.35)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoBase64}
              alt="Lexical Software logo"
              width={72}
              height={72}
              style={{ width: "72px", height: "72px", objectFit: "cover" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <div
              style={{
                fontSize: "28px",
                fontWeight: 800,
                color: "#0F172A",
                letterSpacing: "0.1em",
                display: "flex",
              }}
            >
              LEXICAL
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "#2563EB",
                letterSpacing: "0.35em",
                fontWeight: 600,
                display: "flex",
              }}
            >
              SOFTWARE
            </div>
          </div>
        </div>

        {/* Main heading */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: "68px",
            fontWeight: 800,
            color: "#0F172A",
            lineHeight: 1.05,
            maxWidth: "900px",
            letterSpacing: "-0.02em",
          }}
        >
          Elevate Your Vision With Lexical Software
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            marginTop: "28px",
            fontSize: "22px",
            color: "#64748b",
            letterSpacing: "0.05em",
          }}
        >
          Web & App Development Studio — Gurugram, India
        </div>

        {/* Bottom stat pills */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "48px",
          }}
        >
          {["9+ Projects", "99.9% Uptime", "2+ Years"].map((stat) => (
            <div
              key={stat}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                borderRadius: "999px",
                backgroundColor: "rgba(37,99,235,0.08)",
                border: "1px solid rgba(37,99,235,0.2)",
                fontSize: "16px",
                fontWeight: 600,
                color: "#2563EB",
              }}
            >
              {stat}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}