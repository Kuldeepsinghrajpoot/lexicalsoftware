export interface BlogPost {
  slug: string;
  title: string;
  category: "Articles" | "Tutorials" | "Development Tips";
  excerpt: string;
  date: string;
  readTime: string;
  cloudinaryId?: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-we-default-to-nextjs",
    title: "Why We Default to Next.js for Client Projects",
    category: "Articles",
    excerpt:
      "A look at how the App Router, server components, and edge deployment shape the way we scope and build projects.",
    date: "2026-05-12",
    readTime: "5 min read",
    cloudinaryId: "", // e.g. "blog/why-we-default-to-nextjs"
    content: [
      "When a new project comes in, one of the first questions we answer internally is which framework to build on. For most web applications \u2014 marketing sites, dashboards, e-commerce storefronts \u2014 our default answer is Next.js, and it's worth explaining why.",
      "The biggest factor is the App Router and server components. We can fetch data directly inside components that run on the server, which means less client-side JavaScript, faster first loads, and simpler data-fetching code overall. For a typical dashboard page, this often cuts the amount of client-side code in half compared to a traditional single-page app.",
      "SEO is another big one, especially for marketing sites and storefronts. Server-rendered pages mean search engines see fully-formed HTML on first load, without needing to execute JavaScript to discover content. Combined with Next.js's built-in metadata and sitemap APIs, this saves us from bolting on separate SEO tooling.",
      "Deployment is simpler too. Whether we're deploying to Vercel or a self-hosted Node server, Next.js gives us one deployable unit that handles both the frontend and API routes \u2014 no separate backend service to stand up for most projects, which keeps infrastructure costs down for smaller clients.",
      "None of this means Next.js is always the right call. For projects that need a separate, independently-scalable backend \u2014 like the BillBox invoicing API we built \u2014 we'll reach for Spring Boot or a standalone Node service instead. But as a default starting point for client-facing web applications, Next.js consistently gives us the best balance of developer speed, performance, and long-term maintainability.",
    ],
  },
  {
    slug: "setting-up-ci-cd-for-spring-boot",
    title: "Setting Up CI/CD for a Spring Boot Microservice",
    category: "Tutorials",
    excerpt:
      "A step-by-step walkthrough of building a pipeline that tests, builds, and deploys a Java microservice on every push.",
    date: "2026-04-28",
    readTime: "8 min read",
    cloudinaryId: "", // e.g. "blog/spring-boot-ci-cd"
    content: [
      "One of the first things we set up on any Spring Boot project is a CI/CD pipeline \u2014 even before the first feature is built. Getting this right early means every change is tested and deployable from day one, instead of bolting on automation after the codebase has grown.",
      "Step one is the test stage. On every push, we run `mvn test` (or `./gradlew test` for Gradle projects) inside a clean container, using Testcontainers to spin up a real PostgreSQL instance for integration tests. This catches issues that mocked databases miss, like incorrect SQL or migration ordering problems.",
      "Step two is the build stage. We build a Docker image using a multi-stage Dockerfile: the first stage compiles the application with Maven, and the second stage copies only the resulting JAR into a minimal JRE base image. This keeps production images small \u2014 typically under 200MB \u2014 and avoids shipping build tools to production.",
      "Step three is pushing the image to a container registry (we typically use AWS ECR) tagged with the Git commit SHA, so every deployed version is traceable back to exact source code.",
      "Step four is deployment. For most client projects, this means updating an ECS service or a Docker Compose stack on a VPS to pull the new image and restart with zero downtime using rolling deployments. We always include a health check endpoint (`/actuator/health`) so the orchestrator knows when the new version is ready to receive traffic before the old one is stopped.",
      "The whole pipeline, from push to live deployment, typically runs in 4-6 minutes for a mid-sized service. The upfront investment \u2014 usually half a day of setup \u2014 pays off quickly: it means every team member can ship confidently, and rolling back a bad deploy is just a matter of redeploying the previous image tag.",
    ],
  },
  {
    slug: "database-indexing-tips",
    title: "Five Indexing Mistakes That Slow Down PostgreSQL",
    category: "Development Tips",
    excerpt:
      "Common indexing pitfalls we see in client codebases, and how to fix them without downtime.",
    date: "2026-04-10",
    readTime: "4 min read",
    cloudinaryId: "", // e.g. "blog/postgres-indexing-tips"
    content: [
      "When we audit an existing PostgreSQL database \u2014 usually because a client's app has gotten slower as it's grown \u2014 we see the same handful of indexing mistakes again and again. Here are the five most common ones, and how to fix them.",
      "1. Missing indexes on foreign keys. PostgreSQL does not automatically index foreign key columns. If you're frequently joining or filtering on a foreign key (like `orders.customer_id`), and there's no index on it, every one of those queries does a full table scan. This is the single most common issue we find, and usually the easiest to fix with a simple `CREATE INDEX CONCURRENTLY`.",
      "2. Indexing columns that are rarely queried. The opposite problem: indexes aren't free \u2014 they slow down writes and take up disk space. We've seen tables with a dozen indexes, half of which are never used by any query. Running `pg_stat_user_indexes` periodically helps identify and remove indexes with zero scans.",
      "3. Not using composite indexes for multi-column filters. If a query filters on `status = 'active' AND created_at > X`, a composite index on `(status, created_at)` is far more effective than two separate single-column indexes. PostgreSQL can only efficiently use one index per table per query in most cases.",
      "4. Forgetting `CONCURRENTLY` when adding indexes to live tables. Running `CREATE INDEX` without `CONCURRENTLY` locks the table for writes until the index is built \u2014 on a large table, that can mean minutes of downtime. `CREATE INDEX CONCURRENTLY` takes longer but doesn't block other operations.",
      "5. Not re-indexing after bulk deletes. After large delete operations, indexes can become bloated with dead tuples, making them larger and slower than necessary. A `REINDEX CONCURRENTLY` (PostgreSQL 12+) reclaims this space without locking the table.",
      "Most of these fixes can be applied without downtime and often produce immediate, measurable improvements \u2014 we've seen query times drop from several seconds to under 50ms just from adding a couple of missing foreign key indexes.",
    ],
  },
  {
    slug: "react-native-offline-first-apps",
    title: "Building Offline-First Mobile Apps with React Native",
    category: "Articles",
    excerpt:
      "How we design React Native apps that keep working when the network doesn't \u2014 lessons from building a delivery driver app.",
    date: "2026-05-30",
    readTime: "6 min read",
    cloudinaryId: "", // e.g. "blog/react-native-offline-first"
    content: [
      "When we built RouteWise, a route management app for delivery drivers, the single most important requirement wasn't a feature \u2014 it was resilience. Drivers work in areas with patchy or no signal, and the app needs to keep working regardless.",
      "The core principle of offline-first design is treating the local device as the source of truth, with the server as something to sync with rather than depend on for every action. In RouteWise, when a driver marks a delivery complete, that update is written immediately to a local SQLite database and reflected in the UI instantly \u2014 there's no spinner waiting for a server response.",
      "A background sync queue then handles pushing these changes to the server whenever connectivity is available. We used a simple queue table: each local change gets a row with a status (`pending`, `syncing`, `synced`, `failed`), and a background task periodically attempts to sync pending items, retrying with exponential backoff on failure.",
      "Conflict handling matters too. If a driver's route is reassigned by dispatch while they're offline, we don't want their local state to silently overwrite the server's. We used a last-write-wins strategy for most fields, but for route assignments specifically, the server's version always takes precedence \u2014 with a notification to the driver if their local view was outdated.",
      "Photo and signature capture for proof-of-delivery needed special handling too: images are saved to local device storage immediately and uploaded in the background, with the local file path stored until the upload succeeds and the image is replaced with its remote URL.",
      "The result is an app that feels instant regardless of connectivity, and drivers never lose work even after hours offline. The tradeoff is more complexity in the sync layer \u2014 but for apps used in the field, it's complexity that's worth taking on upfront rather than discovering in production.",
    ],
  },
  {
    slug: "choosing-between-rest-and-graphql",
    title: "REST vs GraphQL: How We Decide for Client Projects",
    category: "Articles",
    excerpt:
      "Neither is universally better \u2014 here's the practical framework we use when scoping a new API.",
    date: "2026-06-08",
    readTime: "5 min read",
    cloudinaryId: "", // e.g. "blog/rest-vs-graphql"
    content: [
      "Clients sometimes come to us having already decided they want a GraphQL API, often because they've read it's \"more modern\" than REST. Our job is usually to have a quick conversation about what the API actually needs to do \u2014 because the right choice depends heavily on the shape of the application, not on trends.",
      "REST tends to be the better fit when an API has a relatively small, well-defined set of resources and the clients consuming it (web app, mobile app, third-party integrations) have broadly similar data needs. It's simpler to cache with standard HTTP caching, easier to document with OpenAPI, and most developers can pick it up immediately without learning a new query language.",
      "GraphQL earns its complexity when you have multiple frontends with very different data needs from the same backend \u2014 for example, a mobile app that needs a lean payload for a list view, and a web dashboard that needs deeply nested data for the same resources. GraphQL lets each client request exactly what it needs in one round trip, instead of either over-fetching with REST or maintaining multiple REST endpoints for different views.",
      "For most of our client projects \u2014 a web app plus maybe one mobile app \u2014 REST with well-designed endpoints (including some that return slightly nested data for common views) covers the need without the added operational complexity of GraphQL: schema management, resolver performance (the N+1 query problem is a common pitfall), and more complex caching.",
      "The exception is projects where we know from the start there will be several different clients with very different needs \u2014 in those cases, GraphQL's flexibility pays for its complexity. But \"flexibility for the future\" alone isn't a strong enough reason on its own; we'd rather ship a simple REST API now and migrate specific high-need endpoints to GraphQL later if the need actually materializes, than build GraphQL infrastructure for a need that might never come.",
    ],
  },
  {
    slug: "deploying-nextjs-on-aws-vs-vercel",
    title: "Deploying Next.js: AWS vs Vercel, and How We Choose",
    category: "Development Tips",
    excerpt:
      "Vercel is the easiest option, but not always the right one for client infrastructure. Here's how we weigh the tradeoffs.",
    date: "2026-06-12",
    readTime: "5 min read",
    cloudinaryId: "", // e.g. "blog/nextjs-aws-vs-vercel"
    content: [
      "Next.js is built by Vercel, and deploying there is genuinely the path of least resistance \u2014 push to a Git branch, and it's live with preview deployments, edge functions, and image optimization configured automatically. For many client projects, especially smaller ones, this is exactly what we recommend.",
      "But there are a few situations where we deploy to AWS instead. The most common is when a client already has infrastructure on AWS \u2014 a database, other services, internal networking \u2014 and keeping the Next.js app in the same VPC simplifies networking, reduces latency between the app and database, and consolidates billing and access control under one account the client already manages.",
      "Cost predictability is another factor. Vercel's pricing scales with usage (bandwidth, function executions, image optimization), which is great for unpredictable traffic but can become a meaningful line item for high-traffic applications. Running on AWS via ECS or EC2 with a fixed-size deployment gives more predictable monthly costs, at the expense of needing to manage scaling ourselves.",
      "For AWS deployments, our typical setup is: a Docker image built via the CI/CD pipeline, running on ECS Fargate behind an Application Load Balancer, with CloudFront for static assets and image optimization handled via a custom loader pointing at S3 and CloudFront. It's more setup than Vercel \u2014 usually a day of infrastructure work \u2014 but gives full control over networking, scaling rules, and costs.",
      "Our rule of thumb: if the client has no existing infrastructure and traffic is moderate, Vercel gets the project live fastest with the least ongoing maintenance. If the client has existing AWS infrastructure, strict data residency requirements, or predictable high traffic where Vercel's usage-based pricing becomes expensive, we deploy on AWS instead. Either way, the Next.js application code itself doesn't need to change \u2014 it's purely an infrastructure decision we make based on the client's existing setup and growth expectations.",
    ],
  },
];

export const blogCategories = [
  "All",
  "Articles",
  "Tutorials",
  "Development Tips",
] as const;
