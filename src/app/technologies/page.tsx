import type { Metadata } from "next";
import { Section, PrimaryButton } from "@/components/ui/primitives";
import FloatingTechCloud from "@/components/sections/FloatingTechCloud";
import TechIcon from "@/components/shared/TechIcon";
import Reveal from "@/components/shared/Reveal";
import { techCategories } from "@/data/techstack";

export const metadata: Metadata = {
  title: "Technologies We Work With | Lexical Software",
  description:
    "The frontend, backend, mobile, data, and infrastructure technologies Lexical Software uses to design, build, and ship production software.",
};

export default function TechnologiesPage() {
  const total = techCategories.reduce((n, c) => n + c.items.length, 0);

  return (
    <>
      {/* Glowing hero */}
      <Section className="relative overflow-hidden bg-grid">
        <div className="glow-blob animate-drift -top-24 left-[8%] h-[360px] w-[360px] bg-blue-100/50" />
        <div
          className="glow-blob animate-drift -top-16 right-[6%] h-[320px] w-[320px] bg-indigo-100/40"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-lexical-orange/30 bg-lexical-orange/10 px-4 py-1.5 font-mono text-xs font-600 uppercase tracking-[0.2em] text-lexical-orange">
            Our Toolkit
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            The stack behind{" "}
            <span className="text-gradient-vivid">everything we ship</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            No buzzword soup &mdash; this is the exact set of tools running in
            production for our clients today.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-10 sm:gap-14">
            <div>
              <p className="font-mono text-3xl font-700 text-gradient-vivid">
                {total}+
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
                Technologies
              </p>
            </div>
            <div>
              <p className="font-mono text-3xl font-700 text-gradient-vivid">
                {techCategories.length}
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
                Categories
              </p>
            </div>
            <div>
              <p className="font-mono text-3xl font-700 text-gradient-vivid">
                3+
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
                Years in Production
              </p>
            </div>
          </div>
        </div>

        {/* Floating icon cloud banner */}
        <Reveal>
          <div className="relative mx-auto mt-14 h-[340px] max-w-5xl overflow-hidden rounded-2xl border border-panel-border bg-panel sm:h-[400px]">
            <FloatingTechCloud />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
              <span className="inline-flex items-center rounded-full border border-lexical-orange/30 bg-base/80 px-4 py-1.5 font-mono text-xs font-600 uppercase tracking-[0.2em] text-lexical-orange backdrop-blur-sm">
                {total}+ tools, one team
              </span>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
                From the browser to the database to the server it all runs on
                &mdash; we work across the full stack ourselves.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Category cards */}
      <Section className="border-t border-line">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category, index) => (
            <Reveal key={category.label} delay={(index % 3) * 100}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-panel-border bg-panel p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-lexical-orange/40 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-node-glow opacity-70" />
                <h3 className="font-display text-lg font-700 text-ink">
                  {category.label}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {category.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((tech) => (
                    <span
                      key={tech.name}
                      className="flex items-center gap-2 rounded-lg border border-panel-border bg-base px-3 py-1.5 text-xs font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5 hover:border-lexical-orange/50"
                    >
                      <TechIcon
                        name={tech.name}
                        slug={tech.slug}
                        color={tech.color}
                        size={16}
                      />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Reveal>
        <Section className="border-t border-line">
          <div className="relative overflow-hidden rounded-2xl border border-panel-border bg-panel px-8 py-14 text-center">
            <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 animate-spin-slow rounded-full bg-node-glow" />
            <h2 className="relative font-display text-2xl font-700 text-ink sm:text-3xl">
              Got a stack in mind already?
            </h2>
            <p className="relative mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
              Whether it&rsquo;s exactly this list or something close to it,
              we&rsquo;ll tell you honestly if it&rsquo;s the right fit.
            </p>
            <div className="relative mt-6">
              <PrimaryButton href="/contact">Start a Project</PrimaryButton>
            </div>
          </div>
        </Section>
      </Reveal>
    </>
  );
}