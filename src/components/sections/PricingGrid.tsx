import Link from "next/link";
import { Check, Info } from "lucide-react";
import { pricingTiers } from "@/data/pricing";
import { cn } from "@/lib/utils";

export default function PricingGrid() {
  return (
    <div>
      <div className="grid items-stretch gap-6 pt-4 lg:grid-cols-4">
        {pricingTiers.map((tier, index) => {
          const isPopular = tier.variant === "popular";
          const isDark = tier.variant === "dark";

          return (
            <div
              key={tier.name}
              style={{ animationDelay: `${index * 120}ms` }}
              className={cn(
                "will-fade-up group relative flex flex-col rounded-xl transition-all duration-300 hover:-translate-y-2",
                isPopular &&
                  "bg-gradient-to-br from-indigo-600 via-violet-600 to-pink-600 text-white shadow-2xl shadow-pink-500/25 ring-4 ring-violet-500/20 hover:shadow-pink-500/40 lg:-translate-y-4 lg:hover:-translate-y-6",
                isDark &&
                  "border border-slate-800 bg-slate-900 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/10",
                !isPopular &&
                  !isDark &&
                  "border border-panel-border bg-panel text-ink hover:border-lexical-orange/40 hover:shadow-xl hover:shadow-blue-500/10"
              )}
            >
              {tier.badge && (
                <span className="animate-pulse-slow absolute -top-3 right-6 z-20 rounded-full bg-rose-500 px-4 py-1.5 font-mono text-[10px] font-medium uppercase tracking-widest text-white shadow-md shadow-rose-500/40">
                  {tier.badge}
                </span>
              )}

              <div
                className={cn(
                  "relative flex flex-1 flex-col overflow-hidden rounded-3xl p-8",
                  isPopular && "shimmer-sweep",
                  isDark && "overflow-hidden"
                )}
              >
              {isDark && (
                <div className="animate-drift pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-slate-800 opacity-50" />
              )}
              {isPopular && (
                <div className="animate-drift pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10" />
              )}
              {!isPopular && !isDark && (
                <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-node-glow opacity-70" />
              )}

              <div className="relative z-10 mb-6">
                <h3
                  className={cn(
                    "font-display text-2xl font-700",
                    isPopular || isDark ? "text-white" : "text-ink"
                  )}
                >
                  {tier.name}
                </h3>
                <p
                  className={cn(
                    "mt-2 h-12 text-sm",
                    isPopular && "text-violet-100",
                    isDark && "text-slate-400",
                    !isPopular && !isDark && "text-ink-muted"
                  )}
                >
                  {tier.description}
                </p>
              </div>

              <div className="relative z-10 mb-6 flex flex-col">
                <div className="mb-1 flex items-center gap-3">
                  <span
                    className={cn(
                      "text-lg font-medium line-through",
                      isPopular && "text-violet-200 opacity-70",
                      isDark && "text-slate-500",
                      !isPopular && !isDark && "text-ink-dim"
                    )}
                  >
                    {tier.originalPrice}
                  </span>
                  <span
                    className={cn(
                      "rounded px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-wide transition-transform duration-300 group-hover:scale-105",
                      isPopular && "bg-white text-violet-600",
                      isDark && "bg-rose-500 text-white",
                      !isPopular && !isDark && "bg-status-green/10 text-status-green"
                    )}
                  >
                    50% OFF
                  </span>
                </div>
                <div>
                  <span
                    className={cn(
                      "font-display text-4xl font-extrabold",
                      isPopular || isDark ? "text-white" : "text-ink"
                    )}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={cn(
                      "ml-1 text-sm font-medium",
                      isPopular && "text-violet-100",
                      isDark && "text-slate-400",
                      !isPopular && !isDark && "text-ink-muted"
                    )}
                  >
                    /starts at
                  </span>
                </div>
                {tier.priceNote && (
                  <p
                    className={cn(
                      "mt-2 inline-block w-max rounded p-1.5 font-mono text-xs font-normal text-ink",
                      isPopular ? "bg-white/85" : "bg-rose-50"
                    )}
                  >
                    {tier.priceNote}
                  </p>
                )}
              </div>

              <ul className="relative z-10 mb-8 flex-1 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        "mt-0.5 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110",
                        isPopular && "text-white",
                        isDark && "text-blue-400",
                        !isPopular && !isDark && "text-status-green"
                      )}
                    />
                    <span
                      className={cn(
                        "text-sm leading-relaxed",
                        isPopular && "text-white",
                        isDark && "text-slate-300",
                        !isPopular && !isDark && "text-ink-muted"
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/contact?service=${encodeURIComponent(tier.name)}`}
                className={cn(
                  "relative z-10 mt-auto block rounded-xl px-4 py-3 text-center font-display text-sm font-700 transition-all duration-300 hover:-translate-y-0.5",
                  isPopular &&
                    "bg-white text-violet-600 shadow-sm hover:shadow-lg hover:shadow-black/10",
                  isDark &&
                    "border border-slate-700 bg-slate-800 text-white hover:bg-slate-700",
                  !isPopular &&
                    !isDark &&
                    "bg-base text-ink hover:bg-line"
                )}
              >
                {tier.cta}
              </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Important note */}
      <div className="mx-auto mt-12 max-w-5xl rounded-r-xl border-l-4 border-amber-500 bg-amber-50 p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wide text-amber-800">
              Important note
            </h3>
            <p className="mt-2 text-sm font-medium leading-relaxed text-amber-700">
              Prices for <strong>Domain &amp; Hosting</strong>, as well as
              third-party services like{" "}
              <span className="rounded bg-amber-200 px-1 text-amber-900">
                SMS integration, Email SMS, WhatsApp messaging
              </span>
              , and other chargeable APIs are <strong>NOT included</strong>{" "}
              in the prices above. These will be billed separately based on
              actual usage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}