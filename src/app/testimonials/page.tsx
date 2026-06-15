import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/shared/TestimonialCard";
import Reveal from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Testimonials | Lexical Software",
  description:
    "Read what clients say about working with Lexical Software \u2014 ratings and reviews from completed projects.",
};

export default function TestimonialsPage() {
  return (
    <Section className="bg-grid">
      <SectionHeading
        eyebrow="Testimonials"
        title="What clients say"
        description="Feedback from people we've worked with, shared with their permission."
        align="center"
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <Reveal key={i} delay={(i % 3) * 80}>
            <TestimonialCard testimonial={testimonial} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
