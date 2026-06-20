import { Rocket, ArrowRight, FolderOpen } from "lucide-react";
import { Eyebrow, SecondaryButton } from "@/components/ui/primitives";
import AvailabilityBadge from "@/components/shared/AvailabilityBadge";
import SystemDiagram from "./SystemDiagram";
import Link from "next/link";

const stats = [
  { value: "99.9%", label: "SLA Uptime" },
  { value: "40ms", label: "Avg Latency" },
  { value: "100%", label: "Delivery rate" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient glows */}
      <div className="glow-blob animate-drift -translate-x-1/2 -translate-y-1/2 left-1/4 top-0 h-[450px] w-[450px] bg-blue-100/40" />
      <div
        className="glow-blob animate-drift -translate-x-1/2 -translate-y-1/2 right-0 top-1/3 h-[500px] w-[500px] translate-x-1/3 bg-indigo-100/30"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-10 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-16">
        {/* Left: copy */}
        <div className="space-y-8 lg:col-span-5">
          <div
            className="will-fade-up flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "0ms" }}
          >
            <Eyebrow>
              <Rocket className="mr-1.5 h-3.5 w-3.5 text-lexical-orange" />
              Elite Software Startup &amp; Consulting
            </Eyebrow>
            <AvailabilityBadge />
          </div>

          <h1
            className="will-fade-up font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            Elevate Your <br className="hidden sm:inline" />
            Vision With <br />
            <span className="text-gradient-lexical">Lexical Software</span>
          </h1>

          <p
            className="will-fade-up max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
            style={{ animationDelay: "200ms" }}
          >
            We design, build, and ship full-stack web applications, scalable
            APIs, and cloud-native infrastructure &mdash; from Next.js
            frontends to Java/Spring Boot backends, deployed and monitored
            end to end.
          </p>

          <div
            className="will-fade-up flex flex-wrap items-center gap-4 pt-2"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              href="/contact"
              className="shimmer-sweep group inline-flex items-center rounded-xl bg-lexical-gradient px-6 py-4 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.98]"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <SecondaryButton href="/portfolio">
              <FolderOpen className="h-4 w-4 text-lexical-orange" />
              View Our Work
            </SecondaryButton>
          </div>

          <div
            className="will-fade-up grid grid-cols-3 gap-6 border-t border-line pt-6"
            style={{ animationDelay: "400ms" }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="group cursor-default">
                <span className="block font-mono text-2xl font-bold text-ink transition-colors group-hover:text-lexical-orange">
                  {stat.value}
                </span>
                <span className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: interactive system diagram */}
        <div
          className="will-fade-up lg:col-span-7"
          style={{ animationDelay: "250ms" }}
        >
          <SystemDiagram />
        </div>
      </div>
    </section>
  );
}
