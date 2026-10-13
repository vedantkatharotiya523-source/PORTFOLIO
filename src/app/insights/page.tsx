import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { insightsData } from "@/data/insights";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Calendar, Clock, Rss } from "lucide-react";
import { profileData } from "@/data/profile";

export const metadata: Metadata = constructMetadata({
  title: `Technical Insights & Engineering Architecture Articles | ${profileData.name}`,
  description:
    "Original technical deep dives on Twilio AI voice calling, LangGraph state machines, multi-tenant NestJS backends, and Puppeteer scrapers.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-24 w-full">
      <Breadcrumbs items={[{ label: "Insights", href: "/insights" }]} />

      {/* Header & Answer First */}
      <div className="mt-4 mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <Badge variant="accent" size="sm" className="mb-3">
            Engineering Knowledge Base
          </Badge>
          <h1 className="text-headline-section font-bold tracking-tight text-[var(--text)]">
            Technical Insights & Architectural Guides
          </h1>

          <div className="mt-4 p-5 rounded-2xl border border-[rgba(124,92,255,0.25)] bg-[var(--surface)]/80 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            <p className="m-0">
              <strong className="text-[var(--text)]">Direct Answer: What topics are covered here?</strong>{" "}
              Practical, production-tested blueprints for integrating Twilio AI voice calling,
              choosing between LangChain and LangGraph, enforcing tenant database isolation in NestJS,
              and scaling scraping clusters without bot detection.
            </p>
          </div>
        </div>

        <a
          href="/feed.xml"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-xs font-mono text-[var(--text)] hover:text-[#7C5CFF] hover:border-[#7C5CFF] transition-colors shrink-0"
        >
          <Rss className="w-4 h-4 text-amber-500" />
          <span>RSS Feed</span>
        </a>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {insightsData.map((post) => (
          <Card
            key={post.slug}
            spotlight
            glow
            className="p-6 sm:p-8 flex flex-col justify-between border-[var(--border)] group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <Badge variant="accent" size="sm">
                  {post.category}
                </Badge>
                <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-muted)]">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.datePublished}
                  </span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text)] group-hover:text-[#7C5CFF] transition-colors">
                <Link href={`/insights/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {post.excerpt}
              </p>

              {/* Direct Answer snippet */}
              <div className="mt-4 p-3 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] text-xs text-[var(--text-muted)] leading-snug">
                <strong className="text-[var(--text)]">Direct Takeaway:</strong> {post.answerSummary}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-hover)] text-[var(--text-muted)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/insights/${post.slug}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--text)] group-hover:text-[#7C5CFF] transition-colors"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
