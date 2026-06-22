import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Lexical Software",
  description:
    "How Lexical Software collects, uses, and protects information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <Section className="bg-grid">
      <SectionHeading
        eyebrow="Privacy Policy"
        title="How we handle your information"
        description={`Last updated: ${new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}`}        align="center"
      />

      <div className="mx-auto mt-12 max-w-2xl space-y-8">
        <div>
          <h2 className="font-display text-lg font-700 text-ink">
            What we collect
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            We only collect information you choose to give us. This includes
            your name, email address, project type, and project description
            when you submit the contact form, or your name, company, and
            review text if you submit a testimonial.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-700 text-ink">
            How we use it
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Contact form submissions are used solely to respond to your
            inquiry &mdash; to discuss your project, provide a quote, and follow
            up by email or phone. Testimonial submissions are reviewed before
            being published on this site; we'll only publish your name,
            company, rating, and review text, and never your email or phone
            number.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-700 text-ink">
            Email communication
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            When you contact us, we may follow up by email or phone to discuss
            your project. We do not send newsletters or marketing emails &mdash;
            you will only hear from us in direct response to your inquiry.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-700 text-ink">
            Cookies and analytics
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            This site does not use tracking cookies or third-party
            advertising scripts. If we add basic, privacy-respecting
            analytics in the future (to understand which pages are useful),
            this policy will be updated to reflect that.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-700 text-ink">
            Data sharing
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            We do not sell, rent, or share your information with third
            parties. Information you submit is stored only for as long as
            needed to respond to your inquiry or display an approved
            testimonial.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-700 text-ink">
            Your rights
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            You can ask us to delete any information you've submitted, request
            a copy of what we hold, or ask any privacy-related question at any
            time by emailing{' '}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-lexical-orange hover:underline"
            >
              {siteConfig.email}
            </a>
            . We'll respond within 2 business days.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-700 text-ink">
            Changes to this policy
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            If this policy changes, the "Last updated" date above will be
            revised. Continued use of this site after changes constitutes
            acceptance of the updated policy.
          </p>
        </div>
      </div>
    </Section>
  );
}