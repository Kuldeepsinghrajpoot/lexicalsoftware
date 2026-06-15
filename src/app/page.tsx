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
