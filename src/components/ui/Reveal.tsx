"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  revealUpVariants,
  revealDownVariants,
  revealLeftVariants,
  revealRightVariants,
  fadeInVariants,
} from "@/lib/motion";
import { useMounted } from "@/lib/useMounted";
import type { RevealProps } from "@/types";

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const mounted = useMounted();

  if (mounted && shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getVariants = () => {
    switch (direction) {
      case "up":
        return revealUpVariants;
      case "down":
        return revealDownVariants;
      case "left":
        return revealLeftVariants;
      case "right":
        return revealRightVariants;
      case "none":
      default:
        return fadeInVariants;
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px 80px 0px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
