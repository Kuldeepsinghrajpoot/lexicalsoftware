import { availability } from "@/data/site";
import { cn } from "@/lib/utils";

const statusStyles: Record<typeof availability.status, string> = {
  accepting: "border-status-green/30 bg-status-green/10 text-status-green",
  limited: "border-lexical-amber/30 bg-lexical-amber/10 text-lexical-amber",
  booked: "border-status-red/30 bg-status-red/10 text-status-red",
};

const dotStyles: Record<typeof availability.status, string> = {
  accepting: "bg-status-green",
  limited: "bg-lexical-amber",
  booked: "bg-status-red",
};

export default function AvailabilityBadge({
  className,
}: {
  className?: string;
}) {
  const label = availability.bookedUntil
    ? `Booked until ${availability.bookedUntil}`
    : availability.label;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-xs font-500",
        statusStyles[availability.status],
        className
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full animate-pulse-slow",
          dotStyles[availability.status]
        )}
      />
      {label}
    </span>
  );
}
