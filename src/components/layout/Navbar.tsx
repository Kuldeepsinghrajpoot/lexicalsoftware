"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import { navIconMap } from "@/lib/icons";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="will-fade-up fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-2xl border bg-panel/85 px-6 py-3.5 shadow-sm backdrop-blur-md transition-all duration-300",
          scrolled
            ? "border-panel-border shadow-md"
            : "border-panel-border/60 shadow-sm"
        )}
      >
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative h-11 w-11 overflow-hidden rounded-xl shadow-md shadow-blue-500/20 ring-1 ring-panel-border transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
            <Image
              src="/images/logo/lexical-mark.jpg"
              alt="Lexical Software logo"
              fill
              className="object-cover"
              priority
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

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            const Icon = navIconMap[link.icon];
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "link-underline flex items-center gap-1.5 text-sm transition-colors duration-200",
                    isActive
                      ? "font-semibold text-lexical-orange"
                      : "font-medium text-ink-muted hover:text-lexical-orange"
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden items-center lg:flex">
          <Link
            href="/contact"
            className="rounded-xl bg-lexical-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md hover:brightness-105 active:scale-[0.98]"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl border border-panel-border bg-base p-2 text-ink transition-colors hover:border-lexical-orange/50"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-panel-border bg-panel/95 px-6 pb-6 pt-2 shadow-lg backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              const Icon = navIconMap[link.icon];
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-2.5 rounded-xl px-3 py-3 text-sm font-medium",
                      isActive
                        ? "bg-lexical-orange/10 text-lexical-orange"
                        : "text-ink hover:bg-base"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            className="mt-4 block rounded-xl bg-lexical-gradient px-5 py-3 text-center text-sm font-semibold text-white shadow-sm"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
