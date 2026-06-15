export interface Service {
  slug: string;
  name: string;
  icon:
    | "globe"
    | "layers"
    | "code"
    | "smartphone"
    | "next"
    | "coffee"
    | "database"
    | "cloud"
    | "wrench";
  shortDescription: string;
  description: string;
  features: string[];
  pricingRange: string;
}

export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    icon: "globe",
    shortDescription:
      "Responsive, accessible websites built for speed and conversions.",
    description:
      "We design and build marketing sites, dashboards, and web apps that load fast, rank well, and feel right on every screen size. From pixel-accurate UI to clean semantic markup, every build follows modern web standards.",
    features: [
      "Responsive, mobile-first layouts",
      "SEO-friendly markup and metadata",
      "Performance budgets and Core Web Vitals tuning",
      "Accessibility (WCAG 2.1 AA) baked in",
    ],
    pricingRange: "\u20b915,000 \u2013 \u20b975,000",
  },
  {
    slug: "full-stack-development",
    name: "Full Stack Development",
    icon: "layers",
    shortDescription:
      "End-to-end product builds \u2014 frontend, backend, database, and deployment.",
    description:
      "One team, one codebase, no handoffs. We take products from a Figma file (or a napkin sketch) to a deployed, monitored application \u2014 covering UI, APIs, data modeling, auth, and infrastructure.",
    features: [
      "Single team across frontend and backend",
      "Authentication, payments, and role-based access",
      "Automated testing and CI/CD pipelines",
      "Post-launch monitoring and support",
    ],
    pricingRange: "\u20b950,000 \u2013 \u20b93,50,000+",
  },
  {
    slug: "php-development",
    name: "PHP Development",
    icon: "code",
    shortDescription:
      "Reliable PHP applications, from Laravel APIs to legacy modernization.",
    description:
      "We build and maintain PHP applications using Laravel and modern tooling, and we modernize legacy PHP codebases without disrupting your business \u2014 refactoring incrementally and adding test coverage as we go.",
    features: [
      "Laravel application development",
      "Legacy codebase audits and refactors",
      "REST API development",
      "Database migration and optimization",
    ],
    pricingRange: "\u20b920,000 \u2013 \u20b91,50,000",
  },
  {
    slug: "app-development",
    name: "App Development",
    icon: "smartphone",
    shortDescription:
      "Cross-platform mobile apps for iOS and Android from a single codebase.",
    description:
      "We build mobile applications using React Native and Expo, sharing logic and UI patterns with your web app where possible. From MVP to App Store launch, including push notifications, offline support, and native integrations.",
    features: [
      "Cross-platform iOS and Android apps (React Native / Expo)",
      "Push notifications and offline-first data sync",
      "App Store and Play Store submission support",
      "Shared API layer with your existing web backend",
    ],
    pricingRange: "\u20b960,000 \u2013 \u20b94,00,000",
  },
  {
    slug: "nextjs-development",
    name: "Next.js Development",
    icon: "next",
    shortDescription:
      "Server-rendered React applications with App Router and edge-ready architecture.",
    description:
      "Next.js is our default for production web apps \u2014 server components, streaming, and edge functions give your users fast first loads and your team a single deployable unit.",
    features: [
      "App Router architecture and server components",
      "ISR, SSR, and static generation strategies",
      "API routes and edge middleware",
      "Vercel / self-hosted deployment setup",
    ],
    pricingRange: "\u20b930,000 \u2013 \u20b92,50,000",
  },
  {
    slug: "java-spring-boot-development",
    name: "Java / Spring Boot Development",
    icon: "coffee",
    shortDescription:
      "Robust backend services and microservices on the JVM.",
    description:
      "For systems that need to be fast, type-safe, and built to last, we reach for Java and Spring Boot \u2014 covering REST and GraphQL APIs, messaging, batch jobs, and microservice architectures.",
    features: [
      "REST and GraphQL API development",
      "Microservice architecture and messaging (Kafka, RabbitMQ)",
      "Spring Security and OAuth2 integration",
      "Unit and integration testing with JUnit",
    ],
    pricingRange: "\u20b940,000 \u2013 \u20b93,00,000",
  },
  {
    slug: "database-design",
    name: "Database Design",
    icon: "database",
    shortDescription:
      "Schema design, optimization, and migration for relational and NoSQL data.",
    description:
      "Good data models save you from years of pain. We design normalized, indexed schemas for PostgreSQL, MySQL, and MongoDB, and help migrate existing data without downtime.",
    features: [
      "Schema design and normalization",
      "Indexing and query optimization",
      "Migration planning and execution",
      "Backup and disaster-recovery strategy",
    ],
    pricingRange: "\u20b910,000 \u2013 \u20b91,00,000",
  },
  {
    slug: "cloud-deployment",
    name: "Cloud Deployment",
    icon: "cloud",
    shortDescription:
      "Production-grade infrastructure on AWS, with CI/CD and monitoring.",
    description:
      "We set up infrastructure that scales with you \u2014 containerized deployments, managed databases, CDNs, and observability \u2014 so you spend less time on servers and more on your product.",
    features: [
      "AWS / cloud architecture setup",
      "Docker containerization and orchestration",
      "CI/CD pipeline configuration",
      "Logging, monitoring, and alerting",
    ],
    pricingRange: "\u20b920,000 \u2013 \u20b92,00,000",
  },
  {
    slug: "website-maintenance",
    name: "Website Maintenance",
    icon: "wrench",
    shortDescription:
      "Ongoing updates, monitoring, and support for live sites and apps.",
    description:
      "Launched is not finished. We offer monthly maintenance retainers covering dependency updates, security patches, content updates, and uptime monitoring \u2014 so your site stays fast and secure.",
    features: [
      "Dependency and security updates",
      "Uptime and performance monitoring",
      "Content updates and minor feature requests",
      "Monthly health and performance reports",
    ],
    pricingRange: "\u20b95,000 \u2013 \u20b930,000 / month",
  },
];
