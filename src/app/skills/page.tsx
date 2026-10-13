import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { skillGroupsData } from "@/data/skills";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { profileData } from "@/data/profile";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: `Technical Skills Matrix & Proficiencies | ${profileData.name}`,
  description:
    "Comprehensive skills inventory across Next.js 15, NestJS, PostgreSQL, MongoDB, LangChain, LangGraph, and Twilio Voice AI.",
  path: "/skills",
});

export default function SkillsPage() {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-[#7C5CFF] text-white";
      case "Advanced":
        return "bg-[#22D3EE]/20 text-[#22D3EE] border border-[#22D3EE]/30";
      case "Proficient":
      default:
        return "bg-[var(--surface-hover)] text-[var(--text-muted)]";
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-24 w-full">
      <Breadcrumbs items={[{ label: "Skills", href: "/skills" }]} />

      {/* Header & Answer First */}
      <div className="mt-4 mb-12">
        <Badge variant="accent" size="sm" className="mb-3">
          Technologies & Competencies
        </Badge>
        <h1 className="text-headline-section font-bold tracking-tight text-[var(--text)]">
          Technical Skills & Architecture Stack
        </h1>

        <div className="mt-4 p-5 rounded-2xl border border-[rgba(124,92,255,0.25)] bg-[var(--surface)]/80 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          <p className="m-0">
            <strong className="text-[var(--text)]">Direct Answer: What is the core technology stack?</strong>{" "}
            Primary engineering specialization is the MERN stack (Next.js 15, React 19, Node.js) alongside enterprise
            NestJS microservices, PostgreSQL with relational normalization, MongoDB document stores, and autonomous AI
            systems built with LangChain, LangGraph, and Twilio Voice.
          </p>
        </div>
      </div>

      {/* Grouped Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroupsData.map((group) => (
          <Card key={group.id} spotlight className="p-6 border-[var(--border)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#7C5CFF]">
                  Domain Group
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  {group.skills.length} competencies
                </span>
              </div>

              <h2 className="text-xl font-bold text-[var(--text)] tracking-tight">
                {group.title}
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                {group.description}
              </p>

              <div className="space-y-3 pt-4 border-t border-[var(--border)]">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between gap-2 p-2 rounded-xl bg-[var(--surface-hover)]/60 border border-[var(--border)]/50 min-w-0"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-xs sm:text-sm font-semibold text-[var(--text)] truncate">
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <Sparkles className="w-3 h-3 text-[#7C5CFF] shrink-0" />
                      )}
                    </div>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shrink-0 ${getLevelColor(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
