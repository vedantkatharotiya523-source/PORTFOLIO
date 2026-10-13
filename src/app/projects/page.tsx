import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProjectsFilterView } from "@/components/projects/ProjectsFilterView";
import { Badge } from "@/components/ui/Badge";
import { profileData } from "@/data/profile";
import { geoData } from "@/data/geo";

export const metadata: Metadata = constructMetadata({
  title: `Engineering Projects & Case Studies | ${profileData.name}`,
  description:
    "Explore 7 production case studies: AI-powered ATS with Twilio voice screening, multi-tenant CRM, campaign studio, and scrapers.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-20 w-full">
      <Breadcrumbs items={[{ label: "Projects", href: "/projects" }]} />

      <div className="mt-4 mb-10">
        <Badge variant="accent" size="sm" className="mb-3">
          Case Studies & Architectures
        </Badge>
        <h1 className="text-headline-section font-bold tracking-tight text-[var(--text)]">
          Production Web Applications & AI Systems
        </h1>

        <div className="mt-4 p-5 rounded-2xl border border-[rgba(124,92,255,0.25)] bg-[var(--surface)]/80 backdrop-blur-sm text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          <p className="m-0">
            <strong className="text-[var(--text)]">Direct Answer: What does an AI-powered MERN developer build?</strong>{" "}
            {geoData.positioningSentence} Each project below details technical problems,
            architectural solutions, verifiable metrics, and complete technology stacks.
          </p>
        </div>
      </div>

      <ProjectsFilterView />
    </div>
  );
}
