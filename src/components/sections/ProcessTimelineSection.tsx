import { processStepsData } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessTimelineSection() {
  return (
    <section aria-labelledby="process-title" className="max-w-6xl mx-auto px-4 sm:px-6 my-20">
      <SectionHeading
        eyebrow="Proven Workflow"
        title="Predictable 5-Stage Engineering Process"
        description="From architecture blueprints to zero-downtime launches, every milestone is scoped with fixed timelines and measurable deliverables."
      />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {processStepsData.map((step, index) => (
          <Reveal key={step.step} delay={index * 0.1} direction="up">
            <Card className="flex flex-col justify-between h-full p-5 border-[var(--border)] relative">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-2xl font-black text-[#7C5CFF]/80">
                    {step.step}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] bg-[var(--surface-hover)] px-2 py-0.5 rounded">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[var(--text)] tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs text-[var(--text-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[var(--border)]">
                <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider block mb-1">
                  Key Deliverables
                </span>
                <ul className="space-y-1 text-[11px] text-[var(--text)] list-none p-0 m-0">
                  {step.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-1.5">
                      <span className="text-[#7C5CFF]">✓</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
