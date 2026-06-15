import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Lexical Software",
  description:
    "Answers to common questions about working with Lexical Software \u2014 timelines, pricing, ongoing support, and how to get started.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
