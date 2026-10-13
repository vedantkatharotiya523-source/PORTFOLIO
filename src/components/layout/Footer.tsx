import Link from "next/link";
import { geoData } from "@/data/geo";
import { profileData } from "@/data/profile";
import { NAV_ITEMS } from "@/lib/constants";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Col 1: Canonical Entity Bio */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--text)]">
              {geoData.availability}
            </span>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-[var(--text)]">
            {profileData.name}
          </h3>

          <p className="text-sm leading-relaxed text-[var(--text-muted)] max-w-md">
            {geoData.positioningSentence}
          </p>

          <div className="pt-2 text-xs font-mono space-y-1">
            <p>
              <strong className="text-[var(--text)]">Location:</strong> {geoData.location}
            </p>
            <p>
              <strong className="text-[var(--text)]">Direct Contact:</strong>{" "}
              <a
                href={`mailto:${profileData.email}`}
                className="text-[#7C5CFF] underline underline-offset-2 hover:text-[#9B82FF]"
              >
                {profileData.email}
              </a>
            </p>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text)]">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm list-none p-0 m-0">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-[var(--text)] transition-colors inline-flex items-center gap-1"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: LLM & Machine Discovery */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text)]">
            GEO & Machine Discovery
          </h4>
          <ul className="space-y-2 text-sm list-none p-0 m-0">
            <li>
              <a
                href="/llms.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7C5CFF] transition-colors inline-flex items-center gap-1"
              >
                <span>/llms.txt (Agent Context)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </li>
            <li>
              <a
                href="/llms-full.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7C5CFF] transition-colors inline-flex items-center gap-1"
              >
                <span>/llms-full.txt (Full Case Studies)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </li>
            <li>
              <a
                href="/feed.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7C5CFF] transition-colors inline-flex items-center gap-1"
              >
                <span>/feed.xml (RSS Feed)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </li>
            <li>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7C5CFF] transition-colors inline-flex items-center gap-1"
              >
                <span>Sitemap XML</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </li>
          </ul>

          <div className="pt-4 flex items-center gap-3">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl border border-[var(--border)] hover:bg-[var(--surface-hover)] hover:text-[#7C5CFF] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-xl border border-[var(--border)] hover:bg-[var(--surface-hover)] hover:text-[#7C5CFF] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              aria-label="Email Address"
              className="p-2 rounded-xl border border-[var(--border)] hover:bg-[var(--surface-hover)] hover:text-[#7C5CFF] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between text-xs gap-3">
        <p>
          © 2026 {profileData.name}. All rights reserved.
        </p>
        <p className="font-mono text-[11px]">
          Last verified: {geoData.lastUpdated} · Built with Next.js 15
        </p>
      </div>
    </footer>
  );
}
