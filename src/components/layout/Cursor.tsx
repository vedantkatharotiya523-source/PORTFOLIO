"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useReducedMotion } from "framer-motion";
import { useMounted } from "@/lib/useMounted";

export function Cursor() {
  const isMounted = useMounted();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useSpring(0, { stiffness: 400, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 400, damping: 28 });

  useEffect(() => {
    // Only enable on desktop pointer fine
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer || shouldReduceMotion) return;

    const handleMouseMove = (e: globalThis.MouseEvent) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target && target.closest("a, button, [role='button'], input, textarea")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovered(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible, shouldReduceMotion]);

  if (!isMounted || !isVisible || shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      style={{ x: mouseX, y: mouseY }}
      animate={{
        scale: isHovered ? 1.75 : 1,
        borderColor: isHovered ? "rgba(124,92,255,0.7)" : "rgba(124,92,255,0.35)",
        backgroundColor: isHovered ? "rgba(124,92,255,0.12)" : "rgba(124,92,255,0.05)",
      }}
      transition={{ duration: 0.15 }}
      className="pointer-events-none fixed top-0 left-0 z-50 h-5 w-5 rounded-full border backdrop-blur-[1px]"
      aria-hidden="true"
    />
  );
}
