import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import HowWeWork from "@/components/sections/HowWeWork";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import TeamPreview from "@/components/sections/TeamPreview";
import ClientTestimonials from "@/components/sections/ClientTestimonials";
import StatsCounter from "@/components/sections/StatsCounter";
import CallToAction from "@/components/sections/CallToAction";
import Reveal from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Lexical Software | Website & App Development Studio — India",
  description:
    "Lexical Software builds professional websites, mobile apps, and web applications for businesses across India. Fast delivery, transparent pricing, based in Gurugram. Get a free scope estimate today.",
  keywords: [
    "website development India",
    "app development India",
    "website banana hai",
    "mobile app banana hai",
    "website banwana hai",
    "professional website India",
    "web developer India",
    "React developer India",
    "Next.js developer India",
    "affordable web development India",
    "website development Gurugram",
    "startup website India",
  ],
  openGraph: {
    title: "Lexical Software | Website & App Development Studio",
    description:
      "We build professional websites and apps for businesses across India. Fast, affordable, and reliable.",
    url: "https://lexicalsoftware.in",
  },
  alternates: {
    canonical: "https://lexicalsoftware.in",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reveal>
        <StatsCounter />
      </Reveal>
      <Reveal>
        <AboutPreview />
      </Reveal>
      <Reveal>
        <ServicesPreview />
      </Reveal>
      <Reveal>
        <HowWeWork />
      </Reveal>
      <Reveal>
        <FeaturedProjects />
      </Reveal>
      <Reveal>
        <TeamPreview />
      </Reveal>
      <Reveal>
        <ClientTestimonials />
      </Reveal>
      <Reveal>
        <CallToAction />
      </Reveal>
    </>
  );
}