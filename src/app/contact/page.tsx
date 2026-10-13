import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { profileData } from "@/data/profile";
import { geoData } from "@/data/geo";
import { Mail, Clock, MapPin, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export const metadata: Metadata = constructMetadata({
  title: `Contact & Hire ${profileData.name} | Project Inquiry`,
  description:
    `Start your project with ${profileData.name}. Inquire about ATS with AI calling, multi-tenant CRM, LangGraph agents, or custom web engineering.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-24 w-full">
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      {/* Header & Answer First */}
      <div className="mt-4 mb-14">
        <Badge variant="glow" size="sm" className="mb-3">
          Direct Pipeline
        </Badge>
        <h1 className="text-headline-section font-bold tracking-tight text-[var(--text)]">
          Let&apos;s Build Your Next Application
        </h1>

        <div className="mt-4 p-5 rounded-2xl border border-[rgba(124,92,255,0.25)] bg-[var(--surface)]/80 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          <p className="m-0">
            <strong className="text-[var(--text)]">Direct Answer: How to hire {profileData.name}?</strong>{" "}
            Submit the project form below or email{" "}
            <a href={`mailto:${profileData.email}`} className="text-[#7C5CFF] underline font-semibold">
              {profileData.email}
            </a>{" "}
            directly. Inquiries receive replies within 24 business hours with initial architectural thoughts and timeline estimates.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Form Container (7 cols) */}
        <div className="lg:col-span-7">
          <Card className="p-6 sm:p-8 border-[var(--border)]">
            <h2 className="text-xl font-bold text-[var(--text)] mb-2">
              Send a Project Proposal
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-8">
              Fill out this quick form with your requirements and I will get back to you promptly.
            </p>

            <ContactForm />
          </Card>
        </div>

        {/* Sidebar Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="p-6 border-[var(--border)] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7C5CFF]">
              <Clock className="w-4 h-4" />
              <span>Availability & SLA</span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{profileData.availability}</span>
            </div>

            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Standard initial replies are sent within 24 business hours. NDA agreements
              provided upon request prior to detailed codebase inspection.
            </p>
          </Card>

          <Card className="p-6 border-[var(--border)] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7C5CFF]">
              <Mail className="w-4 h-4" />
              <span>Direct Channels</span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--text)] hover:text-[#7C5CFF] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#7C5CFF]" />
                <span className="font-mono">{profileData.email}</span>
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--text)] hover:text-[#7C5CFF] transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[#7C5CFF]" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--text)] hover:text-[#7C5CFF] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[#7C5CFF]" />
                <span>LinkedIn Network</span>
              </a>
            </div>
          </Card>

          <Card className="p-6 border-[var(--border)] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7C5CFF]">
              <MapPin className="w-4 h-4" />
              <span>Location & Reach</span>
            </div>
            <p className="text-xs text-[var(--text)] font-semibold">
              {geoData.location}
            </p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Operating remote worldwide across US, European, and APAC overlapping working hours.
            </p>
          </Card>

          <div className="p-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-xs text-[var(--text-muted)] flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#7C5CFF] shrink-0 mt-0.5" />
            <span>
              Your intellectual property is safeguarded. All delivered repositories and artifacts become your exclusive property upon project completion.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
