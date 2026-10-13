"use client";

import { motion } from "framer-motion";
import { pageTransitionVariants } from "@/lib/motion";
import type { ChildrenProps } from "@/types";

export default function Template({ children }: ChildrenProps) {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex-1 w-full"
    >
      {children}
    </motion.div>
  );
}
