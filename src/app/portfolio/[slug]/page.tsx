import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Section, SectionHeading, Pill } from "@/components/ui/primitives";
import RemoteImage from "@/components/shared/RemoteImage";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} | Lexical Software Portfolio`,
    description: project.description,
  };
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Section className="bg-grid">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted hover:text-lexical-orange"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to portfolio
        </Link>

        <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
          <div>
            <Pill>{project.category}</Pill>
            <h1 className="mt-4 font-display text-4xl font-700 text-ink sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
              {project.description}
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-lexical-gradient px-5 py-2.5 font-display text-sm font-600 text-base transition-transform hover:-translate-y-0.5"
            >
              Discuss a Similar Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Pill key={tech}>{tech}</Pill>
          ))}
        </div>

        <div className="mt-10 h-72 overflow-hidden rounded-xl border border-panel-border">
          <RemoteImage
            publicId={project.cloudinaryId ?? ""}
            alt={`${project.name} screenshot`}
            width={1200}
            height={675}
            fallbackLabel="Screenshot placeholder"
          />
        </div>
      </Section>

      <Section className="border-t border-line">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Overview" title="Project overview" />
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              {project.overview}
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-lg font-700 text-ink">
                Problem statement
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {project.problem}
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-700 text-ink">
                Solution
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-line">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-lg font-700 text-ink">
              Key features
            </h3>
            <ul className="mt-4 space-y-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-ink"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lexical-orange" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-700 text-ink">
              Results
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {project.results.map((result) => (
                <div
                  key={result.label}
                  className="rounded-md border border-panel-border bg-panel p-4 text-center"
                >
                  <p className="font-display text-2xl font-700 text-gradient-lexical">
                    {result.value}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ink-muted">
                    {result.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}