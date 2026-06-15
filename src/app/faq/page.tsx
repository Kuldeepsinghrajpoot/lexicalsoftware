"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";
import Reveal from "@/components/shared/Reveal";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-grid">
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Common questions about how we work, pricing, and timelines."
        align="center"
      />

      <div className="mx-auto mt-12 max-w-2xl space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <Reveal key={faq.question} delay={Math.min(index, 6) * 50}>
            <div
              className="rounded-xl border border-panel-border bg-panel"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-base font-600 text-ink">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-lexical-orange transition-transform",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed text-ink-muted">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
