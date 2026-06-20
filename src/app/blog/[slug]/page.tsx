import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Section, Pill } from "@/components/ui/primitives";
import ReadingProgress from "@/components/shared/ReadingProgress";
import RemoteImage from "@/components/shared/RemoteImage";
import { blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Lexical Software Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <Section className="bg-grid">
      <ReadingProgress />
      <div className="mx-auto max-w-2xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted hover:text-lexical-orange"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to blog
        </Link>

        <div className="mt-6">
          <Pill>{post.category}</Pill>
          <h1 className="mt-4 font-display text-3xl font-700 text-ink sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 font-mono text-xs text-ink-dim">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>

        <div className="mt-8 h-64 overflow-hidden rounded-xl border border-panel-border">
          <RemoteImage
            publicId={post.cloudinaryId ?? ""}
            alt={post.title}
            width={1200}
            height={675}
            fallbackLabel="Article image"
          />
        </div>

        <div className="prose prose-invert mt-8 space-y-4">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}