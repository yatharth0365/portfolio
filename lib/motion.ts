import type { TargetAndTransition, Variants } from 'framer-motion';

export const prefersReducedMotion =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export const hoverLift: { whileHover: TargetAndTransition } = {
  whileHover: { y: -3, scale: 1.01, transition: { type: 'spring' as const, stiffness: 320, damping: 24 } },
};

export const hoverSlide: { whileHover: TargetAndTransition } = {
  whileHover: { x: 3, transition: { duration: 0.2, ease: 'easeOut' } },
};