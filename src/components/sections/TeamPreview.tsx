import { Section, SectionHeading, SecondaryButton } from "@/components/ui/primitives";
import { team } from "@/data/team";
import TeamCard from "@/components/shared/TeamCard";

export default function TeamPreview() {
  return (
    <Section className="border-t border-line">
      <SectionHeading
        eyebrow="The people"
        title="Meet the team behind the work"
        description="Four specialists covering full-stack development and design, from database to deployment."
        align="center"
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <TeamCard key={member.slug} member={member} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <SecondaryButton href="/team">Meet the Full Team</SecondaryButton>
      </div>
    </Section>
  );
}
