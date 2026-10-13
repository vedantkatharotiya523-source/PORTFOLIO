import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
import { insightsData } from "@/data/insights";
import { projectsData } from "@/data/projects";
import { profileData } from "@/data/profile";
import { constructMetadata, getArticleJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { InsightPageProps } from "@/types";

export async function generateStaticParams() {
  return insightsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = insightsData.find((p) => p.slug === slug);

  if (!post) {
    return constructMetadata({
      title: "Article Not Found",
      description: "The requested architectural article could not be found.",
    });
  }

  return constructMetadata({
    title: `${post.title} | Technical Guide`,
    description: post.excerpt,
    path: `/insights/${post.slug}`,
    type: "article",
  });
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const post = insightsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedProjects = projectsData.filter((proj) =>
    post.relatedProjectSlugs.includes(proj.slug)
  );

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-6 pb-24 w-full break-words overflow-x-hidden">
      <JsonLd schema={getArticleJsonLd(post)} />

      <Breadcrumbs
        items={[
          { label: "Insights", href: "/insights" },
          { label: post.title, href: `/insights/${post.slug}` },
        ]}
      />

      {/* Back button */}
      <div className="mt-2 mb-6">
        <Link
          href="/insights"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)] hover:text-[#7C5CFF] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge variant="accent" size="sm">
            {post.category}
          </Badge>
          <span className="text-xs font-mono text-[var(--text-muted)]">
            Verified Architectural Guide
          </span>
        </div>

        <h1 className="text-headline-section font-extrabold tracking-tight text-[var(--text)]">
          {post.title}
        </h1>

        {/* Metadata bar */}
        <div className="mt-4 pt-4 border-t border-[var(--border)] flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-muted)]">
          <span className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#7C5CFF]" />
            <span>Author: {profileData.name}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#7C5CFF]" />
            <span>Published: {post.datePublished}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#7C5CFF]" />
            <span>{post.readTime}</span>
          </span>
          <span className="text-[var(--text-muted)]">
            Last updated: {post.dateModified}
          </span>
        </div>

        {/* Answer-First Block (AEO / GEO) */}
        <div className="mt-6 p-5 rounded-2xl border border-[rgba(124,92,255,0.25)] bg-[var(--surface)] text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          <p className="m-0">
            <strong className="text-[var(--text)]">Answer-First Summary:</strong>{" "}
            {post.answerSummary}
          </p>
        </div>
      </header>

      {/* Article Body Content */}
      <div className="prose prose-invert max-w-none text-sm sm:text-base leading-relaxed text-[var(--text)] space-y-6">
        {post.content.split("\n\n").map((paragraph, idx) => {
          const trimmed = paragraph.trim();
          if (!trimmed) return null;

          if (trimmed.startsWith("### ")) {
            const headingText = trimmed.replace("### ", "");
            const headingId = headingText
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "");

            return (
              <h2
                key={idx}
                id={headingId}
                className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text)] pt-6 scroll-mt-24 border-b border-[var(--border)] pb-2"
              >
                {headingText}
              </h2>
            );
          }

          if (trimmed.startsWith("#### ")) {
            const subText = trimmed.replace("#### ", "");
            return (
              <h3
                key={idx}
                className="text-lg font-bold tracking-tight text-[var(--text)] pt-4"
              >
                {subText}
              </h3>
            );
          }

          if (trimmed.startsWith("- ")) {
            const listItems = trimmed
              .split("\n")
              .map((line) => line.replace(/^- /, "").trim());

            return (
              <ul key={idx} className="space-y-2 list-disc pl-5 text-[var(--text-muted)]">
                {listItems.map((item, lIdx) => (
                  <li key={lIdx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            );
          }

          if (trimmed.startsWith("```")) {
            const codeLines = trimmed.replace(/^```[a-z]*\n/, "").replace(/```$/, "");
            return (
              <pre
                key={idx}
                className="p-4 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] font-mono text-xs overflow-x-auto text-[var(--text)] max-w-full"
              >
                <code>{codeLines}</code>
              </pre>
            );
          }

          if (trimmed.startsWith("|")) {
            const rows = trimmed.split("\n").filter((r) => !r.includes("---"));
            return (
              <div key={idx} className="overflow-x-auto w-full max-w-full my-6 rounded-xl border border-[var(--border)]">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <tbody>
                    {rows.map((row, rIdx) => {
                      const cells = row
                        .split("|")
                        .map((c) => c.trim())
                        .filter(Boolean);
                      if (rIdx === 0) {
                        return (
                          <tr key={rIdx} className="bg-[var(--surface-hover)] border-b border-[var(--border)]">
                            {cells.map((cell, cIdx) => (
                              <th key={cIdx} className="p-3 font-bold text-[var(--text)]">
                                {cell}
                              </th>
                            ))}
                          </tr>
                        );
                      }
                      return (
                        <tr key={rIdx} className="border-b border-[var(--border)] last:border-b-0">
                          {cells.map((cell, cIdx) => (
                            <td key={cIdx} className="p-3 text-[var(--text-muted)]">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          }

          return (
            <p key={idx} className="text-[var(--text)] leading-relaxed m-0 break-words">
              {trimmed}
            </p>
          );
        })}
      </div>

      {/* Tags */}
      <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-wrap items-center gap-2">
        <Tag className="w-4 h-4 text-[#7C5CFF]" />
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--surface-hover)] text-[var(--text-muted)] border border-[var(--border)]"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Related Projects Block */}
      {relatedProjects.length > 0 && (
        <section aria-labelledby="related-projects-heading" className="mt-14 pt-8 border-t border-[var(--border)]">
          <h2 id="related-projects-heading" className="text-xl font-bold text-[var(--text)] mb-6">
            Related Case Studies & Architectures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProjects.map((proj) => (
              <ProjectCard key={proj.slug} project={proj} />
            ))}
          </div>
        </section>
      )}

      {/* Next Article Navigation */}
      <footer className="mt-14 pt-8 border-t border-[var(--border)] flex items-center justify-between">
        <Link
          href="/insights"
          className="text-xs font-mono text-[var(--text-muted)] hover:text-[#7C5CFF]"
        >
          ← Back to All Articles
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7C5CFF] hover:underline"
        >
          <span>Discuss This Architecture with {profileData.name}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </footer>
    </article>
  );
}
