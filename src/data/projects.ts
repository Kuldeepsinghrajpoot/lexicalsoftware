export interface ProjectResult {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  technologies: string[];
  description: string;
  cloudinaryId?: string;
  featured?: boolean;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  results: ProjectResult[];
}

export const projectCategories = [
  "All",
  "Web App",
  "E-Commerce",
  "SaaS",
  "Mobile App",
  "API / Backend",
  "Dashboard",
];

export const projectTechnologies = [
  "Next.js",
  "React",
  "React Native",
  "Node.js",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Tailwind CSS",
  "AWS",
  "PHP",
  "Redis",
];

export const projects: Project[] = [
  {
    slug: "fieldops-dashboard",
    name: "FieldOps Dashboard",
    category: "Dashboard",
    featured: true,
    technologies: ["Next.js", "Java", "Spring Boot", "PostgreSQL"],
    description:
      "An internal operations dashboard for a logistics company to track field technician schedules, job statuses, and inventory in real time.",
    cloudinaryId: "", // e.g. "projects/fieldops-dashboard"
    overview:
      "FieldOps replaced a spreadsheet-based scheduling process with a live dashboard that dispatchers and technicians both use \u2014 dispatchers assign jobs and see technician locations, while technicians update job status from a mobile-friendly view.",
    problem:
      "The client coordinated 30+ field technicians using shared spreadsheets and phone calls, which led to double-bookings, missed jobs, and no visibility into daily progress.",
    solution:
      "We built a Spring Boot API backed by PostgreSQL for job and technician data, with a Next.js dashboard for dispatchers and a lightweight mobile-friendly view for technicians to update job status and add notes from the field.",
    features: [
      "Real-time job assignment and status tracking",
      "Technician calendar with drag-and-drop scheduling",
      "Role-based access for dispatchers vs technicians",
      "Daily summary reports exported as PDF",
    ],
    results: [
      { value: "40%", label: "Fewer scheduling conflicts" },
      { value: "3hrs", label: "Saved per dispatcher daily" },
      { value: "30+", label: "Technicians onboarded" },
    ],
  },
  {
    slug: "shelfsense-inventory",
    name: "ShelfSense Inventory",
    category: "SaaS",
    technologies: ["Next.js", "Node.js", "MongoDB", "AWS"],
    description:
      "A multi-tenant SaaS platform for small retailers to track stock levels across multiple store locations and get low-stock alerts.",
    cloudinaryId: "", // e.g. "projects/shelfsense-inventory"
    overview:
      "ShelfSense lets retail chains manage inventory across locations from one dashboard, with barcode scanning support and automated reorder alerts when stock runs low.",
    problem:
      "A regional retail chain managed inventory separately per store with no shared visibility, leading to overstock at some locations and stockouts at others.",
    solution:
      "We built a multi-tenant Next.js application with a Node.js API and MongoDB, supporting per-location inventory views, barcode-based stock updates, and email/SMS alerts when items fall below a configurable threshold.",
    features: [
      "Multi-location inventory tracking with role-based access",
      "Barcode scanning for fast stock updates",
      "Automated low-stock email and SMS alerts",
      "CSV import/export for bulk inventory management",
    ],
    results: [
      { value: "25%", label: "Reduction in stockouts" },
      { value: "5", label: "Store locations connected" },
      { value: "99.9%", label: "Uptime since launch" },
    ],
  },
  {
    slug: "lexicart-storefront",
    name: "LexiCart Storefront",
    category: "E-Commerce",
    technologies: ["Next.js", "PostgreSQL", "Tailwind CSS", "AWS"],
    description:
      "A custom e-commerce storefront for a D2C skincare brand, including product catalog, cart, checkout, and order management.",
    cloudinaryId: "", // e.g. "projects/lexicart-storefront"
    overview:
      "LexiCart is a fast, SEO-friendly storefront built for a direct-to-consumer skincare brand moving off a templated platform, with a custom admin panel for managing products and orders.",
    problem:
      "The client's previous templated storefront was slow on mobile, difficult to customize, and charged high transaction fees that ate into margins.",
    solution:
      "We built a server-rendered Next.js storefront with a PostgreSQL-backed product catalog, a custom checkout flow integrated with a payment gateway, and an admin panel for managing products, orders, and discount codes.",
    features: [
      "Server-rendered product pages for fast loads and SEO",
      "Custom checkout with saved addresses and order history",
      "Admin panel for products, orders, and discount codes",
      "Mobile-first responsive design",
    ],
    results: [
      { value: "1.8s", label: "Average page load time" },
      { value: "22%", label: "Increase in conversion rate" },
      { value: "60%", label: "Lower transaction fees" },
    ],
  },
  {
    slug: "clinicflow-booking",
    name: "ClinicFlow Booking",
    category: "Web App",
    technologies: ["Next.js", "Java", "Spring Boot", "MySQL"],
    description:
      "An appointment booking and patient management web app for a multi-doctor clinic, replacing phone-based scheduling.",
    cloudinaryId: "", // e.g. "projects/clinicflow-booking"
    overview:
      "ClinicFlow gives patients an online booking calendar showing real-time doctor availability, while clinic staff manage appointments, patient records, and reminders from a single dashboard.",
    problem:
      "The clinic relied entirely on phone calls for booking, leading to long hold times for patients and frequent double-bookings across its three doctors.",
    solution:
      "We built a Spring Boot backend with MySQL to manage doctor schedules and patient records, paired with a Next.js frontend offering a public booking calendar and a staff dashboard for managing appointments and sending automated SMS reminders.",
    features: [
      "Public booking calendar with real-time availability",
      "Staff dashboard for appointments and patient records",
      "Automated SMS appointment reminders",
      "Doctor-specific schedules and time-off management",
    ],
    results: [
      { value: "50%", label: "Fewer no-shows" },
      { value: "3", label: "Doctor schedules managed" },
      { value: "24/7", label: "Online booking availability" },
    ],
  },
  {
    slug: "routewise-driver-app",
    name: "RouteWise Driver App",
    category: "Mobile App",
    technologies: ["React Native", "Node.js", "PostgreSQL"],
    description:
      "A cross-platform mobile app for delivery drivers to view assigned routes, mark deliveries complete, and capture proof of delivery photos.",
    cloudinaryId: "", // e.g. "projects/routewise-driver-app"
    overview:
      "RouteWise is a React Native app that gives delivery drivers their daily route, turn-by-turn stop order, and a simple way to confirm deliveries with a photo and signature \u2014 syncing back to the dispatch dashboard in real time.",
    problem:
      "Drivers were using paper delivery sheets and calling dispatch to confirm completions, causing delays in updating customers and no record of proof of delivery.",
    solution:
      "We built a React Native app (iOS and Android) with offline support for areas with poor signal, syncing route and delivery status to a Node.js API backed by PostgreSQL as soon as connectivity is available.",
    features: [
      "Daily route view with optimized stop order",
      "Photo and signature capture for proof of delivery",
      "Offline-first design with background sync",
      "Push notifications for new or updated routes",
    ],
    results: [
      { value: "35%", label: "Faster delivery confirmations" },
      { value: "100%", label: "Deliveries with proof captured" },
      { value: "2", label: "Platforms from one codebase" },
    ],
  },
  {
    slug: "billbox-invoicing-api",
    name: "BillBox Invoicing API",
    category: "API / Backend",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "AWS"],
    description:
      "A standalone invoicing and billing API used by a SaaS platform to generate, send, and track invoices for its customers.",
    cloudinaryId: "", // e.g. "projects/billbox-invoicing-api"
    overview:
      "BillBox is a REST API that handles invoice generation, PDF rendering, payment status tracking, and webhook notifications \u2014 built as a service the client's existing platform calls for all billing operations.",
    problem:
      "The client's monolithic application had billing logic tightly coupled to its codebase, making it hard to update invoice templates or add new payment providers without risking the whole app.",
    solution:
      "We extracted billing into a standalone Spring Boot service with its own PostgreSQL database, exposing a REST API for invoice creation, PDF generation, and status webhooks, deployed independently on AWS so it can scale and deploy separately from the main app.",
    features: [
      "REST API for invoice creation and management",
      "PDF invoice generation with customizable templates",
      "Webhook notifications for payment status changes",
      "Independent deployment and scaling on AWS",
    ],
    results: [
      { value: "10k+", label: "Invoices processed monthly" },
      { value: "99.95%", label: "API uptime" },
      { value: "<200ms", label: "Average response time" },
    ],
  },
  {
    slug: "campushub-portal",
    name: "CampusHub Portal",
    category: "Web App",
    technologies: ["Next.js", "PHP", "MySQL"],
    description:
      "A student portal for a coaching institute to share study materials, track attendance, and publish exam results.",
    cloudinaryId: "", // e.g. "projects/campushub-portal"
    overview:
      "CampusHub gives students a single login to view their attendance, download study materials by subject, and check exam results, while staff upload content and mark attendance from an admin panel.",
    problem:
      "The institute shared materials over WhatsApp groups and announced results via printed notices, making it hard for students to find past materials or check their records.",
    solution:
      "We modernized the institute's existing PHP/MySQL backend and built a new Next.js portal on top of it, giving students organized access to materials, attendance, and results, with an admin panel for staff to manage content.",
    features: [
      "Student login with attendance and result history",
      "Subject-organized study material downloads",
      "Admin panel for uploading materials and marking attendance",
      "Built on the institute's existing PHP/MySQL data",
    ],
    results: [
      { value: "500+", label: "Students onboarded" },
      { value: "70%", label: "Drop in WhatsApp queries" },
      { value: "1", label: "Unified login for all materials" },
    ],
  },
  {
    slug: "pulsefit-membership",
    name: "PulseFit Membership App",
    category: "Mobile App",
    technologies: ["React Native", "Spring Boot", "MySQL"],
    description:
      "A membership management app for a gym chain, letting members book classes, track check-ins, and manage subscriptions.",
    cloudinaryId: "", // e.g. "projects/pulsefit-membership"
    overview:
      "PulseFit is a React Native app where gym members view their membership status, book group classes, and check in via QR code, while gym staff manage class schedules and membership renewals from a web admin panel.",
    problem:
      "The gym chain managed memberships on paper and class bookings via a shared notebook at the front desk, leading to overbooked classes and no easy way for members to check their membership status.",
    solution:
      "We built a React Native app for members (class booking, QR check-in, membership status) backed by a Spring Boot API and MySQL database, plus a web admin panel for staff to manage classes, capacity limits, and renewals.",
    features: [
      "Class booking with capacity limits and waitlists",
      "QR code check-in at the front desk",
      "Membership status and renewal reminders",
      "Admin panel for class schedules and member management",
    ],
    results: [
      { value: "3", label: "Gym locations using the app" },
      { value: "90%", label: "Classes booked via app" },
      { value: "0", label: "Overbooked classes since launch" },
    ],
  },
];
