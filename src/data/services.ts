export interface Service {
  slug: string;
  name: string;
  icon: "globe" | "smartphone" | "wrench" | "refresh" | "cloud";
  shortDescription: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    slug: "website-development",
    name: "Website Development",
    icon: "globe",
    shortDescription:
      "Responsive, fast-loading websites — from business sites to full web applications.",
    description:
      "We design and build marketing sites, e-commerce stores, and custom web applications that load fast, rank well on Google, and look great on every screen. From a simple landing page to a full-featured platform, every site is built on modern, scalable code.",
    features: [
      "Responsive design (mobile, tablet, desktop)",
      "SEO-friendly structure & fast load times",
      "Custom CMS so you can update content yourself",
      "E-commerce ready (if needed)",
    ],
  },
  {
    slug: "app-development",
    name: "App Development",
    icon: "smartphone",
    shortDescription:
      "Cross-platform mobile apps for iOS & Android, built from a single codebase.",
    description:
      "We build mobile apps that feel native and run smoothly on both iOS and Android — from a quick MVP to a full-featured app ready for the App Store and Play Store, including notifications, offline support, and backend integration.",
    features: [
      "iOS + Android from one codebase",
      "Push notifications & offline support",
      "App Store / Play Store submission help",
      "Integration with your existing systems",
    ],
  },
  {
    slug: "website-app-maintenance",
    name: "Website & App Maintenance",
    icon: "wrench",
    shortDescription:
      "Ongoing support so your live site or app stays fast, secure, and bug-free.",
    description:
      "Launching is just the start. We handle regular updates, security patches, bug fixes, and monitoring — so you don't have to worry about your website or app breaking, slowing down, or falling behind.",
    features: [
      "Security updates & bug fixes",
      "Uptime & performance monitoring",
      "Minor content/feature updates",
      "Monthly health report",
    ],
  },
  {
    slug: "website-app-renovation",
    name: "Website & App Renovation",
    icon: "refresh",
    shortDescription:
      "Give your outdated website or app a complete modern makeover.",
    description:
      "If your site looks dated, loads slowly, or runs on old technology, we rebuild it with a modern design, faster performance, and new features — without losing what's already working for you.",
    features: [
      "Modern UI/UX redesign",
      "Old tech stack → modern stack migration",
      "Speed & SEO improvement",
      "New features added during rebuild",
    ],
  },
  
];