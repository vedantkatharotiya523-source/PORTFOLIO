"use client";

import { ArrowRight, Sparkles, FolderCode } from "lucide-react";
import { profileData } from "@/data/profile";
import { geoData } from "@/data/geo";
import { SplitText } from "@/components/ui/SplitText";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function HeroSection() {
  return (
    <section
      aria-label="Introduction hero"
      className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-10 pb-8 overflow-hidden"
    >
      {/* Soft radial background glow */}
      <div
        className="hero-glow absolute inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Eyebrow Status Badge */}
      <Reveal direction="down" delay={0.1}>
        <div className="inline-flex items-center gap-2 mb-6">
          <Badge variant="glow" size="md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse mr-1" />
            {profileData.availability}
          </Badge>
        </div>
      </Reveal>

      {/* Main Fluid Headline with SplitText */}
      <div className="max-w-4xl mx-auto">
        <SplitText
          tag="h1"
          text={`${profileData.role}`}
          className="text-headline-hero text-[var(--text)] tracking-tight font-extrabold"
          delay={0.15}
        />
      </div>

      {/* Positioning Subline */}
      <Reveal direction="up" delay={0.35}>
        <p className="mt-6 text-xl sm:text-2xl font-medium text-[var(--text)] max-w-2xl mx-auto tracking-tight">
          &ldquo;{profileData.positioningLine}&rdquo;
        </p>
      </Reveal>

      {/* AEO Answer-First Block: Concise 40-60 word plain language summary */}
      <Reveal direction="up" delay={0.45}>
        <div className="mt-5 max-w-2xl mx-auto p-4 rounded-xl border border-[rgba(124,92,255,0.2)] bg-[var(--surface)]/70 backdrop-blur-sm text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed text-left">
          <p className="m-0">
            <strong className="text-[var(--text)]">Direct Answer:</strong>{" "}
            {geoData.positioningSentence} Specialized in production NestJS backends,
            PostgreSQL/MongoDB schemas, and low-latency voice and RAG pipelines.
          </p>
        </div>
      </Reveal>

      {/* 2 CTAs: View Projects + Hire Me */}
      <Reveal direction="up" delay={0.55}>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <Button
            href="/projects"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl text-sm sm:text-base font-bold shadow-lg shadow-[#7C5CFF]/20"
          >
            <FolderCode className="w-4 h-4" />
            <span>View Case Studies & Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl text-sm sm:text-base font-semibold"
          >
            <Sparkles className="w-4 h-4 text-[#7C5CFF]" />
            <span>Hire Me / Start Project</span>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
