"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { ProjectCardProps } from "@/types";

export function ProjectCard({
  project,
  featuredLayout = false,
  className,
}: ProjectCardProps) {
  return (
    <Card
      spotlight
      glow
      className={`group flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        featuredLayout ? "md:grid md:grid-cols-12 md:gap-8 p-6 sm:p-8" : "p-6"
      } ${className || ""}`}
    >
      <div className={featuredLayout ? "md:col-span-7 flex flex-col justify-between" : "flex flex-col"}>
        <div>
          {/* Header & Category */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <Badge variant="accent" size="sm">
              {project.category}
            </Badge>
            {project.featured && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#7C5CFF]">
                <Sparkles className="w-3 h-3" />
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text)] group-hover:text-[#7C5CFF] transition-colors">
            <Link href={`/projects/${project.slug}`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF] rounded-lg">
              {project.title}
            </Link>
          </h3>

          {/* Tagline */}
          <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
            {project.tagline}
          </p>

          {/* Key Metrics */}
          <div className="mt-5 grid grid-cols-2 gap-3 pt-4 border-t border-[var(--border)]">
            {project.metrics.slice(0, 2).map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xs text-[var(--text-muted)] font-mono">{metric.label}</span>
                <span className="text-base sm:text-lg font-bold text-[#7C5CFF]">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[var(--surface-hover)] text-[var(--text-muted)] border border-[var(--border)]"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[var(--surface-hover)] text-[var(--text-muted)]">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Right Column / Actions */}
      <div
        className={`${
          featuredLayout
            ? "md:col-span-5 flex flex-col justify-between mt-6 md:mt-0 pt-6 md:pt-0 md:border-l md:border-[var(--border)] md:pl-8 border-t border-[var(--border)]"
            : "mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between"
        }`}
      >
        <p className="text-xs text-[var(--text-muted)] hidden md:block leading-relaxed">
          {project.problem.length > 120
            ? `${project.problem.slice(0, 120)}...`
            : project.problem}
        </p>

        <div className="flex items-center gap-3 w-full justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text)] group-hover:text-[#7C5CFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF] rounded-lg py-1 px-1.5"
          >
            <span>View Architecture</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {project.links.find((l) => l.type === "demo") && (
            <Link
              href={project.links.find((l) => l.type === "demo")!.url}
              className="text-xs font-mono text-[#7C5CFF] hover:underline"
            >
              Demo
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
