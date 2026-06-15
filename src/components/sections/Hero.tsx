import { Eyebrow, PrimaryButton, SecondaryButton } from "@/components/ui/primitives";
import AvailabilityBadge from "@/components/shared/AvailabilityBadge";
import SystemDiagram from "./SystemDiagram";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid">
      <div className="pointer-events-none absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-node-glow" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-32">
        {/* Left: copy */}
        <div>
          <Eyebrow>Elite Software Startup &amp; Consulting Group</Eyebrow>
          <div className="mt-4">
            <AvailabilityBadge />
          </div>
          <h1 className="mt-6 font-display text-5xl font-700 leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="text-gradient-lexical">Elevate Your Vision</span>
            <br />
            <span className="text-ink">With </span>
            <span className="text-gradient-lexical">Lexical</span>
            <br />
            <span className="text-gradient-amber">Software</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
            We design, build, and ship full-stack web applications, scalable
            APIs, and cloud-native infrastructure &mdash; from Next.js
            frontends to Java/Spring Boot backends, deployed and monitored
            end to end.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PrimaryButton href="/contact">Get a Quote</PrimaryButton>
            <SecondaryButton href="/portfolio">View Our Work</SecondaryButton>
          </div>
        </div>

        {/* Right: system diagram */}
        <div className="relative animate-float">
          <SystemDiagram />
        </div>
      </div>
    </section>
  );
}
