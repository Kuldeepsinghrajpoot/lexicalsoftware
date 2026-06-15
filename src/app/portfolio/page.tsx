"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { projects, projectCategories, projectTechnologies } from "@/data/projects";
import ProjectCard from "@/components/shared/ProjectCard";
import Reveal from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

export default function PortfolioPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [tech, setTech] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesQuery =
        query.trim() === "" ||
        project.name.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase());
      const matchesCategory =
        category === "All" || project.category === category;
      const matchesTech = !tech || project.technologies.includes(tech);
      return matchesQuery && matchesCategory && matchesTech;
    });
  }, [query, category, tech]);

  return (
    <Section className="bg-grid">
      <SectionHeading
        eyebrow="Portfolio"
        title="Things we've built"
        description="Search or filter by category and technology. Each project links to a full case study, source code, and a live demo where available."
        align="center"
      />

      {/* Search */}
      <div className="mx-auto mt-10 max-w-xl">
        <div className="flex items-center gap-3 rounded-md border border-panel-border bg-panel px-4 py-3">
          <Search className="h-4 w-4 text-ink-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects by name or description"
            className="w-full bg-transparent font-body text-sm text-ink placeholder:text-ink-dim focus:outline-none"
          />
        </div>
      </div>

      {/* Category filter */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {projectCategories.map((cat) => (
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

      {/* Technology filter */}
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setTech(null)}
          className={cn(
            "rounded-full border px-3 py-1 font-mono text-xs transition-colors",
            tech === null
              ? "border-lexical-amber bg-lexical-amber/10 text-lexical-amber"
              : "border-panel-border bg-panel text-ink-dim hover:text-ink-muted"
          )}
        >
          All Tech
        </button>
        {projectTechnologies.map((t) => (
          <button
            key={t}
            onClick={() => setTech(t === tech ? null : t)}
            className={cn(
              "rounded-full border px-3 py-1 font-mono text-xs transition-colors",
              tech === t
                ? "border-lexical-amber bg-lexical-amber/10 text-lexical-amber"
                : "border-panel-border bg-panel text-ink-dim hover:text-ink-muted"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="mt-14">
        {filtered.length === 0 ? (
          <p className="text-center font-mono text-sm text-ink-muted">
            No projects match those filters.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 3) * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
