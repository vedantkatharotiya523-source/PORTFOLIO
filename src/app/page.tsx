import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { HeroSection } from "@/components/sections/HeroSection";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { FactsAtAGlance } from "@/components/sections/FactsAtAGlance";
import { StatsSection } from "@/components/sections/StatsSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { ServicesGridSection } from "@/components/sections/ServicesGridSection";
import { AiFlowHighlight } from "@/components/sections/AiFlowHighlight";
import { ProcessTimelineSection } from "@/components/sections/ProcessTimelineSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { geoData } from "@/data/geo";
import { profileData } from "@/data/profile";

export const metadata: Metadata = constructMetadata({
  title: `${profileData.name} | ${geoData.role}`,
  description: geoData.positioningSentence,
  path: "/",
});

export default function HomePage() {
  return (
    <div className="flex flex-col w-full pb-16">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Infinite Tech Marquee */}
      <TechMarquee />

      {/* 3. GEO Facts at a Glance (Definition List) */}
      <FactsAtAGlance />

      {/* 4. Stats Counters */}
      <StatsSection />

      {/* 5. Featured Projects Showcase */}
      <FeaturedProjectsSection />

      {/* 6. Services Grid */}
      <ServicesGridSection />

      {/* 7. AI Highlight Block (LangGraph cyclical flow) */}
      <AiFlowHighlight />

      {/* 8. Process Timeline (5 stages) */}
      <ProcessTimelineSection />

      {/* 9. Final CTA Banner */}
      <CtaBanner />
    </div>
  );
}
