"use client";

import { motion, useReducedMotion } from "framer-motion";
import { splitLetterVariants, staggerContainerVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useMounted } from "@/lib/useMounted";
import type { SplitTextProps } from "@/types";

export function SplitText({
  text,
  className,
  tag = "h1",
  delay = 0,
}: SplitTextProps) {
  const mounted = useMounted();
  const shouldReduceMotion = useReducedMotion();
  const Tag = tag;

  // Server render and initial client hydration match identically
  if (!mounted || shouldReduceMotion) {
    return <Tag className={cn("inline-block", className)}>{text}</Tag>;
  }

  const words = text.split(" ");

  return (
    <Tag className={cn("inline-block overflow-hidden", className)}>
      <motion.span
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delayChildren: delay }}
        className="inline-flex flex-wrap"
      >
        {words.map((word, wordIdx) => (
          <span key={wordIdx} className="inline-block overflow-hidden mr-[0.28em] whitespace-nowrap">
            <motion.span
              variants={splitLetterVariants}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
