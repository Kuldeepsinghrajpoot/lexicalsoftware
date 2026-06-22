import Link from "next/link";
import { PrimaryButton } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <section className="bg-grid">
      <div className="mx-auto flex min-h-[80vh] max-w-2xl flex-col items-center justify-center px-6 text-center">

        {/* Terminal window */}
        <div className="w-full max-w-lg rounded-xl border border-panel-border bg-panel text-left shadow-xl shadow-blue-500/5">
          <div className="flex items-center justify-between border-b border-line px-5 py-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-status-red" />
                <span className="h-3 w-3 rounded-full bg-status-yellow" />
                <span className="h-3 w-3 rounded-full bg-status-green" />
              </div>
              <span className="font-mono text-xs text-ink-muted">
                LEXICAL_SHELL — bash
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-status-red/30 bg-status-red/10 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-status-red" />
              <span className="font-mono text-xs font-500 text-status-red">
                ERR 404
              </span>
            </div>
          </div>
          <div className="space-y-2 px-5 py-6 font-mono text-sm">
            <p className="text-ink-muted">
              <span className="text-status-green">visitor@lexical</span>
              <span className="text-ink-dim">:~$</span>{" "}
              <span className="text-ink">cd /requested-page</span>
            </p>
            <p className="text-status-red">
              bash: cd: /requested-page: No such file or directory
            </p>
            <p className="text-ink-muted">
              <span className="text-status-green">visitor@lexical</span>
              <span className="text-ink-dim">:~$</span>{" "}
              <span className="text-ink">ls /pages</span>
            </p>
            <p className="text-lexical-orange">
              home&nbsp;&nbsp; about&nbsp;&nbsp; services&nbsp;&nbsp;
              portfolio&nbsp;&nbsp; team&nbsp;&nbsp; contact
            </p>
            <p className="text-ink-muted">
              <span className="text-status-green">visitor@lexical</span>
              <span className="text-ink-dim">:~$</span>{" "}
              <span className="animate-pulse">█</span>
            </p>
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-8 font-display text-3xl font-700 text-ink sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
          The page you&apos;re looking for has been moved, renamed, or never
          existed. Try one of the links above.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton href="/">Back to Home</PrimaryButton>
          <Link
            href="/contact"
            className="font-mono text-sm font-600 text-ink-muted hover:text-lexical-orange"
          >
            Contact us &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}