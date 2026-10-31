"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

const EASE: [number, number, number, number] = [0.2, 0.7, 0.2, 1];

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}

const motionProps = (delay: number) => ({
  "data-motion": "",
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: EASE, delay },
});

export default function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const props = motionProps(delay);

  if (as === "li") {
    return (
      <motion.li className={className} {...props}>
        {children}
      </motion.li>
    );
  }

  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
}