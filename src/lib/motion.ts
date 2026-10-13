import type { Variants, Transition } from "framer-motion";

export const EASING_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const TRANSITION_FAST: Transition = {
  duration: 0.5,
  ease: EASING_EXPO,
};

export const TRANSITION_BASE: Transition = {
  duration: 0.7,
  ease: EASING_EXPO,
};

export const TRANSITION_SLOW: Transition = {
  duration: 0.9,
  ease: EASING_EXPO,
};

export const pageTransitionVariants: Variants = {
  initial: {
    opacity: 0,
    y: 16,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASING_EXPO,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.4,
      ease: EASING_EXPO,
    },
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: TRANSITION_BASE,
  },
};

export const revealUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_BASE,
  },
};

export const revealDownVariants: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_BASE,
  },
};

export const revealLeftVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: TRANSITION_BASE,
  },
};

export const revealRightVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: TRANSITION_BASE,
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const splitLetterVariants: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.6,
      ease: EASING_EXPO,
    },
  },
};
