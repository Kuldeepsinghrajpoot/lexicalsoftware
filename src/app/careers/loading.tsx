import { Section, SectionHeading } from "@/components/ui/primitives";

export default function CareersLoading() {
  return (
    <Section className="bg-grid">
      <SectionHeading
        eyebrow="Careers"
        title="Build with us"
        description="We're a small, hands-on team \u2014 every hire works directly on real client projects from day one. Search open roles below or send us a general application."
        align="center"
      />
      <div className="mx-auto mt-10 max-w-xl">
        <div className="h-12 animate-pulse rounded-md bg-line" />
      </div>
      <div className="mt-10 space-y-4">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-panel-border bg-panel p-6">
            <div className="h-5 w-1/3 animate-pulse rounded bg-line" />
            <div className="mt-3 h-3 w-full animate-pulse rounded bg-line" />
            <div className="mt-1 h-3 w-5/6 animate-pulse rounded bg-line" />
          </div>
        ))}
      </div>
    </Section>
  );
}
