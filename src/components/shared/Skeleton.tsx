export function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-xl border border-panel-border bg-panel">
      <div className="h-44 animate-pulse bg-line" />
      <div className="space-y-3 p-6">
        <div className="h-5 w-2/3 animate-pulse rounded bg-line" />
        <div className="h-3 w-full animate-pulse rounded bg-line" />
        <div className="h-3 w-5/6 animate-pulse rounded bg-line" />
        <div className="flex gap-2 pt-2">
          <div className="h-6 w-16 animate-pulse rounded bg-line" />
          <div className="h-6 w-16 animate-pulse rounded bg-line" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
