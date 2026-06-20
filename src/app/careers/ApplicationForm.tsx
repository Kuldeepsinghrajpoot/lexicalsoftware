"use client";

import { useEffect, useRef, useState, useActionState } from "react";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import { MailCheck } from "lucide-react";
import { submitApplication, type ApplicationFormState } from "./actions";
import { getCaptchaChallenge } from "../contact/captcha-action";
import type { CaptchaChallenge } from "@/lib/captcha";
import { applicationRoles } from "@/data/careers";

const initialState: ApplicationFormState = { success: false, message: "" };

const roleOptions = applicationRoles;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center rounded-md bg-lexical-gradient px-6 py-3 font-display text-sm font-600 text-base transition-opacity disabled:opacity-60 sm:w-auto"
    >
      {pending ? "Sending..." : "Submit Application"}
    </button>
  );
}

export default function ApplicationForm({
  forcedRole,
}: {
  forcedRole?: string;
}) {
  const [state, formAction] = useActionState(submitApplication, initialState);
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role");
  const candidateRole = forcedRole || roleParam;
  const defaultRole =
    candidateRole && roleOptions.includes(candidateRole)
      ? candidateRole
      : roleOptions[roleOptions.length - 1];

  const [captcha, setCaptcha] = useState<CaptchaChallenge | null>(null);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function refreshCaptcha() {
    const next = await getCaptchaChallenge();
    setCaptcha(next);
    setCaptchaAnswer("");
  }

  useEffect(() => {
    refreshCaptcha();
  }, []);

  useEffect(() => {
    if (state.message && !state.success) {
      refreshCaptcha();
    }
    if (state.success) {
      formRef.current?.reset();
      refreshCaptcha();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  if (state.success) {
    return (
      <div className="flex flex-col items-center rounded-xl border border-panel-border bg-base px-6 py-12 text-center">
        <span className="relative h-16 w-16 overflow-hidden rounded-xl shadow-md shadow-blue-500/20 ring-1 ring-panel-border animate-[fade-up_0.6s_ease-out]">
          <Image
            src="/images/logo/lexical-mark.jpg"
            alt="Lexical Software logo"
            fill
            sizes="64px"
            className="object-cover"
          />
        </span>
        <span className="mt-4 flex items-center gap-2 text-status-green">
          <MailCheck className="h-5 w-5" />
          <span className="font-display text-sm font-600 uppercase tracking-[0.2em]">
            Application sent
          </span>
        </span>
        <h2 className="mt-4 font-display text-2xl font-700 text-ink">
          Thanks for applying! We&rsquo;ll review your application and get
          back to you soon.
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
          We&rsquo;ve also sent a confirmation to your email with a copy of
          your application.
        </p>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-ink-dim">
          Team Lexical Software
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-5">
      {/* Honeypot field */}
      <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block font-mono text-xs uppercase tracking-[0.2em] text-ink-muted"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-md border border-panel-border bg-base px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus:border-lexical-orange focus:outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-mono text-xs uppercase tracking-[0.2em] text-ink-muted"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-md border border-panel-border bg-base px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus:border-lexical-orange focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="block font-mono text-xs uppercase tracking-[0.2em] text-ink-muted"
          >
            Phone <span className="text-ink-dim">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-md border border-panel-border bg-base px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus:border-lexical-orange focus:outline-none"
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label
            htmlFor="role"
            className="block font-mono text-xs uppercase tracking-[0.2em] text-ink-muted"
          >
            Role
          </label>
          <select
            id="role"
            name="role"
            className="mt-2 w-full rounded-md border border-panel-border bg-base px-4 py-3 text-sm text-ink focus:border-lexical-orange focus:outline-none"
            defaultValue={defaultRole}
          >
            {roleOptions.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="portfolioUrl"
          className="block font-mono text-xs uppercase tracking-[0.2em] text-ink-muted"
        >
          Portfolio / Resume Link <span className="text-ink-dim">(optional)</span>
        </label>
        <input
          id="portfolioUrl"
          name="portfolioUrl"
          type="url"
          className="mt-2 w-full rounded-md border border-panel-border bg-base px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus:border-lexical-orange focus:outline-none"
          placeholder="https://github.com/yourname or a Google Drive link to your resume"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-mono text-xs uppercase tracking-[0.2em] text-ink-muted"
        >
          Tell us about yourself
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-md border border-panel-border bg-base px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus:border-lexical-orange focus:outline-none"
          placeholder="Relevant experience, projects you've built, availability, and anything else that's useful."
        />
      </div>

      {/* Math captcha */}
      <div>
        <label
          htmlFor="captchaAnswer"
          className="block font-mono text-xs uppercase tracking-[0.2em] text-ink-muted"
        >
          Quick check: what is {captcha ? captcha.question : "..."}?
        </label>
        <input
          id="captchaAnswer"
          name="captchaAnswer"
          type="text"
          inputMode="numeric"
          required
          value={captchaAnswer}
          onChange={(e) => setCaptchaAnswer(e.target.value)}
          className="mt-2 w-full max-w-[120px] rounded-md border border-panel-border bg-base px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus:border-lexical-orange focus:outline-none"
          placeholder="Answer"
        />
        <input type="hidden" name="captchaToken" value={captcha?.token ?? ""} />
      </div>

      <SubmitButton />

      {state.message && (
        <p
          className={`font-mono text-sm ${
            state.success ? "text-status-green" : "text-status-red"
          }`}
          role="status"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}