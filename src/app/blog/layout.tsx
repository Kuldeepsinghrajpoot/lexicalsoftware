import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Lexical Software",
  description:
    "Articles, tutorials, and development tips from the Lexical Software team \u2014 covering Next.js, Spring Boot, databases, and cloud deployment.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
