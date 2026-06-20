import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  const initials = testimonial.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div className="flex flex-col rounded-xl border border-panel-border bg-panel p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-lexical-orange/40 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4"
            fill={i < testimonial.rating ? "#F59E0B" : "none"}
            stroke={i < testimonial.rating ? "#F59E0B" : "rgb(var(--color-ink-dim))"}
          />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
        &ldquo;{testimonial.review}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-line pt-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-panel-border bg-base font-display text-sm font-700 text-lexical-orange">
          {initials}
        </div>
        <div>
          <p className="font-display text-sm font-600 text-ink">
            {testimonial.name}
          </p>
          <p className="font-mono text-xs text-ink-muted">
            {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
