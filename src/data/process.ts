export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Inquiry",
    description:
      "You tell us about your project through the contact form \u2014 goals, timeline, and any existing assets or codebase.",
  },
  {
    step: "02",
    title: "Proposal",
    description:
      "We respond within one business day with a scoped proposal: deliverables, timeline, pricing, and payment terms.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Work begins in milestones with weekly staging deploys, so you see real progress and can give feedback as we go.",
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "We deploy to production, hand over source code and deployment access, and walk you through anything you need to know.",
  },
  {
    step: "05",
    title: "Support",
    description:
      "A free 15-day bug-fix window is included after launch, with optional monthly maintenance plans for ongoing support.",
  },
];
