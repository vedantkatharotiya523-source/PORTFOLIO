import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { servicesData } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesGridSection() {
  return (
    <section aria-labelledby="services-title" className="max-w-6xl mx-auto px-4 sm:px-6 my-20">
      <SectionHeading
        eyebrow="Core Offerings"
        title="Services & Capabilities"
        description="End-to-end full-stack architectures paired with autonomous AI agents, telephony voice systems, and enterprise data models."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.slice(0, 6).map((service, index) => (
          <Reveal key={service.id} delay={index * 0.08} direction="up">
            <Card spotlight glow className="flex flex-col justify-between h-full p-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#7C5CFF]">
                  {service.estimatedTimeline}
                </span>

                <h3 className="mt-2 text-xl font-bold tracking-tight text-[var(--text)] hover:text-[#7C5CFF] transition-colors">
                  <Link href={`/services#${service.slug}`}>
                    {service.title}
                  </Link>
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {service.tagline}
                </p>

                <ul className="mt-4 space-y-1.5 text-xs text-[var(--text-muted)] list-none p-0">
                  {service.features.slice(0, 3).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="text-[#7C5CFF] mt-0.5">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {service.techStack.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-hover)] text-[var(--text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--text)] hover:text-[#7C5CFF] transition-colors"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <span>Explore {service.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
