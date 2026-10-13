import { statsData } from "@/data/stats";
import { Counter } from "@/components/ui/Counter";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function StatsSection() {
  return (
    <section aria-label="Key delivery metrics" className="max-w-6xl mx-auto px-4 sm:px-6 my-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {statsData.map((stat, index) => (
          <Reveal key={stat.id} delay={index * 0.1} direction="up">
            <Card className="flex flex-col justify-between p-6 h-full border-[var(--border)] hover:border-[#7C5CFF]/30 transition-all">
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text)] tracking-tight">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    className="text-[#7C5CFF]"
                  />
                </span>
                <span className="mt-2 text-sm sm:text-base font-semibold text-[var(--text)]">
                  {stat.label}
                </span>
              </div>
              <p className="mt-3 text-xs text-[var(--text-muted)] leading-relaxed">
                {stat.description}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
