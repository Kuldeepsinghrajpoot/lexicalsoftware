import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import type { Project } from "@/data/projects";
import { Pill } from "@/components/ui/primitives";
import RemoteImage from "@/components/shared/RemoteImage";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border bg-panel transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10",
        project.featured
          ? "border-lexical-orange/40 hover:border-lexical-orange"
          : "border-panel-border hover:border-lexical-orange/50"
      )}
    >
      <Link href={`/portfolio/${project.slug}`} className="block">
        <div className="relative h-44 overflow-hidden border-b border-line">
          <div className="h-full w-full transition-transform duration-500 group-hover:scale-110">
            <RemoteImage
              publicId={project.cloudinaryId ?? ""}
              alt={`${project.name} screenshot`}
              width={640}
              height={360}
              fallbackLabel={project.category}
            />
          </div>
          {project.featured && (
            <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-lexical-orange/30 bg-base/80 px-3 py-1 backdrop-blur-sm">
              <Star className="h-3 w-3 fill-lexical-amber text-lexical-amber" />
              <span className="font-mono text-xs font-600 uppercase tracking-[0.15em] text-lexical-amber">
                Featured
              </span>
            </div>
          )}
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <Link href={`/portfolio/${project.slug}`}>
          <h3 className="font-display text-lg font-600 text-ink transition-colors group-hover:text-lexical-orange">
            {project.name}
          </h3>
        </Link>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Pill key={tech}>{tech}</Pill>
          ))}
        </div>
        <div className="mt-6 border-t border-line pt-4">
          <Link
            href={`/portfolio/${project.slug}`}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted transition-colors group-hover:text-lexical-orange"
          >
            View Case Study
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
