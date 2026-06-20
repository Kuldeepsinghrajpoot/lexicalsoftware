"use client";

import { useEffect, useState, useActionState } from "react";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, MailCheck } from "lucide-react";
import { submitContactForm, type ContactFormState } from "./actions";
import { getCaptchaChallenge } from "./captcha-action";
import { services } from "@/data/services";
import type { CaptchaChallenge } from "@/lib/captcha";
import { cn } from "@/lib/utils";

const projectTypes = [...services.map((s) => s.name), "Other"];

const budgetRanges = [
  "Under \u20b920,000",
  "\u20b920,000 \u2013 \u20b975,000",
  "\u20b975,000 \u2013 \u20b92,00,000",
  "\u20b92,00,000+",
  "Not sure yet",
];

const contactTimes = [
  "Anytime",
  "Morning (9 AM \u2013 12 PM)",
  "Afternoon (12 PM \u2013 4 PM)",
  "Evening (4 PM \u2013 8 PM)",
];

const referralSources = [
  "Select an option",
  "Google Search",
  "LinkedIn",
  "Referral from a friend / colleague",
  "GitHub",
  "Social Media (Instagram / Twitter / Facebook)",
  "Other",
];

const initialState: ContactFormState = { success: false, message: "" };

const steps = [
  { id: 1, label: "Project Type" },
  { id: 2, label: "Budget" },
  { id: 3, label: "Description" },
  { id: 4, label: "Contact Info" },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center rounded-md bg-lexical-gradient px-6 py-3 font-display text-sm font-600 text-base transition-opacity disabled:opacity-60 sm:w-auto"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}

function StepIndicator({ currentStep }: { currentStep: number }) {
  return (
    <div className="mb-8 flex items-center gap-2">
      {steps.map((step, index) => (
        <div key={step.id} className="flex flex-1 items-center gap-2">
          <div className="flex flex-col items-center gap-1.5">
            <div
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-full border font-mono text-xs font-600 transition-colors",
                currentStep > step.id
                  ? "border-lexical-orange bg-lexical-orange/10 text-lexical-orange"
                  : currentStep === step.id
                  ? "border-lexical-orange bg-lexical-orange text-base"
                  : "border-panel-border text-ink-dim"
              )}
            >
              {currentStep > step.id ? <Check className="h-3.5 w-3.5" /> : step.id}
            </div>
            <span
              className={cn(
                "hidden font-mono text-[10px] uppercase tracking-[0.15em] sm:block",
                currentStep === step.id ? "text-lexical-orange" : "text-ink-dim"
              )}
            >
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={cn(
                "h-px flex-1 transition-colors",
                currentStep > step.id ? "bg-lexical-orange" : "bg-panel-border"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function ContactForm() {
const [state, formAction] = useActionState(submitContactForm, initialState);  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");
  const defaultProjectType =
    serviceParam && projectTypes.includes(serviceParam)
      ? serviceParam
      : projectTypes[0];

  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState(defaultProjectType);
  const [budget, setBudget] = useState(budgetRanges[budgetRanges.length - 1]);
  const [message, setMessage] = useState("");

  const [captcha, setCaptcha] = useState<CaptchaChallenge | null>(null);
  const [captchaAnswer, setCaptchaAnswer] = useState("");

  async function refreshCaptcha() {
    const next = await getCaptchaChallenge();
    setCaptcha(next);
    setCaptchaAnswer("");
  }

  useEffect(() => {
    refreshCaptcha();
  }, []);

  // Get a fresh captcha after any failed submission so a stale/used
  // token can't be replayed.
  useEffect(() => {
    if (state.message && !state.success) {
      refreshCaptcha();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const canGoNext = step === 3 ? message.trim().length > 0 : true;

  if (state.success) {
    return (
      <div className="flex flex-col items-center rounded-xl border border-panel-border bg-base px-6 py-12 text-center">
        <span className="relative h-16 w-16 overflow-hidden rounded-xl shadow-md shadow-blue-500/20 ring-1 ring-panel-border animate-[fade-up_0.6s_ease-out]">
          <Image
            src="/images/logo/lexical-mark.jpg"
            alt="Lexical Software logo"
            fill
            className="object-cover"
          />
        </span>
        <span className="mt-4 flex items-center gap-2 text-status-green">
          <MailCheck className="h-5 w-5" />
          <span className="font-display text-sm font-600 uppercase tracking-[0.2em]">
            Message sent
          </span>
        </span>
        <h2 className="mt-4 font-display text-2xl font-700 text-ink">
          Thanks! We&rsquo;ll get back to you within one business day.
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
          We've also sent a confirmation to your email with a copy of your
          message.
        </p>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-ink-dim">
          Team Lexical Software
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {/* Honeypot field \u2014 hidden from real users, bots tend to fill everything */}
      <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <StepIndicator currentStep={step} />

      {/* Step 1: Project Type */}
      <div className={cn("space-y-3", step !== 1 && "hidden")}>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
          What kind of project is this?
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {projectTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setProjectType(type)}
              className={cn(
                "rounded-md border px-4 py-3 text-left font-body text-sm transition-colors",
                projectType === type
                  ? "border-lexical-orange bg-lexical-orange/10 text-ink"
                  : "border-panel-border bg-base text-ink-muted hover:text-ink"
              )}
            >
              {type}
            </button>
          ))}
        </div>
        <input type="hidden" name="projectType" value={projectType} />
      </div>

      {/* Step 2: Budget */}
      <div className={cn("space-y-3", step !== 2 && "hidden")}>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
          What's your rough budget?
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {budgetRanges.map((range) => (
            <button
              key={range}
              type="button"
              onClick={() => setBudget(range)}
              className={cn(
                "rounded-md border px-4 py-3 text-left font-body text-sm transition-colors",
                budget === range
                  ? "border-lexical-orange bg-lexical-orange/10 text-ink"
                  : "border-panel-border bg-base text-ink-muted hover:text-ink"
              )}
            >
              {range}
            </button>
          ))}
        </div>
        <input type="hidden" name="budget" value={budget} />
        <p className="font-mono text-xs text-ink-dim">
          This helps us recommend the right scope \u2014 it's not a commitment.
        </p>
      </div>

      {/* Step 3: Description */}
      <div className={cn("space-y-3", step !== 3 && "hidden")}>
        <label
          htmlFor="message"
          className="block font-mono text-xs uppercase tracking-[0.2em] text-ink-muted"
        >
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          required={step === 3}
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-md border border-panel-border bg-base px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus:border-lexical-orange focus:outline-none"
          placeholder="Goals, timeline, existing codebase, anything else that's useful context."
        />
      </div>

      {/* Step 4: Contact Info */}
      <div className={cn("space-y-5", step !== 4 && "hidden")}>
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
              required={step === 4}
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
              required={step === 4}
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
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required={step === 4}
              className="mt-2 w-full rounded-md border border-panel-border bg-base px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus:border-lexical-orange focus:outline-none"
              placeholder="+91 98765 43210"
            />
          </div>
          <div>
            <label
              htmlFor="secondaryPhone"
              className="block font-mono text-xs uppercase tracking-[0.2em] text-ink-muted"
            >
              Secondary Phone{" "}
              <span className="text-ink-dim">(optional)</span>
            </label>
            <input
              id="secondaryPhone"
              name="secondaryPhone"
              type="tel"
              className="mt-2 w-full rounded-md border border-panel-border bg-base px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus:border-lexical-orange focus:outline-none"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="company"
              className="block font-mono text-xs uppercase tracking-[0.2em] text-ink-muted"
            >
              Company <span className="text-ink-dim">(optional)</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="mt-2 w-full rounded-md border border-panel-border bg-base px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus:border-lexical-orange focus:outline-none"
              placeholder="Your company or organization"
            />
          </div>
          <div>
            <label
              htmlFor="contactTime"
              className="block font-mono text-xs uppercase tracking-[0.2em] text-ink-muted"
            >
              Preferred Contact Time
            </label>
            <select
              id="contactTime"
              name="contactTime"
              className="mt-2 w-full rounded-md border border-panel-border bg-base px-4 py-3 text-sm text-ink focus:border-lexical-orange focus:outline-none"
              defaultValue={contactTimes[0]}
            >
              {contactTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="referralSource"
            className="block font-mono text-xs uppercase tracking-[0.2em] text-ink-muted"
          >
            How did you hear about us?
          </label>
          <select
            id="referralSource"
            name="referralSource"
            className="mt-2 w-full rounded-md border border-panel-border bg-base px-4 py-3 text-sm text-ink focus:border-lexical-orange focus:outline-none"
            defaultValue={referralSources[0]}
          >
            {referralSources.map((source) => (
              <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
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
            required={step === 4}
            value={captchaAnswer}
            onChange={(e) => setCaptchaAnswer(e.target.value)}
            className="mt-2 w-full max-w-[120px] rounded-md border border-panel-border bg-base px-4 py-3 text-sm text-ink placeholder:text-ink-dim focus:border-lexical-orange focus:outline-none"
            placeholder="Answer"
          />
          <input type="hidden" name="captchaToken" value={captcha?.token ?? ""} />
        </div>

        {/* Summary of earlier steps */}
        <div className="rounded-md border border-panel-border bg-base p-4 font-mono text-xs text-ink-muted">
          <p>
            <span className="text-ink-dim">Project type:</span> {projectType}
          </p>
          <p className="mt-1">
            <span className="text-ink-dim">Budget:</span> {budget}
          </p>
          <p className="mt-1 text-ink-dim">
            We'll also ask for your phone number, company, and how you
            heard about us below \u2014 only your name and phone are required.
          </p>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between gap-4 pt-2">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="inline-flex items-center gap-2 rounded-md border border-panel-border bg-base px-5 py-2.5 font-display text-sm font-600 text-ink transition-colors hover:border-lexical-orange hover:text-lexical-orange"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
        ) : (
          <span />
        )}

        {step < 4 ? (
          <button
            type="button"
            disabled={!canGoNext}
            onClick={() => setStep((s) => s + 1)}
            className="inline-flex items-center gap-2 rounded-md bg-lexical-gradient px-6 py-2.5 font-display text-sm font-600 text-base transition-opacity disabled:opacity-50"
          >
            Next
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <SubmitButton />
        )}
      </div>

      {state.message && !state.success && (
        <p className="font-mono text-sm text-status-red" role="status">
          {state.message}
        </p>
      )}
    </form>
  );
}
