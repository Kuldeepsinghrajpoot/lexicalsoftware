export interface PricingTier {
  name: string;
  description: string;
  originalPrice: string;
  price: string;
  priceNote?: string;
  features: string[];
  cta: string;
  variant: "default" | "popular" | "dark";
  badge?: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter Web Page",
    description:
      "A simple, fast website to show your business to the world.",
    originalPrice: "₹15,000",
    price: "₹7,499",
    priceNote: "* Domain & Hosting extra Charges",
    features: [
      "4 custom web pages (Home, About, Contact, Services)",
      "Looks great on mobile phones & computers",
      "Basic Google Search setup (SEO)",
      "Fast loading speed",
    ],
    cta: "Get Started",
    variant: "default",
  },
  {
    name: "Full Fledge Website",
    description:
      "A complete website with advanced features like user accounts and databases.",
    originalPrice: "₹40,000",
    price: "₹19,999",
    priceNote: "* Domain & Hosting extra Charges",
    features: [
      "Custom Admin Panel to manage content",
      "Secure User Login & Sign-up",
      "Online Payment Gateway setup",
      "Full database storage for your data",
    ],
    cta: "Build My Platform",
    variant: "popular",
    badge: "Most Popular",
  },
  {
    name: "App Development",
    description: "Your own mobile app for Android and iPhone users.",
    originalPrice: "₹50,000",
    price: "₹24,999",
    features: [
      "Works on Android & iOS (iPhone)",
      "Sending push notifications to users",
      "Uploading app to Play Store & App Store",
      "Connects directly with your website's data",
    ],
    cta: "Let's Talk",
    variant: "default",
  },
  {
    name: "Maintenance and Renovation",
    description:
      "Keep your website or app safe, updated, and running smoothly.",
    originalPrice: "₹14,000",
    price: "₹6,999",
    features: [
      "Regular virus & security checks",
      "Fixing any bugs or errors",
      "Keeping the software up to date",
      "Small text or image changes when needed",
    ],
    cta: "Secure & Upgrade",
    variant: "dark",
  },
];