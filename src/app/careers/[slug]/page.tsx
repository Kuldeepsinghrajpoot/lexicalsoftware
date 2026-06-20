import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Briefcase, CheckCircle2 } from "lucide-react";
import { Section, Pill } from "@/components/ui/primitives";
import { jobOpenings } from "@/data/careers";
import ApplicationForm from "../ApplicationForm";

export function generateStaticParams() {
  return jobOpenings.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = jobOpenings.find((j) => j.slug === slug);
  if (!job) return {};
  return {
    title: `${job.title} | Careers at Lexical Software`,
    description: job.summary,
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = jobOpenings.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  return (
    <>
      <Section className="bg-grid">
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted hover:text-lexical-orange"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to careers
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <h1 className="font-display text-3xl font-700 text-ink sm:text-4xl">
            {job.title}
          </h1>
          <Pill>{job.type}</Pill>
        </div>
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
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          {job.summary}
        </p>
      </Section>

      <Section className="border-t border-line">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-lg font-700 text-ink">
              Responsibilities
            </h2>
            <ul className="mt-4 space-y-2">
              {job.responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lexical-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-lg font-700 text-ink">
                Requirements
              </h2>
              <ul className="mt-4 space-y-2">
                {job.requirements.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lexical-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {job.niceToHave && job.niceToHave.length > 0 && (
              <div>
                <h2 className="font-display text-lg font-700 text-ink">
                  Nice to have
                </h2>
                <ul className="mt-4 space-y-2">
                  {job.niceToHave.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lexical-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Section>

      <Section className="border-t border-line">
        <h2 className="text-center font-display text-2xl font-700 text-ink">
          Apply for this role
        </h2>
        <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-panel-border bg-panel p-8">
          <Suspense fallback={<div className="h-96 animate-pulse rounded-md bg-line" />}>
            <ApplicationForm forcedRole={job.title} />
          </Suspense>
        </div>
      </Section>
    </>
  );
}