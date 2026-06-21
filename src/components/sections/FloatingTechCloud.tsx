import { allTechs } from "@/data/techstack";
import TechIcon from "@/components/shared/TechIcon";

// Hand-placed positions so the cloud feels organic but never overlaps
// the centered heading text. Values are percentages of the container.
const positions = [
  { top: "8%", left: "6%", size: 44, delay: "0s" },
  { top: "18%", left: "20%", size: 32, delay: "0.6s" },
  { top: "6%", left: "38%", size: 38, delay: "1.2s" },
  { top: "14%", left: "62%", size: 30, delay: "0.3s" },
  { top: "10%", left: "80%", size: 46, delay: "1.6s" },
  { top: "12%", left: "93%", size: 30, delay: "0.9s" },
  { top: "38%", left: "4%", size: 34, delay: "2.1s" },
  { top: "42%", left: "92%", size: 38, delay: "0.4s" },
  { top: "58%", left: "10%", size: 40, delay: "1.4s" },
  { top: "62%", left: "26%", size: 28, delay: "2.4s" },
  { top: "60%", left: "75%", size: 32, delay: "1.8s" },
  { top: "64%", left: "90%", size: 40, delay: "0.7s" },
  { top: "82%", left: "14%", size: 30, delay: "1.1s" },
  { top: "86%", left: "35%", size: 36, delay: "2.7s" },
  { top: "84%", left: "58%", size: 28, delay: "0.2s" },
  { top: "80%", left: "84%", size: 34, delay: "1.9s" },
];

export default function FloatingTechCloud() {
  const icons = allTechs.slice(0, positions.length);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {icons.map((tech, i) => {
        const pos = positions[i];
        return (
          <div
            key={`${tech.slug}-${i}`}
            className="animate-float absolute flex items-center justify-center rounded-xl border border-panel-border bg-panel/90 p-1 shadow-md backdrop-blur-sm sm:p-2"
            style={{
              top: pos.top,
              left: pos.left,
              animationDelay: pos.delay,
              animationDuration: `${5 + (i % 4)}s`,
            }}
          >
            {/* Smaller, fixed size on mobile so nothing overlaps */}
            <span className="block sm:hidden">
              <TechIcon
                name={tech.name}
                slug={tech.slug}
                color={tech.color}
                size={16}
              />
            </span>
            {/* Original varied size on larger screens */}
            <span className="hidden sm:block">
              <TechIcon
                name={tech.name}
                slug={tech.slug}
                color={tech.color}
                size={pos.size}
              />
            </span>
          </div>
        );
      })}
    </div>
  );
}