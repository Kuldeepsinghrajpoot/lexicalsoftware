import { ImageResponse } from "next/og";
import { blogPosts } from "@/data/blog";

export const runtime = "edge";
export const alt = "Lexical Software Blog";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  const title = post?.title ?? "Lexical Software Blog";
  const category = post?.category ?? "Articles";

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
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              backgroundColor: "#141416",
              border: "1px solid #262629",
              color: "#FF6B1A",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            {">"}_
          </div>
          <div
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#E8E6E3",
              letterSpacing: "0.05em",
            }}
          >
            LEX<span style={{ color: "#FF6B1A" }}>I</span>CAL SOFTWARE
          </div>
        </div>

        <div
          style={{
            display: "flex",
            padding: "6px 16px",
            borderRadius: "999px",
            border: "1px solid rgba(255,107,26,0.3)",
            backgroundColor: "rgba(255,107,26,0.1)",
            color: "#FF6B1A",
            fontSize: "20px",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            marginBottom: "24px",
          }}
        >
          {category}
        </div>

        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#E8E6E3",
            lineHeight: 1.15,
            maxWidth: "950px",
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
