import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Lexical Software",
  description:
    "Browse projects built by Lexical Software \u2014 filter by category and technology, with links to source code and live demos.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
