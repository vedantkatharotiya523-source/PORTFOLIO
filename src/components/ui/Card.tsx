"use client";

import { useRef, useState, type MouseEvent } from "react";
import { cn } from "@/lib/utils";
import type { CardProps } from "@/types";

export function Card({
  spotlight = false,
  glow = false,
  className,
  children,
  ...props
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!spotlight || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300",
        glow && "hover:border-[rgba(124,92,255,0.4)] hover:shadow-[0_0_30px_rgba(124,92,255,0.12)]",
        className
      )}
      {...props}
    >
      {spotlight && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(124, 92, 255, 0.12), transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}
