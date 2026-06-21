import { Section, SectionHeading } from "@/components/ui/primitives";
import { processSteps } from "@/data/process";

export default function HowWeWork() {
  return (
    <Section className="border-t border-line">
      <SectionHeading
        eyebrow="How we work"
        title="From inquiry to launch, in five steps"
        description="A real process, not a sales pipeline — every step has a clear output you can see."
        align="center"
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-5 lg:items-stretch">
        {processSteps.map((step, index) => (
          <div key={step.step} className="relative h-full">
            <div className="relative h-full overflow-hidden flex flex-col rounded-xl border border-panel-border bg-panel p-6">
              <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-node-glow opacity-70" />
              <span className="font-mono text-sm font-600 text-lexical-orange">
                {step.step}
              </span>
              <h3 className="mt-3 font-display text-lg font-600 text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {step.description}
              </p>
            </div>
            {index < processSteps.length - 1 && (
              <div
                aria-hidden="true"
                className="absolute right-[-10px] top-1/2 hidden h-px w-5 -translate-y-1/2 bg-lexical-orange/30 lg:block"
              />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}