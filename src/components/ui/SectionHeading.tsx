import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import type { SectionHeadingProps } from "@/types";

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-12 sm:mb-16",
        center ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <Badge variant="accent" size="sm" className="mb-3.5">
          {eyebrow}
        </Badge>
      )}
      <h2 className="text-headline-section text-[var(--text)] tracking-tight font-bold">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
