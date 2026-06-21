import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading, SecondaryButton } from "@/components/ui/primitives";
import { services } from "@/data/services";
import { serviceIconMap } from "@/lib/icons";

export default function ServicesPreview() {
  const featured = services;

  return (
    <Section className="border-t border-line">
      <SectionHeading
        eyebrow="What we build"
        title="Engineering across the full stack"
        description="Three focused services, each with clear deliverables and pricing &mdash; mix and match based on what your project needs."
        align="center"
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((service) => {
          const Icon = serviceIconMap[service.icon];
          return (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className="group relative overflow-hidden rounded-xl border border-panel-border bg-panel p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-lexical-orange/50 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-node-glow opacity-70" />
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-panel-border bg-base text-lexical-orange transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-4 w-4 text-ink-dim transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-lexical-orange" />
              </div>
              <h3 className="mt-5 font-display text-lg font-600 text-ink">
                {service.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {service.shortDescription}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <SecondaryButton href="/services">View All Services</SecondaryButton>
      </div>
    </Section>
  );
}