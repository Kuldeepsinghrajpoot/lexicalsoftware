import type { Metadata } from "next";
import {
  Section,
  SectionHeading,
  Eyebrow,
  PrimaryButton,
} from "@/components/ui/primitives";
import { Target, Eye, ShieldCheck, Zap, Users, Award } from "lucide-react";
import TechStackDiagram from "@/components/sections/TechStackDiagram";
import Reveal from "@/components/shared/Reveal";

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Senior engineers only",
    description:
      "Every project is staffed with engineers who've shipped production systems before — no junior hand-offs.",
  },
  {
    icon: Zap,
    title: "Weekly staging deploys",
    description:
      "You see real progress every week on a live staging environment, not a slide deck.",
  },
  {
    icon: Users,
    title: "Direct access to builders",
    description:
      "You talk to the people writing the code, not a layer of account managers.",
  },
  {
    icon: Award,
    title: "Code you own",
    description:
      "Full source, documentation, and infrastructure access handed over at project close — no lock-in.",
  },
];

const journey = [
  {
    year: "2023",
    title: "Founded as a small consulting collective",
    description:
      "Started taking on freelance full-stack projects for early-stage startups.",
  },
  {
    year: "2024",
    title: "Expanded into Java / Spring Boot backends",
    description:
      "Added enterprise-grade backend capabilities for clients needing microservice architectures.",
  },
  {
    year: "2025",
    title: "Standardized on Next.js + cloud deployment",
    description:
      "Adopted the App Router and AWS-based deployment pipelines as our default stack.",
  },
  {
    year: "2026",
    title: "Growing the core team",
    description:
      "Bringing on dedicated frontend, backend, and DevOps specialists to handle larger engagements.",
  },
];

export const metadata: Metadata = {
  title: "About Us | Lexical Software",
  description:
    "Lexical Software is a full-stack consulting group. Learn about our mission, vision, company journey, and the technologies we use to build production-grade applications.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="bg-grid">
        <SectionHeading
          eyebrow="About Lexical Software"
          title="An engineering team built around full-stack ownership"
          description="We're a small, focused consulting group that takes projects from idea to deployed product, working across the entire stack so nothing gets lost between teams."
          align="center"
        />
      </Section>

      {/* Mission & Vision */}
      <Reveal>
      <Section className="border-t border-line">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="relative overflow-hidden rounded-xl border border-panel-border bg-panel p-8">
            <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-node-glow opacity-70" />
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-panel-border bg-base text-lexical-orange">
              <Target className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-700 text-ink">
              Our Mission
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Build software that earns its place in production: fast to
              ship, easy to maintain, and structured so the next engineer
              (whether ours or yours) can pick it up without a handoff
              meeting.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-panel-border bg-panel p-8">
            <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-node-glow opacity-70" />
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-panel-border bg-base text-lexical-orange">
              <Eye className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-700 text-ink">
              Our Vision
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              To be the engineering partner founders call before their first
              full-time hire &mdash; and the team they keep calling as they
              scale, because the early decisions were the right ones.
            </p>
          </div>
        </div>
      </Section>
      </Reveal>

      {/* Why Choose Us */}
      <Reveal>
      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="Why work with us"
          title="What you get that you might not elsewhere"
          align="center"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-xl border border-panel-border bg-panel p-6"
            >
              <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-node-glow opacity-70" />
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-panel-border bg-base text-lexical-orange">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-base font-600 text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
      </Reveal>

      {/* Company Journey */}
      <Reveal>
      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="Our journey"
          title="How we got here"
          align="center"
        />
        <div className="mx-auto mt-14 max-w-3xl space-y-6">
          {journey.map((item) => (
            <div
              key={item.year}
              className="relative flex gap-6 overflow-hidden rounded-xl border border-panel-border bg-panel p-6"
            >
              <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-node-glow opacity-70" />
              <div className="shrink-0">
                <span className="font-mono text-sm font-600 text-lexical-orange">
                  {item.year}
                </span>
              </div>
              <div>
                <h3 className="font-display text-base font-600 text-ink">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      </Reveal>

      {/* Technologies */}
      <Reveal>
      <Section className="border-t border-line">
        <SectionHeading
          eyebrow="Our toolkit"
          title="Technologies we work with"
          align="center"
        />
        <div className="mx-auto mt-10 max-w-2xl">
          <TechStackDiagram />
        </div>
        <div className="mt-12 text-center">
          <PrimaryButton href="/contact">Start a Project</PrimaryButton>
        </div>
      </Section>
      </Reveal>
    </>
  );
}