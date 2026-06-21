const layers = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Vue.js"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Java / Spring Boot", "PHP / Laravel", "Express.js"],
  },
  {
    label: "Mobile & Design",
    items: ["React Native", "Expo", "Figma", "Framer Motion"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase"],
  },
  {
    label: "Infrastructure",
    items: ["AWS", "Docker", "Vercel", "GitHub Actions", "Nginx"],
  },
];

export default function TechStackDiagram() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-panel-border bg-panel">
      <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-node-glow opacity-70" />
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-status-red" />
            <span className="h-3 w-3 rounded-full bg-status-yellow" />
            <span className="h-3 w-3 rounded-full bg-status-green" />
          </div>
          <span className="font-mono text-xs text-ink-muted">
            LEXICAL_STACK_v1.0
          </span>
        </div>
      </div>

      <div className="space-y-3 p-5">
        {layers.map((layer, index) => (
          <div key={layer.label}>
            <div className="flex flex-col gap-3 rounded-lg border border-panel-border bg-base p-4 sm:flex-row sm:items-center">
              <span className="font-mono text-xs font-600 uppercase tracking-[0.15em] text-lexical-orange shrink-0 sm:w-32">
                {layer.label}
              </span>
              <div className="flex flex-1 flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-panel-border bg-panel px-3 py-1 font-mono text-xs text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            {index < layers.length - 1 && (
              <div
                aria-hidden="true"
                className="mx-auto h-3 w-px bg-panel-border"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}