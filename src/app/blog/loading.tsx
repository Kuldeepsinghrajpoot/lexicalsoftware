import { Section, SectionHeading } from "@/components/ui/primitives";
import { SkeletonGrid } from "@/components/shared/Skeleton";

export default function BlogLoading() {
  return (
    <Section className="bg-grid">
      <SectionHeading
        eyebrow="Blog"
        title="Articles, tutorials & development tips"
        description="Notes from projects we're working on \u2014 written by the engineers doing the work."
        align="center"
      />
      <div className="mt-14">
        <SkeletonGrid count={6} />
      </div>
    </Section>
  );
}
