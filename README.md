# Lexical Software

Marketing + portfolio website for Lexical Software, built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
src/
  app/                  Routes (App Router)
    page.tsx            Home
    about/              About Us
    services/           Services
    portfolio/          Portfolio (list + [slug] detail)
    team/               Team (list + [slug] skills detail)
    testimonials/       Testimonials
    blog/               Blog (list + [slug] detail)
    faq/                FAQ
    contact/            Contact (form + server action)
  components/
    layout/             Navbar, Footer
    sections/           Home page sections (Hero, SystemDiagram, etc.)
    shared/             Reusable cards (Project, Team, Testimonial)
    ui/                 Primitives (Section, buttons, headings)
  data/                 All site content (services, projects, team, etc.)
  lib/                  Utilities (cn, icon map)
```

## Content

All editable content lives in `src/data/*.ts`:

- `services.ts` — the 9 services, features, pricing
- `projects.ts` — portfolio projects (currently placeholders, update with real projects)
- `team.ts` — team members and skill ratings
- `testimonials.ts` — client testimonials (placeholders)
- `blog.ts` — blog posts (placeholders)
- `faq.ts` — FAQ entries (includes post-delivery maintenance, bug fixes, source code ownership, NDA, payment terms)
- `process.ts` — "How We Work" steps shown on the home page
- `site.ts` — nav links, contact info, social links, availability badge status (`availability.status`: "accepting" | "limited" | "booked", plus optional `bookedUntil`)

Replace placeholder entries with real content, including images (place in `public/images/`).

## Team resumes

Add each team member's resume PDF to `public/resumes/` matching the
`resumeUrl` in `src/data/team.ts` (e.g. `ayush-gupta.pdf`). A download
button appears on each team member's profile page when `resumeUrl` is set.

## Testimonial submissions

The Testimonials page includes a "Share your experience" form
(`src/components/shared/TestimonialForm.tsx`). It currently shows a
"pending approval" message on submit with no backend wiring \u2014 connect it
to a database, spreadsheet, or email (e.g. via a server action similar to
the contact form) when ready to collect real submissions.

## Spam protection

The contact form includes two lightweight, no-account-needed defenses:

- **Honeypot field** \u2014 a hidden `website` input. Real users never see or
  fill it; bots that auto-fill every field trip it, and their submission is
  silently discarded (the form still shows a success message so the bot
  doesn't learn it was caught).
- **Math captcha** \u2014 a simple "what is X + Y?" challenge, generated
  server-side and verified on submit (`src/lib/captcha.ts`). A fresh
  challenge is fetched on page load and after any failed submission. Set
  `CAPTCHA_SECRET` in production to a random string (see `.env.example`).

## Multi-step contact form

The contact form is now a 4-step flow: Project Type \u2192 Budget \u2192
Description \u2192 Contact Info (with the captcha and submit button on the
final step). Budget ranges are defined inline in
`src/app/contact/ContactForm.tsx` (`budgetRanges`) \u2014 edit as needed. The
selected budget is included in the email sent via Resend.

Step 4 (Contact Info) also collects:

- **Phone number** (required)
- **Secondary phone number** (optional)
- **Company / organization** (optional)
- **Preferred contact time** (dropdown, defined in `contactTimes`)
- **How did you hear about us** (dropdown, defined in `referralSources`)

All of these are included in the notification email sent to
`CONTACT_TO_EMAIL`. Edit the `contactTimes` and `referralSources` arrays in
`ContactForm.tsx` to change the dropdown options.

## Images via Cloudinary

Project screenshots, team photos, and blog post images are loaded from
Cloudinary via `src/lib/cloudinary.ts` and the `RemoteImage` /
`Avatar` components.

1. Sign up at https://cloudinary.com and find your **cloud name** in the
   dashboard.
2. Set `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` in `.env.local`.
3. Upload images to your Cloudinary media library and note their **public
   ID** (e.g. `projects/lexical-dashboard`, `team/ayush-gupta`,
   `blog/why-we-default-to-nextjs`).
4. Set the corresponding `cloudinaryId` field in `src/data/projects.ts`,
   `src/data/team.ts`, or `src/data/blog.ts`.

Until `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` is set (or a given item's
`cloudinaryId` is empty), `RemoteImage` and `Avatar` render styled
placeholders (category label / initials) so the layout never breaks.

## Featured projects

Set `featured: true` on a project in `src/data/projects.ts` to show an
amber "Featured" badge and a highlighted border on its portfolio card.

## Per-page Open Graph images

- `src/app/opengraph-image.tsx` \u2014 default OG image for the whole site.
- `src/app/blog/[slug]/opengraph-image.tsx` \u2014 generates a unique OG image
  per blog post using its title and category, so shared blog links look
  distinct on social platforms.

## Animations

- **Scroll-reveal** (`src/components/shared/Reveal.tsx`) \u2014 wraps section
  content in a fade/slide-in effect triggered via `IntersectionObserver`
  when scrolled into view. Applied across the home page and all major
  pages (About, Services, Portfolio, Team, Testimonials, Blog, FAQ,
  Contact). Supports `direction` (`up` | `down` | `left` | `right` | `none`)
  and `delay` (ms) props for staggered grids. Respects
  `prefers-reduced-motion`.
- **Page transitions** (`src/components/shared/PageTransition.tsx`) \u2014
  uses GSAP to fade/slide each page in on navigation. Wrapped around
  `{children}` in the root layout. Also respects
  `prefers-reduced-motion`.
- Existing animations (hero float, stats count-up, reading progress bar,
  pulsing status dots) are unchanged.

## Branding (logo & team photos)

- The Lexical Software logo is at `public/images/logo/lexical-logo.jpeg`,
  used in the navbar, footer, and as the site favicon (`src/app/icon.jpeg`).
- Ayush Gupta's photo is at `public/images/team/ayush-gupta.jpeg` and is
  wired up via `localImage` in `src/data/team.ts`.
- To add more local photos: drop the image into `public/images/team/`
  and set `localImage: "/images/team/<filename>"` on that team member in
  `src/data/team.ts`. `Avatar` prefers `localImage` over `cloudinaryId`.
- Nikhil Singh (UI/UX Designer) has been added to the team \u2014 update his
  bio, skills, social links, and photo as needed.

## Careers page

`/careers` lists open roles from `src/data/careers.ts` (`jobOpenings`).

- **Empty array** \u2014 shows a "no open roles right now" message and a
  general application form.
- **With roles** \u2014 each job is a card linking to `/careers/[slug]`, which
  shows responsibilities, requirements, nice-to-haves, and an application
  form pre-filled with that role.
- The application form (`ApplicationForm.tsx`) uses the same honeypot +
  math captcha pattern as the contact form, and sends submissions via
  Resend to `CAREERS_TO_EMAIL` (falls back to `CONTACT_TO_EMAIL` if unset).
  Applicants also get a confirmation email.
- To add a role: add an entry to `jobOpenings` in `src/data/careers.ts`
  with a unique `slug`. It's automatically added to the careers listing,
  detail pages, sitemap, and the application form's role dropdown.

## Recent changes (this revision)

- **Footer**: "Navigate" links now show icons (matching the navbar), plus
  standalone "Testimonials" and "Contact Us" links. "Services" now lists
  all services from `src/data/services.ts` with a small orange dot before
  each, plus an FAQ link.
- **Navbar**: "Testimonials" removed from the main nav links (still
  reachable via the footer).
- **Homepage**: testimonials section now shows only the first 3, with a
  "View All Testimonials" button linking to `/testimonials`.
- **Careers form**: resets (clears all fields and gets a fresh captcha)
  after a successful submission.
- **Contact form**: after a successful submission, the form is replaced
  with a success panel showing the Lexical Software logo and the message
  "Thanks! We'll get back to you within one business day." plus "Team
  Lexical Software".
- **Hero**: "Elevate Your Vision" now uses the orange/amber gradient
  treatment (previously plain text).

## Previous changes

- **Navbar**: "Contact Us" nav link replaced with "Careers" (linking to
  `/careers`). The separate "Contact Us" CTA button remains.
- **Careers**: `jobOpenings` in `src/data/careers.ts` is now empty by
  default \u2014 the page shows the "No open roles right now" state. A new
  `applicationRoles` array provides the role dropdown options on the
  application form independently of `jobOpenings`, so you can offer more
  roles to apply for than are formally listed. The careers page now
  includes a search bar (`VacancySearch.tsx`) that filters open roles by
  title, department, location, or type \u2014 ready for when roles are added.
- **Email sign-offs**: contact and careers confirmation emails now sign
  off as "Team Lexical Software".

## Previous changes

- **Navbar**: each nav item now has an icon; the CTA button reads "Contact
  Us" (was "Get a Quote") and links to `/contact`.
- **Team page**: cards are no longer clickable (no `/team/[slug]` detail
  pages). Each card shows the member's tech stack as pills, an email
  (with mailto + copy button), and LinkedIn \u2014 GitHub links removed. Add
  `email` to each entry in `src/data/team.ts`.
- **Hero**: the 50+/Tech Stacks/Support stat row was removed. "24/7
  Support" now appears as a 5th item in the homepage stats counter
  section.
- **Services**: "JS Development" replaced with "App Development" (React
  Native / Expo mobile apps).
- **System diagram**: no longer has a horizontal scrollbar; scales to fit
  its container on all screen sizes.
- **FAQ**: expanded with questions about app development, communication,
  time zones, refunds, design-from-scratch, billing models, and hosting.
- **How We Work**: all 5 step cards are now equal height regardless of
  text length.
- **Tech stack diagram**: expanded with more technologies and a new
  "Mobile & Design" layer (React Native, Expo, Figma, Framer Motion).
- **Portfolio**: project cards no longer show GitHub/Live Demo links \u2014
  each links to its case study via "View Case Study". The project detail
  page's header CTA now says "Discuss a Similar Project" and links to
  `/contact`. `src/data/projects.ts` now has 8 projects across Web App,
  SaaS, E-Commerce, Dashboard, Mobile App, and API/Backend categories.
- **Testimonials**: the "share your experience" submission form was
  removed; `src/data/testimonials.ts` now has 10 static testimonials.
- **Blog**: expanded to 6 posts with full multi-paragraph content
  (`src/data/blog.ts`).
- **Careers**: confirmation messages now reflect whether there are
  currently open roles.
- **Branding**: logo badge uses a fixed dark background in both themes so
  the logo image (which has a dark background) looks correct regardless
  of site theme.

## Additional features

- **Dark / light theme toggle** \u2014 defaults to the dark terminal theme; toggle in the navbar (desktop and mobile) persists via `localStorage`. Theme tokens are defined as CSS variables in `globals.css` (`:root`/`.dark` and `.light`).
- **Blog search** \u2014 `/blog` includes a text search alongside category filters.
- **Copy-to-clipboard** \u2014 `CopyButton` component next to email/phone in the footer and Contact page.
- **Reading progress bar** \u2014 thin progress indicator at the top of blog post pages (`/blog/[slug]`).
- **Tech stack diagram** \u2014 `TechStackDiagram` component on the About page, showing a layered Frontend / Backend / Data / Infrastructure view.
- **Pre-filled contact form** \u2014 "Discuss this service" links on `/services` go to `/contact?service=<Service Name>`, which pre-selects the matching Project Type.
- **Project result stat cards** \u2014 each portfolio project's `results` field is now `{ value, label }[]`, rendered as stat cards on the project detail page. Update with real metrics in `src/data/projects.ts`.
- **Privacy Policy page** \u2014 `/privacy`, linked from the footer and included in the sitemap. No analytics are wired up; update this page if you add any.

## Contact form (email delivery via Resend)

The contact form (`src/app/contact/actions.ts`) sends submissions to your
inbox using [Resend](https://resend.com). Setup:

1. **Install the dependency** (already in `package.json`):
   ```bash
   npm install
   ```

2. **Create a Resend account** at https://resend.com and grab an API key
   from the dashboard.

3. **Copy `.env.example` to `.env.local`** and fill in the values:
   ```bash
   cp .env.example .env.local
   ```
   - `RESEND_API_KEY` \u2014 your API key
   - `CONTACT_TO_EMAIL` \u2014 the inbox that should receive inquiries (e.g.
     `hello@lexicalsoftware.dev`)
   - `CONTACT_FROM_EMAIL` \u2014 the "from" address shown on the email

4. **Domain verification (recommended, but optional to start)**:
   - Without verifying a domain, `CONTACT_FROM_EMAIL` must use Resend's
     shared domain, e.g. `Lexical Software <onboarding@resend.dev>`. This
     works immediately and emails will still arrive in your inbox \u2014 the
     "from" address just won't be `@lexicalsoftware.dev`.
   - To send from your own domain (e.g. `noreply@lexicalsoftware.dev`), go
     to **Domains** in the Resend dashboard, add `lexicalsoftware.dev`, and
     add the SPF/DKIM DNS records they provide. Verification usually takes
     a few minutes to a few hours depending on your DNS provider. Once
     verified, update `CONTACT_FROM_EMAIL` accordingly.

5. **Deploying**: add the same environment variables (`RESEND_API_KEY`,
   `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`) in your hosting provider's
   dashboard (e.g. Vercel \u2192 Project Settings \u2192 Environment Variables).

**How it works:** when someone submits the form, an email is sent to
`CONTACT_TO_EMAIL` with the submitter's name, email, project type, and
message. The email's "Reply-To" is set to the submitter's address, so you
can reply directly from your inbox. If `RESEND_API_KEY` is missing or the
send fails, the form shows an error message asking the user to email you
directly, and the submission details are logged server-side so you don't
lose the inquiry.

## Images

The project is configured (in `next.config.mjs`) to allow remote images from
Cloudinary and Unsplash. Update `remotePatterns` if you use a different host.

## Animation

`gsap` is included as a dependency for any scroll-triggered or page-load
animations you want to layer on top of the existing CSS animations
(`animate-float`, `animate-pulse-slow`, `animate-dash`).

## Design tokens

Defined in `tailwind.config.ts`:

- Colors: `base`, `panel`, `panel-border`, `lexical.orange` (#FF6B1A), `lexical.amber` (#FFB627), `status.green/red/yellow`, `ink` (text tones)
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (mono/code labels)
