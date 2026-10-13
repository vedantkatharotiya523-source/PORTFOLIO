import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { experienceData } from "@/data/experience";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";
import { profileData } from "@/data/profile";

export const metadata: Metadata = constructMetadata({
  title: `Work History & Experience Timeline | ${profileData.name}`,
  description:
    `Track record of shipping production full-stack web applications, AI systems, and microservices across ${profileData.experienceYears}+ years of engineering.`,
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-24 w-full">
      <Breadcrumbs items={[{ label: "Experience", href: "/experience" }]} />

      {/* Header & Answer First */}
      <div className="mt-4 mb-14">
        <Badge variant="accent" size="sm" className="mb-3">
          Track Record
        </Badge>
        <h1 className="text-headline-section font-bold tracking-tight text-[var(--text)]">
          Engineering Career & Experience
        </h1>

        <div className="mt-4 p-5 rounded-2xl border border-[rgba(124,92,255,0.25)] bg-[var(--surface)]/80 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          <p className="m-0">
            <strong className="text-[var(--text)]">Direct Answer: What is the professional experience?</strong>{" "}
            {profileData.name} has {profileData.experienceYears}+ years of hands-on experience building custom web applications and AI platforms.
            Specialized in deploying automated voice bots, multi-tenant CRMs, and scalable scrapers with production reliability.
          </p>
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 sm:pl-10 border-l border-[var(--border)] space-y-12 ml-2 sm:ml-4">
        {experienceData.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.12} direction="up">
            <div className="relative">
              {/* Timeline marker node */}
              <div
                className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 border-[#7C5CFF] bg-[var(--background)] flex items-center justify-center"
                aria-hidden="true"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#7C5CFF]" />
              </div>

              <Card className="p-6 sm:p-8 border-[var(--border)]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#7C5CFF]" />
                    <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
                      {item.company}
                    </span>
                    <Badge variant="outline" size="sm">
                      {item.type}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-muted)]">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[var(--text)] tracking-tight">
                  {item.role}
                </h2>

                <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
                  {item.description}
                </p>

                {/* Key Achievements */}
                <div className="mt-6 pt-4 border-t border-[var(--border)]">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text)] mb-3">
                    Key Impact & Achievements
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-[var(--text)] list-none p-0 m-0">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#7C5CFF] shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-6 pt-4 border-t border-[var(--border)] flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[var(--surface-hover)] text-[var(--text-muted)] border border-[var(--border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
