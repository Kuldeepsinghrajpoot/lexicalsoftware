import Link from "next/link";
import { PrimaryButton } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <section className="bg-grid">
      <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
        <div className="w-full max-w-md rounded-xl border border-panel-border bg-panel text-left">
          <div className="flex items-center justify-between border-b border-line px-5 py-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-status-red" />
                <span className="h-3 w-3 rounded-full bg-status-yellow" />
                <span className="h-3 w-3 rounded-full bg-status-green" />
              </div>
              <span className="font-mono text-xs text-ink-muted">
                LEXICAL_SHELL
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
              <span className="text-ink-dim">:~$</span> cd {"{requested-page}"}
            </p>
            <p className="text-status-red">
              bash: cd: {"{requested-page}"}: No such file or directory
            </p>
            <p className="text-ink-muted">
              <span className="text-status-green">visitor@lexical</span>
              <span className="text-ink-dim">:~$</span>{" "}
              <span className="animate-pulse-slow">_</span>
            </p>
          </div>
        </div>

        <h1 className="mt-8 font-display text-3xl font-700 text-ink sm:text-4xl">
          This route doesn&apos;t exist
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          The page you're looking for has been moved, renamed, or never
          existed.
        </p>
        <div className="mt-8">
          <PrimaryButton href="/">Back to Home</PrimaryButton>
        </div>
        <Link
          href="/contact"
          className="mt-4 font-mono text-xs text-ink-muted hover:text-lexical-orange"
        >
          Or contact us
        </Link>
      </div>
    </section>
  );
}
