"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Calendar, Clock, Search } from "lucide-react";
import { Section, SectionHeading, Pill } from "@/components/ui/primitives";
import RemoteImage from "@/components/shared/RemoteImage";
import Reveal from "@/components/shared/Reveal";
import { blogPosts, blogCategories } from "@/data/blog";
import { cn } from "@/lib/utils";

export default function BlogPage() {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        query.trim() === "" ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <Section className="bg-grid">
      <SectionHeading
        eyebrow="Blog"
        title="Articles, tutorials & development tips"
        description="Notes from projects we're working on — written by the engineers doing the work."        align="center"
      />

      {/* Search */}
      <div className="mx-auto mt-10 max-w-xl">
        <div className="flex items-center gap-3 rounded-md border border-panel-border bg-panel px-4 py-3">
          <Search className="h-4 w-4 text-ink-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles by title or summary"
            className="w-full bg-transparent font-body text-sm text-ink placeholder:text-ink-dim focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {blogCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={cn(
              "rounded-full border px-4 py-1.5 font-display text-xs font-600 transition-colors",
              category === cat
                ? "border-lexical-orange bg-lexical-orange/10 text-lexical-orange"
                : "border-panel-border bg-panel text-ink-muted hover:text-ink"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-14">
        {filtered.length === 0 ? (
          <p className="text-center font-mono text-sm text-ink-muted">
            No articles match those filters.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, index) => (
              <Reveal key={post.slug} delay={(index % 3) * 80}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-panel-border bg-panel transition-colors hover:border-lexical-orange/50"
              >
                <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-line">
                  <RemoteImage
                    publicId={post.cloudinaryId ?? ""}
                    alt={post.title}
                    width={640}
                    height={360}
                    fallbackLabel={post.category}
                  />
                  {post.cloudinaryId && (
                    <div className="absolute left-3 top-3">
                      <Pill>{post.category}</Pill>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-600 text-ink transition-colors group-hover:text-lexical-orange">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 border-t border-line pt-4 font-mono text-xs text-ink-dim">
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
              </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
