"use client";

import { ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedProjectsSection() {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <section
      aria-labelledby="featured-projects-title"
      className="max-w-6xl mx-auto px-4 sm:px-6 my-20"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <SectionHeading
          eyebrow="Proven Solutions"
          title="Featured Engineering Projects"
          description="Production-grade applicant tracking, multi-tenant CRM, campaign intelligence, and autonomous AI systems built with Next.js, NestJS, and PostgreSQL."
          className="mb-0"
        />

        <Button
          href="/projects"
          variant="outline"
          size="md"
          className="hidden md:inline-flex items-center gap-2 rounded-xl shrink-0"
        >
          <span>View All 7 Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Featured Projects Grid / Showcase */}
      <div className="flex flex-col gap-8">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.1} direction="up">
            <ProjectCard project={project} featuredLayout />
          </Reveal>
        ))}
      </div>

      <div className="mt-8 flex justify-center md:hidden">
        <Button
          href="/projects"
          variant="outline"
          size="lg"
          className="w-full flex items-center justify-center gap-2 rounded-xl"
        >
          <span>Browse All Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}
