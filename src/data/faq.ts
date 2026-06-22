export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "Is there any free maintenance after project delivery?",
    answer:
      "Yes — every project includes a free 15-day support window after launch covering bug fixes related to the original scope, at no extra cost. Beyond that, ongoing maintenance (updates, monitoring, content changes, new features) is available through our monthly Website Maintenance plans.",
  },
  {
    question: "What happens if I find a bug after launch?",
    answer:
      "Report it within the 15-day post-launch window and we'll fix it for free, as long as it's related to features we built. Bugs found after that window, or issues caused by changes made outside our team, are handled under a maintenance plan or a small one-off fix.",
  },
  {
    question: "Do you provide the source code and deployment access?",
    answer:
      "Yes. On project completion you receive full deployment access — hosting, domain, and cloud accounts are all handed over to you. While source code is not included in the standard delivery, you get complete control over your live product with no platform lock-in and no recurring fees owed to us.",
  },
  {
    question: "What if I need changes during development?",
    answer:
      "Minor adjustments within the agreed scope are included as we go — that's what the weekly staging reviews are for. Larger changes that expand the original scope are quoted separately so your budget and timeline stay predictable.",
  },
  {
    question: "Do you sign an NDA or contract before starting?",
    answer:
      "Yes. We're happy to sign an NDA before discussing project details, and a simple scope-of-work agreement covering deliverables, timeline, and payment terms before development begins.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "Typically a 40% advance to begin work, 30% at the midpoint milestone, and the final 30% on delivery before handover. For smaller projects (under ₹20,000) we may request 50% upfront and 50% on completion.",
  },
  {
    question: "What's your typical project timeline?",
    answer:
      "Most landing sites take 1–2 weeks. Full-stack applications typically run 4–12 weeks depending on scope, with weekly check-ins and a staging link you can review throughout.",
  },
  {
    question: "Do you work with startups or only established companies?",
    answer:
      "Both. We're a small, hands-on freelance team — which means early-stage founders get the same focused attention as established businesses, not a junior hand-off. Whether you need an MVP built from scratch or extra engineering support for an existing product, we scope every project around your actual needs and budget, not a one-size-fits-all package.",
  },
  {
    question: "What's included in your pricing?",
    answer:
      "Every quote covers design, development, basic testing, and deployment. What's typically not included: domain registration, third-party service fees (payment gateways, SMS/email APIs, cloud hosting costs), and ongoing maintenance — these are billed separately or passed through at cost. No hidden markups, no surprises mid-project.",
  },
  {
    question: "Can you work with our existing codebase?",
    answer:
      "Yes — we work with existing codebases regularly. Whether it's a legacy PHP backend, a Java/Spring Boot service, or a JavaScript frontend that's grown messy over time, we start with a short audit (usually 1–2 days) to map what's there, flag any risks, and give you a clear picture before a single line changes. No blind refactors, no surprise scope creep.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simple — fill out the contact form with a short description of what you're building and your rough timeline. We'll get back to you within one business day. No lengthy questionnaires, no sales calls you didn't ask for — just a straight conversation about whether we're a good fit and what it would take to get started.",
  },
  {
    question: "Do you build mobile apps as well as websites?",
    answer:
      "Yes — we build mobile apps alongside websites. Our App Development service covers cross-platform iOS and Android apps built with React Native and Expo, so one codebase runs on both platforms without compromise. Included as standard: push notifications, offline data sync, and full App Store / Play Store submission support. If your web and mobile products need to share a backend, we handle that too.",
  },
  {
    question: "How do you communicate during a project?",
    answer:
      "We default to email and a shared chat channel (Slack or WhatsApp, whichever you prefer) for day-to-day updates, plus a short weekly call to review progress on staging. You can always reach the engineer working on your project directly.",
  },
  {
    question: "What time zone do you work in, and can we have calls?",
    answer:
      "We're based in India (IST) but work async-first, so most updates happen over chat and email regardless of time zone. We're happy to schedule calls during your business hours — just let us know your availability in the contact form.",
  },
  {
    question: "Do you offer refunds if I'm not happy with the work?",
    answer:
      "Work is delivered in milestones, and you review and approve each one before we move to the next — so issues get caught early rather than at the end. If a milestone doesn't meet the agreed scope, we'll revise it at no extra cost. Advance payments for work not yet started are refundable; completed milestone work is not.",
  },
  {
    question: "Can you design the UI/UX, or do I need to provide designs?",
    answer:
      "Either works. Our UI/UX designer can create the full design from scratch based on your goals and brand, or we can build directly from your existing Figma files — just let us know which you'd prefer when you reach out.",
  },
  {
    question: "Do you offer fixed-price or hourly billing?",
    answer:
      "Most projects are fixed-price based on a scoped proposal, so you know the total cost upfront. For ongoing work or maintenance retainers, we also offer monthly or hourly arrangements — we'll recommend what fits best for your project.",
  },
  {
    question: "Can you help with hosting and domain setup too?",
    answer:
      "Yes — hosting and domain setup is part of what we do. Under our Cloud Deployment service we handle everything: domain registration, DNS configuration, SSL certificates, hosting setup on your preferred platform (Vercel, AWS, or a VPS), and business email if needed. If you already have hosting or a domain in place, we'll work with what you have — no need to switch providers or start from scratch.",
  },
  {
    question: "Do you provide SEO optimization with the website?",
    answer:
      "Basic on-page SEO is included as standard — clean URL structure, meta tags, Open Graph setup, sitemap, and fast load times (which Google factors into rankings). Advanced SEO (keyword research, content strategy, backlink building) is outside our scope, but we make sure the technical foundation is solid so any SEO work you do on top actually sticks.",
  },
  {
    question: "Can you integrate third-party tools like payment gateways or CRMs?",
    answer:
      "Yes — integrations are a regular part of our work. Payment gateways (Razorpay, Stripe, PayPal), WhatsApp and SMS APIs, Google Analytics, CRM systems, and most services that offer an API can be connected. If you have a specific tool in mind, mention it in your project brief and we'll confirm compatibility upfront.",
  },
  {
    question: "Will my website work on all devices and browsers?",
    answer:
      "Yes. Every website and app we deliver is fully responsive — tested across mobile, tablet, and desktop, and across major browsers (Chrome, Safari, Firefox, Edge). If your audience uses a specific device or browser you're concerned about, just let us know and we'll prioritize it in testing.",
  },
  {
    question: "Who owns the content and data on my website?",
    answer:
      "You do — completely. All content, user data, and databases are yours. We don't retain access to your hosting or accounts after handover unless you've engaged us for ongoing maintenance, and even then access can be revoked at any time.",
  },
  {
    question: "Can I update the website myself after it's built?",
    answer:
      "Yes, if a CMS is part of your project scope. We can build with a headless CMS (like Sanity or Contentful) or a traditional one so you can update text, images, and blog posts without touching code. Just mention it when scoping — it affects the build slightly but is a common request.",
  },
  {
    question: "Do you take on small or one-page projects?",
    answer:
      "Yes. A single landing page, a portfolio site, or a quick redesign of one section — we don't have a minimum project size. Smaller projects are quoted flat-rate and typically delivered in under two weeks.",
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "Yes — we work with clients globally. Payments can be accepted in INR or USD, and we're comfortable working async across time zones. Most of our communication happens over email and chat, so geography rarely gets in the way.",
  },
  {
    question: "Can I see examples of your previous work before hiring?",
    answer:
      "Yes — our Portfolio page has a selection of past projects with brief case studies. If you're looking for something specific (a certain industry, tech stack, or feature), just ask when you reach out and we'll share the most relevant examples.",
  },
  {
    question: "What if my project needs a technology you haven't listed?",
    answer:
      "Reach out anyway. Our core stack covers most modern web and mobile needs, but we've worked with tools outside our standard list before. If it's something we can't handle confidently, we'll tell you upfront rather than learn on your budget.",
  },
  {
    question: "How do you handle project delays?",
    answer:
      "We flag delays early — never at the deadline. If something on our side causes a delay, we absorb the extra time at no cost to you. If delays are caused by late feedback, missing content, or scope changes from your side, we'll adjust the timeline together and communicate it clearly before it becomes a problem.",
  },
  {
    question: "Do you provide a formal invoice?",
    answer:
      "Yes — we issue a proper invoice for every payment milestone covering the agreed work. If your business requires a specific invoice format, just let us know and we'll accommodate it.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers (NEFT/IMPS/UPI) and online payments via Razorpay. For international clients, we accept payments via PayPal or wire transfer. Payment details are shared with the invoice for each milestone.",
  },
  {
    question: "Can you build an e-commerce store?",
    answer:
      "Yes — e-commerce is within our scope. We build custom storefronts with product listings, cart, checkout, and payment gateway integration (Razorpay, Stripe). If you need a quick setup, we can also configure and customize a platform like Shopify. Tell us your expected catalog size and order volume when you reach out so we can recommend the right approach.",
  },
  {
    question: "Will you train us to manage the website after handover?",
    answer:
      "Yes. Every delivery includes a handover session — a short walkthrough (recorded if useful) covering how to update content, manage users, and handle the basics. We also provide a written README so your team isn't dependent on us for day-to-day operations.",
  },
  {
    question: "What if I only have a rough idea, not a full brief?",
    answer:
      "That's fine — most clients come to us with an idea, not a spec. We'll ask the right questions to help shape it into something buildable and help you figure out what's essential for version one versus what can come later. A rough idea is enough to start a conversation.",
  },
];