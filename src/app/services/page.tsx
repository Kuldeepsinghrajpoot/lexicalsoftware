import type { Metadata } from "next";
import Link from "next/link";
import { Section, PrimaryButton } from "@/components/ui/primitives";
import PricingGrid from "@/components/sections/PricingGrid";
import Reveal from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Services | Lexical Software",
  description:
    "Website development, app development, website & app maintenance, renovation, and cloud deployment — transparent pricing for every package.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="bg-grid">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-lexical-orange/30 bg-lexical-orange/10 px-4 py-1.5 font-mono text-xs font-600 uppercase tracking-[0.2em] text-lexical-orange">
            Pricing &amp; Services
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Simple solutions for <br />
            <span className="text-gradient-vivid">complex needs.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
  Choose the right package to help your business grow &mdash; get
  in touch for a tailored quote.
</p>
        </div>
      </Section>

      <Section className="border-t border-line">
        <Reveal>
          <PricingGrid />
        </Reveal>
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
              scope and process.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <PrimaryButton href="/contact?service=Other">Get a Quote</PrimaryButton>              <Link
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