import type { Metadata } from "next";
import { Suspense } from "react";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { jobOpenings } from "@/data/careers";
import Reveal from "@/components/shared/Reveal";
import VacancySearch from "./VacancySearch";
import ApplicationForm from "./ApplicationForm";

export const metadata: Metadata = {
  title: "Careers | Lexical Software",
  description:
    "Open roles and internships at Lexical Software. Don't see a fit? Send us a general application.",
};

export default function CareersPage() {
  return (
    <>
      <Section className="bg-grid">
        <SectionHeading
          eyebrow="Careers"
          title="Build with us"
          description="We're a small, hands-on team — every hire works directly on real client projects from day one. Search open roles below or send us a general application."
          align="center"
        />
      </Section>

      <Section className="border-t border-line">
        <VacancySearch />
      </Section>

      <Reveal>
        <Section className="border-t border-line">
          <SectionHeading
            eyebrow="Apply"
            title={
              jobOpenings.length === 0
                ? "Send a general application"
                : "Don't see the right role?"
            }
            description="Tell us a bit about yourself and what you're looking for — we keep applications on file and reach out when something fits."
            align="center"
          />
          <div className="relative mx-auto mt-10 max-w-2xl overflow-hidden rounded-xl border border-panel-border bg-panel p-8">
            <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-node-glow opacity-70" />
            <Suspense fallback={<ApplicationFormFallback />}>
              <ApplicationForm />
            </Suspense>
          </div>
        </Section>
      </Reveal>
    </>
  );
}

function ApplicationFormFallback() {
  return (
    <div className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="h-12 animate-pulse rounded-md bg-line" />
        <div className="h-12 animate-pulse rounded-md bg-line" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="h-12 animate-pulse rounded-md bg-line" />
        <div className="h-12 animate-pulse rounded-md bg-line" />
      </div>
      <div className="h-12 animate-pulse rounded-md bg-line" />
      <div className="h-28 animate-pulse rounded-md bg-line" />
      <div className="h-12 animate-pulse rounded-md bg-line" />
    </div>
  );
}