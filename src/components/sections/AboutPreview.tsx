import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeading, SecondaryButton } from "@/components/ui/primitives";

const points = [
  "Senior engineers, not account managers, on every call",
  "Transparent timelines with weekly staging deploys",
  "Code you own outright — no platform lock-in",
];

export default function AboutPreview() {
  return (
    <Section className="border-t border-line">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Who we are"
            title="A small team that ships like a much bigger one"
          />
          <p className="mt-6 text-base leading-relaxed text-ink-muted">
            Lexical Software is a consulting group built around full-stack
            engineers who work across the entire web stack &mdash; from
            Next.js and React on the frontend to Java, Spring Boot, and
            PostgreSQL on the backend, deployed on cloud infrastructure we
            configure and monitor ourselves.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lexical-orange" />
                <span className="text-sm text-ink">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <SecondaryButton href="/about">More About Us</SecondaryButton>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-panel-border bg-panel p-8">
          <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-node-glow opacity-70" />
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">
            Mission
          </p>
          <p className="mt-3 text-lg font-display font-600 leading-snug text-ink">
            Build software that earns its place in production &mdash; fast,
            maintainable, and made to be handed off cleanly.
          </p>
          <div className="my-6 h-px bg-line" />
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">
            Vision
          </p>
          <p className="mt-3 text-lg font-display font-600 leading-snug text-ink">
            To be the engineering partner founders call before their first
            full-time hire &mdash; and keep calling after their tenth.
          </p>
        </div>
      </div>
    </Section>
  );
}