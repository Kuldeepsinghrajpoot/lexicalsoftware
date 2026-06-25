import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { siteConfig } from "@/data/site";
import CopyButton from "@/components/shared/CopyButton";
import Reveal from "@/components/shared/Reveal";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote",
  description:
    "Get in touch with Lexical Software for website development, app development, or any software project. Call +91 9144462693 or email us for a free consultation.",
  keywords: [
    "contact Lexical Software",
    "website development quote India",
    "free website quote",
    "hire web developer India",
    "website banana contact",
  ],
  openGraph: {
    title: "Contact Us | Lexical Software",
    description:
      "Get in touch for a free consultation on your website or app project.",
    url: "https://lexicalsoftware.in/contact",
  },
};

export default function ContactPage() {
  return (
    <Section className="bg-grid">
      <SectionHeading
        eyebrow="Contact Us"
        title="Let's talk about your project"
        description="Fill out the form and we'll get back to you within one business day, or reach out directly using the details below."
        align="center"
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr,1.5fr]">
        <Reveal direction="right">
          <div className="space-y-4">
            {/* Email */}
            <div className="relative overflow-hidden rounded-xl border border-panel-border bg-panel p-6">
              <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-node-glow opacity-70" />
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-panel-border bg-base text-lexical-orange">
                <Mail className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-600 text-ink">Email</h3>
              <div className="mt-1 flex items-center gap-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-ink-muted hover:text-lexical-orange"
                >
                  {siteConfig.email}
                </a>
                <CopyButton value={siteConfig.email} label="email address" />
              </div>
            </div>

            {/* Phone */}
            <div className="relative overflow-hidden rounded-xl border border-panel-border bg-panel p-6">
              <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-node-glow opacity-70" />
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-panel-border bg-base text-lexical-orange">
                <Phone className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-600 text-ink">Phone</h3>
              <div className="mt-1 flex items-center gap-2">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-sm text-ink-muted hover:text-lexical-orange"
                >
                  {siteConfig.phone}
                </a>
                <CopyButton value={siteConfig.phone} label="phone number" />
              </div>
              <div className="mt-2 flex items-center gap-2">
                <a
                  href="tel:+917415557442"
                  className="text-sm text-ink-muted hover:text-lexical-orange"
                >
                  +91 7415557442
                </a>
                <CopyButton value="+91 7415557442" label="phone number" />
              </div>
            </div>

            {/* Location */}
            <div className="relative overflow-hidden rounded-xl border border-panel-border bg-panel p-6">
              <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-node-glow opacity-70" />
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-panel-border bg-base text-lexical-orange">
                <MapPin className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-600 text-ink">Location</h3>
              <p className="mt-1 text-sm text-ink-muted">{siteConfig.address}</p>
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <div className="relative overflow-hidden rounded-xl border border-panel-border bg-panel p-8">
          <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-node-glow opacity-70" />
          <Suspense fallback={<ContactFormFallback />}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </Section>
  );
}

function ContactFormFallback() {
  return (
    <div className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="h-12 animate-pulse rounded-md bg-line" />
        <div className="h-12 animate-pulse rounded-md bg-line" />
      </div>
      <div className="h-12 animate-pulse rounded-md bg-line" />
      <div className="h-28 animate-pulse rounded-md bg-line" />
      <div className="h-12 animate-pulse rounded-md bg-line" />
    </div>
  );
}