import { PrimaryButton, SecondaryButton } from "@/components/ui/primitives";

export default function CallToAction() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-panel-border bg-panel px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 animate-spin-slow rounded-full bg-node-glow" />
          <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 animate-drift rounded-full bg-node-glow opacity-60" />
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-lexical-orange">
            Ready when you are
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-700 leading-tight text-ink sm:text-4xl">
            Have a idea in your mind? Let&apos;s scope it together.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
            Tell us about your idea and timeline. We typically respond
            within one business day with next steps and a rough estimate.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton href="/contact">Get a Quote</PrimaryButton>
            <SecondaryButton href="/services">Browse Services</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
