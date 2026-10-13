import { geoData } from "@/data/geo";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CheckCircle2 } from "lucide-react";

export function FactsAtAGlance() {
  return (
    <section
      aria-labelledby="facts-heading"
      className="max-w-6xl mx-auto px-4 sm:px-6 my-14"
    >
      <Card className="border-[rgba(124,92,255,0.25)] bg-[var(--surface)]/80 backdrop-blur-sm p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[var(--border)]">
          <div>
            <Badge variant="glow" size="sm" className="mb-2">
              Canonical Machine Facts
            </Badge>
            <h2
              id="facts-heading"
              className="text-lg sm:text-xl font-bold tracking-tight text-[var(--text)]"
            >
              Developer Profile at a Glance
            </h2>
          </div>
          <p className="text-xs font-mono text-[var(--text-muted)]">
            Source of Truth · Last verified {geoData.lastUpdated}
          </p>
        </div>

        {/* Clean, WCAG 1.3.1 compliant definition list */}
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-xs sm:text-sm m-0 p-0">
          {geoData.keyFacts.map((fact, index) => (
            <div
              key={index}
              className="flex flex-col py-2 border-b border-[var(--border)]/50 last:border-b-0"
            >
              <dt className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7C5CFF] shrink-0" />
                <span>{fact.label}</span>
              </dt>
              <dd className="m-0 mt-1 pl-6 font-medium text-[var(--text)] leading-snug">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </Card>
    </section>
  );
}
