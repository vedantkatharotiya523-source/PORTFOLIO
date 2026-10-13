import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { profileData } from "@/data/profile";
import { geoData } from "@/data/geo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FactsAtAGlance } from "@/components/sections/FactsAtAGlance";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Download, CheckCircle, Terminal, Cpu, Award } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: `About ${profileData.name} | MERN Stack & AI Developer`,
  description: `Background, architecture principles, and technical values of ${profileData.name}, a MERN and AI-powered full-stack developer.`,
  path: "/about",
});

export default function AboutPage() {
  const values = [
    {
      title: "Clean Domain Modeling",
      description:
        "Every project begins with explicit domain typing and clear database boundaries. Zero messy ad-hoc schemas or leaky abstractions.",
    },
    {
      title: "Real Intelligence, Not Gimmicks",
      description:
        "AI is applied where it measurably accelerates workflows: autonomous phone screening, automated deduplication, and grounded RAG citations.",
    },
    {
      title: "Sub-Second Performance",
      description:
        "Fast server-side rendering, sub-1.2s conversational voice turnarounds, and database index tuning for continuous scalability.",
    },
    {
      title: "Rigorous Type Safety",
      description:
        "Strict TypeScript end-to-end, Zod runtime validation, and structured request/response DTO contracts preventing bugs at compile time.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-20 w-full">
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

      {/* Page Title & AEO Answer-First */}
      <div className="mt-4 mb-10">
        <Badge variant="accent" size="sm" className="mb-3">
          Engineering Profile
        </Badge>
        <h1 className="text-headline-section font-bold tracking-tight text-[var(--text)]">
          About {profileData.name}
        </h1>

        <div className="mt-4 p-5 rounded-2xl border border-[rgba(124,92,255,0.25)] bg-[var(--surface)]/80 backdrop-blur-sm text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          <p className="m-0">
            <strong className="text-[var(--text)]">Direct Answer: Who is {profileData.name}?</strong>{" "}
            {geoData.positioningSentence} Based in {profileData.city}, {profileData.country},
            they specialize in engineering resilient full-stack systems using Next.js 15,
            NestJS, PostgreSQL, MongoDB, LangChain, and Twilio Voice AI.
          </p>
        </div>
      </div>

      {/* Main Grid: Story + Specs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Short Story & Focus (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          <Card className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 text-sm font-mono text-[#7C5CFF]">
              <Terminal className="w-4 h-4" />
              <span>Background & Technical Philosophy</span>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-[var(--text)]">
              {geoData.bio150Words}
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-[var(--text-muted)]">
              Over the past 4+ years, I have transitioned from building standard CRUD
              interfaces to designing complex enterprise backends and autonomous multi-agent
              pipelines. I believe software engineering is about solving tangible operational
              bottlenecks—whether that means reducing recruiter call loads by 70% with Twilio
              AI Voice or preventing cross-tenant data leaks in enterprise CRMs.
            </p>

            <div className="pt-4 border-t border-[var(--border)] flex flex-wrap gap-4">
              <Button
                href={profileData.resumeUrl}
                download
                variant="primary"
                size="md"
                className="flex items-center gap-2 rounded-xl"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </Button>

              <Button
                href="/contact"
                variant="outline"
                size="md"
                className="rounded-xl"
              >
                <span>Get in Touch</span>
              </Button>
            </div>
          </Card>

          {/* Core Values */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text)] mb-4">
              Core Engineering Values
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((val, idx) => (
                <Card key={idx} className="p-5 border-[var(--border)]">
                  <div className="flex items-center gap-2 text-sm font-bold text-[var(--text)] mb-2">
                    <CheckCircle className="w-4 h-4 text-[#7C5CFF]" />
                    <span>{val.title}</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {val.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Focus & Highlights (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-6 border-[var(--border)] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7C5CFF]">
              <Cpu className="w-4 h-4" />
              <span>Current Technical Focus</span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-[var(--text)] list-none p-0 m-0">
              <li className="flex items-start gap-2">
                <span className="text-[#7C5CFF] mt-1 font-bold">01</span>
                <span>Sub-second voice agents with Twilio Media Streams and audio streaming buffers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7C5CFF] mt-1 font-bold">02</span>
                <span>LangGraph cyclical agent state machines with PostgreSQL persistence checkpointers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7C5CFF] mt-1 font-bold">03</span>
                <span>NestJS modular microservices with dynamic multi-tenant schema isolation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7C5CFF] mt-1 font-bold">04</span>
                <span>High-throughput Puppeteer price intelligence clusters with proxy rotation.</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 border-[var(--border)] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7C5CFF]">
              <Award className="w-4 h-4" />
              <span>Availability & Terms</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Available for high-impact contracts, full-stack MVP development, and
              freelance architectural advisory. Operating across India and worldwide
              remote timezones.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs font-bold text-emerald-500">
                ● Currently accepting new projects
              </span>
            </div>
          </Card>
        </div>
      </div>

      {/* Facts at a glance block */}
      <FactsAtAGlance />
    </div>
  );
}
