import { Section, SectionHeading, SecondaryButton } from "@/components/ui/primitives";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/shared/ProjectCard";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <Section className="border-t border-line">
      <SectionHeading
        eyebrow="Selected work"
        title="Recently shipped"
        description="A snapshot of projects we've built end to end. Detailed case studies in the full portfolio."
        align="center"
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <SecondaryButton href="/portfolio">View Full Portfolio</SecondaryButton>
      </div>
    </Section>
  );
}
