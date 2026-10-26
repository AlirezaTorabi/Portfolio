"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * Thin viewport-level reading progress. Uses a motion value so scrolling never
 * triggers a React render.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[75] h-[2px] origin-left bg-gradient-to-r from-[#FF7133] to-[#FFB020]"
      style={{ scaleX: smoothed }}
    />
  );
}
