import { Section } from "@/components/ui/primitives";

export default function ProjectDetailLoading() {
  return (
    <Section className="bg-grid">
      <div className="h-3 w-32 animate-pulse rounded bg-line" />
      <div className="mt-6 h-10 w-2/3 animate-pulse rounded bg-line" />
      <div className="mt-4 h-4 w-1/2 animate-pulse rounded bg-line" />
      <div className="mt-10 flex gap-2">
        <div className="h-6 w-20 animate-pulse rounded bg-line" />
        <div className="h-6 w-20 animate-pulse rounded bg-line" />
        <div className="h-6 w-20 animate-pulse rounded bg-line" />
      </div>
      <div className="mt-10 h-72 animate-pulse rounded-xl bg-line" />
    </Section>
  );
}
