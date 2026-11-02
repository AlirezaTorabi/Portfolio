"use client";

import { motion, useScroll, useSpring } from "motion/react";
import type { Locale } from "@/lib/translations";

/**
 * GitHub-inspired reading progress indicator.
 * Modern, subtle, and blue-tinted to match the brand system.
 */
export default function ScrollProgress({ locale = "en" }: { locale?: Locale }) {
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    mass: 0.3,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[75] h-[3px] overflow-hidden bg-transparent"
    >
      <motion.div
        className={`h-full ${locale === "fa" ? "origin-right" : "origin-left"} rounded-full bg-[linear-gradient(90deg,rgba(96,165,250,0.9),rgba(47,93,246,1),rgba(79,70,229,1))] shadow-[0_0_18px_rgba(47,93,246,0.7)]`}
        style={{
          scaleX: smoothed,
          transformOrigin: locale === "fa" ? "right center" : "left center",
          boxShadow: "0 0 18px rgba(47, 93, 246, 0.65)",
        }}
      />
    </div>
  );
}
