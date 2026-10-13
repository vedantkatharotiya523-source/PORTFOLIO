import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, ExternalLink, ShieldCheck } from "lucide-react";
import { projectsData } from "@/data/projects";
import { profileData } from "@/data/profile";
import { constructMetadata, getProjectJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { ProjectPageProps } from "@/types";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return constructMetadata({
      title: "Project Not Found",
      description: "The requested project case study could not be found.",
    });
  }

  return constructMetadata({
    title: `${project.title} | Case Study`,
    description: `${project.tagline} Built by ${profileData.name} using ${project.stack.slice(0, 4).join(", ")}.`,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const nextProject =
    projectsData[(projectIndex + 1) % projectsData.length];

  return (
    <article className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-24 w-full break-words overflow-x-hidden">
      <JsonLd schema={getProjectJsonLd(project)} />

      <Breadcrumbs
        items={[
          { label: "Projects", href: "/projects" },
          { label: project.title, href: `/projects/${project.slug}` },
        ]}
      />

      {/* Back button */}
      <div className="mt-2 mb-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)] hover:text-[#7C5CFF] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Project Header */}
      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="accent" size="sm">
            {project.category}
          </Badge>
          <span className="font-mono text-xs text-[var(--text-muted)]">
            Production Case Study · Verified Architecture
          </span>
        </div>

        <h1 className="text-headline-section font-extrabold tracking-tight text-[var(--text)]">
          {project.title}
        </h1>

        <p className="mt-3 text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed max-w-3xl">
          {project.tagline}
        </p>

        {/* Answer-first summary */}
        <div className="mt-5 p-5 rounded-2xl border border-[rgba(124,92,255,0.25)] bg-[var(--surface)]/80 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          <p className="m-0">
            <strong className="text-[var(--text)]">Executive Summary:</strong> {project.solution}{" "}
            Engineered with {project.stack.join(", ")}, achieving measurable outcomes across{" "}
            {project.metrics.map((m) => `${m.label} (${m.value})`).join(", ")}.
          </p>
        </div>
      </header>

      {/* Metrics Banner */}
      <section aria-labelledby="metrics-title" className="mb-14">
        <h2 id="metrics-title" className="sr-only">Project Metrics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {project.metrics.map((metric, idx) => (
            <Card key={idx} className="p-5 border-[var(--border)]">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                {metric.label}
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-[#7C5CFF] mt-1 block">
                {metric.value}
              </span>
            </Card>
          ))}
        </div>
      </section>

      {/* Problem & Solution Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
        <Card className="p-6 sm:p-8 border-[var(--border)] space-y-4">
          <div className="flex items-center gap-2 text-sm font-mono text-rose-500 uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>The Challenge / Problem</span>
          </div>
          <h2 className="text-xl font-bold text-[var(--text)]">
            What was broken or inefficient?
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            {project.problem}
          </p>
        </Card>

        <Card className="p-6 sm:p-8 border-[rgba(124,92,255,0.3)] bg-[rgba(124,92,255,0.04)] space-y-4">
          <div className="flex items-center gap-2 text-sm font-mono text-[#7C5CFF] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>The Engineered Solution</span>
          </div>
          <h2 className="text-xl font-bold text-[var(--text)]">
            How the architecture solved it
          </h2>
          <p className="text-sm sm:text-base text-[var(--text)] leading-relaxed">
            {project.solution}
          </p>
        </Card>
      </div>

      {/* Key Architectural Features */}
      <section aria-labelledby="features-title" className="mb-14">
        <h2 id="features-title" className="text-2xl font-bold tracking-tight text-[var(--text)] mb-6">
          Key Features & Implementation Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.features.map((feat, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]"
            >
              <CheckCircle2 className="w-5 h-5 text-[#7C5CFF] shrink-0 mt-0.5" />
              <p className="text-sm text-[var(--text)] m-0 leading-relaxed">
                {feat}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Full Technology Stack */}
      <section aria-labelledby="stack-title" className="mb-14">
        <h2 id="stack-title" className="text-2xl font-bold tracking-tight text-[var(--text)] mb-6">
          Technology Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-sm font-mono text-[var(--text)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* External Links / Demos */}
      {project.links.length > 0 && (
        <section aria-labelledby="links-title" className="mb-14">
          <h2 id="links-title" className="text-xl font-bold tracking-tight text-[var(--text)] mb-4">
            Artifacts & Demos
          </h2>
          <div className="flex flex-wrap gap-4">
            {project.links.map((link, idx) => (
              <Button
                key={idx}
                href={link.url}
                variant="outline"
                size="md"
                className="flex items-center gap-2 rounded-xl"
              >
                <span>{link.label}</span>
                <ExternalLink className="w-4 h-4" />
              </Button>
            ))}
          </div>
        </section>
      )}

      {/* Next Project Footer Link */}
      <footer className="pt-10 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Link
          href="/projects"
          className="text-xs font-mono text-[var(--text-muted)] hover:text-[#7C5CFF]"
        >
          ← Back to All Projects
        </Link>

        <Link
          href={`/projects/${nextProject.slug}`}
          className="group inline-flex items-center gap-2 text-left sm:text-right"
        >
          <div className="flex flex-col">
            <span className="text-[10px] font-mono uppercase text-[var(--text-muted)]">
              Next Case Study
            </span>
            <span className="text-sm font-bold text-[var(--text)] group-hover:text-[#7C5CFF] transition-colors">
              {nextProject.title}
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-[#7C5CFF] transition-transform group-hover:translate-x-1" />
        </Link>
      </footer>
    </article>
  );
}
