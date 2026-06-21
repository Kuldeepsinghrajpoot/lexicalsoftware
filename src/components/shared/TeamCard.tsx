import { Linkedin, Mail } from "lucide-react";
import type { TeamMember } from "@/data/team";
import Avatar from "@/components/shared/Avatar";
import CopyButton from "@/components/shared/CopyButton";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-panel-border bg-panel p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-lexical-orange/50 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-node-glow opacity-70" />
      <div className="transition-transform duration-300 group-hover:scale-105">
        <Avatar
          name={member.name}
          cloudinaryId={member.cloudinaryId}
          src={member.localImage}
          size={80}
        />
      </div>
      <h3 className="mt-5 font-display text-lg font-600 text-ink">
        {member.name}
      </h3>
      <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
        {member.role}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        {member.bio}
      </p>

      {/* Tech stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {member.skills.map((skill) => (
          <span
            key={skill.name}
            className="rounded-md border border-panel-border bg-base px-2.5 py-1 font-mono text-xs text-ink-muted"
          >
            {skill.name}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3 border-t border-line pt-4">
        <span className="font-mono text-xs text-ink-dim">
          {member.experience}
        </span>
        <div className="ml-auto flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <a
              href={`mailto:${member.email}`}
              aria-label={`Email ${member.name}`}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-panel-border text-ink-muted transition-colors hover:border-lexical-orange hover:text-lexical-orange"
            >
              <Mail className="h-3.5 w-3.5" />
            </a>
            <CopyButton value={member.email} label={`${member.name}'s email`} />
          </div>
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name}'s LinkedIn`}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-panel-border text-ink-muted transition-colors hover:border-lexical-orange hover:text-lexical-orange"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}