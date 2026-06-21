"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight, MapPin, Briefcase, Sparkles } from "lucide-react";
import { Pill } from "@/components/ui/primitives";
import { jobOpenings } from "@/data/careers";
import Reveal from "@/components/shared/Reveal";

export default function VacancySearch() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (query.trim() === "") return jobOpenings;
    const q = query.toLowerCase();
    return jobOpenings.filter(
      (job) =>
        job.title.toLowerCase().includes(q) ||
        job.department.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        job.type.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div>
      {/* Search */}
      <div className="mx-auto max-w-xl">
        <div className="flex items-center gap-3 rounded-md border border-panel-border bg-panel px-4 py-3">
          <Search className="h-4 w-4 text-ink-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search vacancies by title, department, or location"
            className="w-full bg-transparent font-body text-sm text-ink placeholder:text-ink-dim focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setQuery((q) => q)}
            className="hidden shrink-0 rounded-md border border-panel-border bg-base px-4 py-2 font-display text-xs font-600 text-ink transition-colors hover:border-lexical-orange hover:text-lexical-orange sm:inline-flex"
          >
            Search Vacancies
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="mt-10">
        {filtered.length === 0 ? (
          <Reveal>
            <div className="relative mx-auto max-w-xl overflow-hidden rounded-xl border border-panel-border bg-panel p-10 text-center">
              <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-node-glow opacity-70" />
              <Sparkles className="mx-auto h-8 w-8 text-lexical-orange" />
              <h2 className="mt-4 font-display text-xl font-700 text-ink">
                {jobOpenings.length === 0
                  ? "No open roles right now"
                  : "No vacancies match your search"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {jobOpenings.length === 0
                  ? "We're not actively hiring at the moment, but we're always happy to hear from people who'd be a good fit down the line. Send us a general application below and we'll keep it on file."
                  : "Try a different search term, or send us a general application below — we'll keep it on file and reach out if something fits."}
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="space-y-4">
            {filtered.map((job, index) => (
              <Reveal key={job.slug} delay={(index % 3) * 80}>
                <Link
                  href={`/careers/${job.slug}`}
                  className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-panel-border bg-panel p-6 transition-colors hover:border-lexical-orange/50 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-node-glow opacity-70" />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-display text-lg font-600 text-ink transition-colors group-hover:text-lexical-orange">
                        {job.title}
                      </h2>
                      <Pill>{job.type}</Pill>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {job.summary}
                    </p>
                    <div className="mt-3 flex items-center gap-4 font-mono text-xs text-ink-dim">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5" />
                        {job.department}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 font-display text-sm font-600 text-lexical-orange sm:shrink-0">
                    View role
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}