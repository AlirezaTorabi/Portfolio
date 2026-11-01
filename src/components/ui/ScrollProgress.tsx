"use client";

import { motion, useScroll, useSpring } from "motion/react";
import type { Locale } from "@/lib/translations";

/**
 * Thin viewport-level reading progress. Uses a motion value so scrolling never
 * triggers a React render.
 */
export default function ScrollProgress({ locale = "en" }: { locale?: Locale }) {
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-x-0 top-0 z-[75] h-[2px] ${locale === "fa" ? "origin-right" : "origin-left"} bg-accent`}
      style={{ scaleX: smoothed }}
    />
  );
}
