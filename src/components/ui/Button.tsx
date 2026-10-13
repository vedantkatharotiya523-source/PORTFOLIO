"use client";

import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className,
      children,
      href,
      external,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";

    const variantStyles = {
      primary:
        "bg-[#7C5CFF] text-white hover:bg-[#6A47FA] shadow-sm hover:shadow-[0_0_20px_rgba(124,92,255,0.35)]",
      secondary:
        "bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] hover:bg-[var(--surface-hover)]",
      outline:
        "border border-[var(--border)] text-[var(--text)] hover:border-[#7C5CFF] hover:text-[#7C5CFF] bg-transparent",
      ghost:
        "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-hover)]",
    };

    const sizeStyles = {
      sm: "h-9 px-3.5 text-xs tracking-wide",
      md: "h-11 px-5 text-sm tracking-wide",
      lg: "h-13 px-7 text-base tracking-wide",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      if (external || props.download) {
        return (
          <a
            href={href}
            download={props.download}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={combinedClassName}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
