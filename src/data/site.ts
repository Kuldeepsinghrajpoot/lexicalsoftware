export interface NavLink {
  label: string;
  href: string;
  icon:
    | "home"
    | "info"
    | "wrench"
    | "briefcase"
    | "users"
    | "star"
    | "newspaper"
    | "graduationCap";
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", icon: "home" },
  { label: "About Us", href: "/about", icon: "info" },
  { label: "Services", href: "/services", icon: "wrench" },
  { label: "Portfolio", href: "/portfolio", icon: "briefcase" },
  { label: "Team", href: "/team", icon: "users" },
  // { label: "Blog", href: "/blog", icon: "newspaper" },
  { label: "Careers", href: "/careers", icon: "graduationCap" },
];

export const availability = {
  status: "accepting" as "accepting" | "limited" | "booked",
  label: "Currently accepting new projects",
  bookedUntil: null as string | null,
};

export const siteConfig = {
  name: "Lexical Software",
  tagline: "Elite Software Startup & Consulting Group",
  description:
    "We design, build, and ship full-stack web applications, scalable APIs, and cloud-native infrastructure.",
  email: "softwarelexical@gmail.com",
  phone: "+91 9144462693",
  address: "Remote-first \u2014 Gurugram, Haryana, India",
  social: {
    github: "https://github.com/lexicalsoftware",
    linkedin: "https://linkedin.com/company/lexicalsoftware",
    twitter: "https://twitter.com/lexicalsoftware",
  },
};
