import { Section } from "@/components/ui/primitives";

export default function BlogPostLoading() {
  return (
    <Section className="bg-grid">
      <div className="mx-auto max-w-2xl">
        <div className="h-3 w-28 animate-pulse rounded bg-line" />
        <div className="mt-6 h-6 w-24 animate-pulse rounded-full bg-line" />
        <div className="mt-4 h-9 w-full animate-pulse rounded bg-line" />
        <div className="mt-2 h-9 w-2/3 animate-pulse rounded bg-line" />
        <div className="mt-4 h-4 w-40 animate-pulse rounded bg-line" />
        <div className="mt-8 h-64 animate-pulse rounded-xl bg-line" />
        <div className="mt-8 space-y-3">
          <div className="h-3 w-full animate-pulse rounded bg-line" />
          <div className="h-3 w-full animate-pulse rounded bg-line" />
          <div className="h-3 w-5/6 animate-pulse rounded bg-line" />
        </div>
      </div>
    </Section>
  );
}
