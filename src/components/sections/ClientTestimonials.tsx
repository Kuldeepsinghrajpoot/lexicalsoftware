import { Section, SectionHeading, SecondaryButton } from "@/components/ui/primitives";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/shared/TestimonialCard";

export default function ClientTestimonials() {
  const featured = testimonials.slice(0, 3);

  return (
    <Section className="border-t border-line">
      <SectionHeading
        eyebrow="Client feedback"
        title="What clients say after launch"
        align="center"
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((testimonial, i) => (
          <TestimonialCard key={i} testimonial={testimonial} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <SecondaryButton href="/testimonials">View All Testimonials</SecondaryButton>
      </div>
    </Section>
  );
}
