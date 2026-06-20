import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, Star } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { navIconMap } from "@/lib/icons";
import CopyButton from "@/components/shared/CopyButton";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="group flex items-center gap-3">
              <span className="relative h-11 w-11 overflow-hidden rounded-xl shadow-md shadow-blue-500/20 ring-1 ring-panel-border transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo/lexical-mark.jpg"
                  alt="Lexical Software logo"
                  fill
                  className="object-cover"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold tracking-wider text-ink">
                  LEXICAL
                </span>
                <span className="mt-1 font-mono text-[9px] font-bold tracking-widest text-lexical-orange">
                  SOFTWARE
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-panel-border text-ink-muted transition-all duration-300 hover:-translate-y-1 hover:border-lexical-orange hover:text-lexical-orange hover:shadow-md hover:shadow-blue-500/20"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-panel-border text-ink-muted transition-all duration-300 hover:-translate-y-1 hover:border-lexical-orange hover:text-lexical-orange hover:shadow-md hover:shadow-blue-500/20"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-panel-border text-ink-muted transition-all duration-300 hover:-translate-y-1 hover:border-lexical-orange hover:text-lexical-orange hover:shadow-md hover:shadow-blue-500/20"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">
              Navigate
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => {
                const Icon = navIconMap[link.icon];
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-ink transition-all duration-200 hover:translate-x-1 hover:text-lexical-orange"
                    >
                      <Icon className="h-3.5 w-3.5 text-lexical-orange" />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/testimonials"
                  className="group flex items-center gap-2 text-sm text-ink transition-all duration-200 hover:translate-x-1 hover:text-lexical-orange"
                >
                  <Star className="h-3.5 w-3.5 text-lexical-orange" />
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 text-sm text-ink transition-all duration-200 hover:translate-x-1 hover:text-lexical-orange"
                >
                  <Mail className="h-3.5 w-3.5 text-lexical-orange" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="group flex items-center gap-2 text-sm text-ink transition-all duration-200 hover:translate-x-1 hover:text-lexical-orange"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lexical-orange" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/faq"
                  className="group flex items-center gap-2 text-sm text-ink transition-all duration-200 hover:translate-x-1 hover:text-lexical-orange"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lexical-orange" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-ink">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-lexical-orange" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-lexical-orange"
                >
                  {siteConfig.email}
                </a>
                <CopyButton value={siteConfig.email} label="email address" />
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-lexical-orange" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-lexical-orange"
                >
                  {siteConfig.phone}
                </a>
                <CopyButton value={siteConfig.phone} label="phone number" />
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lexical-orange" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <div className="flex items-center gap-4">
            <p className="font-mono text-xs text-ink-dim">
              &copy; {year} Lexical Software. All rights reserved.
            </p>
            <Link
              href="/privacy"
              className="font-mono text-xs text-ink-dim transition-colors hover:text-lexical-orange"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-panel-border bg-base px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-status-green animate-pulse-slow" />
            <span className="font-mono text-xs tracking-wide text-ink-muted">
              SYS ACTIVE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
