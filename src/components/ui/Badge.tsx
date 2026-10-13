import { cn } from "@/lib/utils";
import type { BadgeProps } from "@/types";

export function Badge({
  variant = "default",
  size = "sm",
  className,
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-mono font-medium rounded-full transition-colors";

  const variantStyles = {
    default:
      "bg-[var(--surface-hover)] text-[var(--text)] border border-[var(--border)]",
    accent:
      "bg-[rgba(124,92,255,0.12)] text-[#7C5CFF] dark:text-[#9B82FF] border border-[rgba(124,92,255,0.28)]",
    outline:
      "border border-[var(--border)] text-[var(--text-muted)] bg-transparent",
    glow:
      "bg-gradient-to-r from-[rgba(124,92,255,0.15)] to-[rgba(34,211,238,0.15)] text-[#7C5CFF] border border-[rgba(124,92,255,0.35)] shadow-[0_0_12px_rgba(124,92,255,0.15)]",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wider uppercase",
    md: "text-xs px-3 py-1 tracking-wider uppercase",
  };

  return (
    <span
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </span>
  );
}
