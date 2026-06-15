import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeading, PrimaryButton } from "@/components/ui/primitives";
import { services } from "@/data/services";
import { serviceIconMap } from "@/lib/icons";
import Reveal from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Services | Lexical Software",
  description:
    "Web development, full-stack development, Next.js, Java/Spring Boot, database design, cloud deployment, and website maintenance \u2014 with transparent pricing for every service.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="bg-grid">
        <SectionHeading
          eyebrow="Services"
          title="Nine services, one team"
          description="Each engagement is scoped around one or more of these services. Pricing ranges below are starting points &mdash; every quote is tailored to scope."
          align="center"
        />
      </Section>

      <Section className="border-t border-line">
        <div className="space-y-6">
          {services.map((service, index) => {
            const Icon = serviceIconMap[service.icon];
            return (
              <Reveal key={service.slug} delay={(index % 4) * 80}>
              <div
                id={service.slug}
                className="grid gap-8 rounded-xl border border-panel-border bg-panel p-8 lg:grid-cols-[auto,1fr,auto] lg:items-start"
              >
                <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-panel-border bg-base text-lexical-orange">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs text-ink-dim">
                    {String(index + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-700 text-ink">
                    {service.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {service.description}
                  </p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {service.features.map((feature) => (
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

                <div className="flex flex-col items-start gap-4 border-t border-line pt-6 lg:items-end lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
                  <div className="text-left lg:text-right">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
                      Starting at
                    </p>
                    <p className="mt-1 font-display text-lg font-700 text-lexical-orange">
                      {service.pricingRange}
                    </p>
                  </div>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.name)}`}
                    className="font-mono text-xs text-ink-muted underline-offset-4 hover:text-lexical-orange hover:underline"
                  >
                    Discuss this service &rarr;
                  </Link>
                </div>
              </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Reveal>
      <Section className="border-t border-line">
        <div className="rounded-2xl border border-panel-border bg-panel px-8 py-14 text-center">
          <h2 className="font-display text-2xl font-700 text-ink sm:text-3xl">
            Not sure which service fits?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-muted">
            Tell us what you're trying to build and we'll recommend the right
            combination &mdash; or check our FAQ for common questions about
            scope and pricing.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton href="/contact">Get a Quote</PrimaryButton>
            <Link
              href="/faq"
              className="font-display text-sm font-600 text-ink-muted hover:text-lexical-orange"
            >
              Read the FAQ
            </Link>
          </div>
        </div>
      </Section>
      </Reveal>
    </>
  );
}
