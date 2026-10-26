"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** Fraction of the pointer distance to follow. */
  strength?: number;
  /** Maximum travel in pixels. */
  max?: number;
}

/**
 * Small magnetic pull for desktop pointers. Disabled for touch input and
 * reduced-motion users, so the control always stays where it is meant to be.
 */
export default function Magnetic({
  children,
  className,
  strength = 0.22,
  max = 7,
}: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 260, damping: 24, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 260, damping: 24, mass: 0.4 });

  const handleMove = (event: PointerEvent<HTMLSpanElement>) => {
    if (event.pointerType !== "mouse" || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    rawX.set(Math.max(-max, Math.min(max, offsetX * strength)));
    rawY.set(Math.max(-max, Math.min(max, offsetY * strength)));
  };

  const reset = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-flex ${className ?? ""}`}
      style={{ x, y }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onBlur={reset}
    >
      {children}
    </motion.span>
  );
}
