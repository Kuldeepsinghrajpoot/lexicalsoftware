import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { team } from "@/data/team";
import TeamCard from "@/components/shared/TeamCard";
import Reveal from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Team | Lexical Software",
  description:
    "Meet the engineers at Lexical Software — full-stack coverage across Java/Spring Boot, React, MySQL, and AWS.",
};

export default function TeamPage() {
  return (
    <Section className="bg-grid">
      <SectionHeading
        eyebrow="Team"
        title="The engineers behind Lexical Software"
        description="Full-stack coverage across Java/Spring Boot, React, UI/UX design, and cloud infrastructure — with each member's core tech stack and direct contact info."
        align="center"
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, index) => (
          <Reveal key={member.slug} delay={(index % 3) * 80}>
            <TeamCard member={member} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
