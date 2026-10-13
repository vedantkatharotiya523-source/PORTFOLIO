import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBanner() {
  return (
    <section aria-label="Call to action banner" className="w-full max-w-6xl mx-auto px-4 sm:px-6 my-20 overflow-hidden">
      <Reveal direction="up">
        <div className="relative rounded-3xl border border-[rgba(124,92,255,0.35)] bg-gradient-to-r from-[rgba(124,92,255,0.08)] via-[var(--surface)] to-[rgba(34,211,238,0.08)] p-5 sm:p-10 md:p-14 text-center overflow-hidden">
          {/* Subtle glow */}
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.15),transparent_70%)] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <Badge variant="glow" size="md" className="mb-4">
              <Sparkles className="w-3.5 h-3.5 mr-1 text-[#7C5CFF]" />
              Start Your Next Project
            </Badge>

            <h2 className="text-headline-section font-extrabold text-[var(--text)] tracking-tight">
              Ready to Build Intelligent Web Applications That Drive Real Business Impact?
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              Whether you need an automated ATS voice interviewer, a high-converting
              multi-tenant CRM, or a full-stack platform built with Next.js 15 and NestJS,
              I am available for select contract and freelance engagements.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl text-sm sm:text-base font-bold shadow-lg shadow-[#7C5CFF]/25"
              >
                <span>Hire Me / Start Project</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Button>

              <Button
                href={`mailto:${profileData.email}`}
                external
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl text-sm sm:text-base font-semibold max-w-full"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="truncate max-w-[240px] sm:max-w-none">
                  {profileData.email}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
