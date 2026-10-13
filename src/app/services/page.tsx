import type { Metadata } from "next";
import { constructMetadata, getFaqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { servicesData } from "@/data/services";
import { servicesFaqData } from "@/data/faq";
import { FaqAccordion } from "@/components/services/FaqAccordion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CheckCircle2, Clock, Layers, ShieldCheck, Zap } from "lucide-react";
import { profileData } from "@/data/profile";

export const metadata: Metadata = constructMetadata({
  title: `Full-Stack & AI Engineering Services | ${profileData.name}`,
  description:
    "Engineering custom web applications, Twilio AI voice calling, multi-tenant CRMs, LangGraph agents, and scrapers with clear timelines and fixed scopes.",
  path: "/services",
});

export default function ServicesPage() {
  const engagementModels = [
    {
      title: "Fixed-Scope Milestone Sprints",
      timeline: "2 to 6 weeks",
      idealFor: "Defined MVPs, new product launches, and isolated AI features.",
      features: [
        "Fixed price and clear milestone roadmap",
        "Weekly progress demos on staging environments",
        "Full test suite and production deployment",
        "30-day post-launch warranty and bug fixes",
      ],
      icon: Layers,
    },
    {
      title: "Dedicated Monthly Engineering Retainer",
      timeline: "Monthly rolling",
      idealFor: "Continuous feature shipping, performance scaling, and AI experimentation.",
      features: [
        "Dedicated weekly engineering bandwidth",
        "Direct Slack/Discord access and sprint planning",
        "Rapid turnaround on critical client updates",
        "Flexible priority pivots with no change-order bureaucracy",
      ],
      icon: Zap,
    },
    {
      title: "Architectural Audit & Strategy",
      timeline: "1 week",
      idealFor: "Teams planning complex multi-tenant migrations or low-latency AI integrations.",
      features: [
        "Comprehensive code & database schema audit",
        "Latency profiling for voice/LLM pipelines",
        "Detailed architecture blueprint and risk assessment",
        "Actionable refactoring recommendations",
      ],
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-24 w-full">
      <JsonLd schema={getFaqJsonLd(servicesFaqData)} />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

      {/* Header & Answer-First */}
      <div className="mt-4 mb-14">
        <Badge variant="accent" size="sm" className="mb-3">
          Offerings & Engagement Models
        </Badge>
        <h1 className="text-headline-section font-bold tracking-tight text-[var(--text)]">
          Full-Stack Engineering & AI Solutions
        </h1>

        <div className="mt-4 p-5 rounded-2xl border border-[rgba(124,92,255,0.25)] bg-[var(--surface)]/80 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          <p className="m-0">
            <strong className="text-[var(--text)]">Direct Answer: What services are offered?</strong>{" "}
            {profileData.name} builds custom web applications, autonomous AI agents (LangChain & LangGraph),
            Twilio AI voice screening pipelines, multi-tenant CRM/ATS platforms, and price intelligence scrapers.
            Engagements range from fixed-scope product launches to monthly engineering retainers.
          </p>
        </div>
      </div>

      {/* Detailed Services Grid */}
      <section aria-labelledby="all-services-heading" className="mb-20">
        <h2 id="all-services-heading" className="text-2xl font-bold tracking-tight text-[var(--text)] mb-8">
          Detailed Capabilities & Deliverables
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <Card
              key={service.id}
              id={service.slug}
              spotlight
              glow
              className="p-6 sm:p-8 flex flex-col justify-between border-[var(--border)]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="accent" size="sm">
                    {service.estimatedTimeline}
                  </Badge>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    Production Grade
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[var(--text)] tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-6 pt-4 border-t border-[var(--border)]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text)] mb-2.5">
                    Included Capabilities
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[var(--text)] list-none p-0 m-0">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#7C5CFF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="mt-5 pt-4 border-t border-[var(--border)]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text)] mb-2">
                    Key Deliverables
                  </h4>
                  <ul className="space-y-1 text-xs text-[var(--text-muted)] list-none p-0 m-0">
                    {service.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-[#7C5CFF]">→</span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Stack & Action */}
              <div className="mt-8 pt-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--surface-hover)] text-[var(--text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  href="/contact"
                  variant="outline"
                  size="sm"
                  className="rounded-xl font-semibold"
                >
                  Book Consultation
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section aria-labelledby="engagement-models-heading" className="mb-20">
        <h2 id="engagement-models-heading" className="text-2xl font-bold tracking-tight text-[var(--text)] mb-4">
          Flexible Engagement Models
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl mb-8 leading-relaxed">
          Transparent, predictable collaboration structures designed to align with your
          project budget and milestone schedule.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engagementModels.map((model, idx) => {
            const Icon = model.icon;
            return (
              <Card key={idx} className="p-6 border-[var(--border)] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[rgba(124,92,255,0.1)] text-[#7C5CFF] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-[var(--text)]">
                    {model.title}
                  </h3>

                  <div className="flex items-center gap-1.5 mt-1 mb-3 text-xs font-mono text-[#7C5CFF]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{model.timeline}</span>
                  </div>

                  <p className="text-xs text-[var(--text-muted)] mb-4 leading-relaxed">
                    <strong>Best for:</strong> {model.idealFor}
                  </p>

                  <ul className="space-y-2 text-xs text-[var(--text)] list-none p-0 m-0 border-t border-[var(--border)] pt-4">
                    {model.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-[#7C5CFF]">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border)]">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="sm"
                    className="w-full rounded-xl font-bold text-xs"
                  >
                    Discuss This Model
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section aria-labelledby="faq-heading" className="mb-14">
        <div className="mb-8">
          <Badge variant="accent" size="sm" className="mb-2">
            Direct Answers
          </Badge>
          <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-[var(--text)]">
            Frequently Asked Technical Questions
          </h2>
          <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
            Honest answers covering architectures, AI telephony latencies, multi-tenant security, and code ownership.
          </p>
        </div>

        <FaqAccordion />
      </section>
    </div>
  );
}
