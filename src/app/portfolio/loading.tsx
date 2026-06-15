import { Section, SectionHeading } from "@/components/ui/primitives";
import { SkeletonGrid } from "@/components/shared/Skeleton";

export default function PortfolioLoading() {
  return (
    <Section className="bg-grid">
      <SectionHeading
        eyebrow="Portfolio"
        title="Things we've built"
        description="Search or filter by category and technology. Each project links to a full case study, source code, and a live demo where available."
        align="center"
      />
      <div className="mt-14">
        <SkeletonGrid count={6} />
      </div>
    </Section>
  );
}
