"use client";

import { Fragment } from "react";
import { motion, type Variants } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

export interface AnimatedHeadingLine {
  text: string;
  className?: string;
}

interface AnimatedHeadingProps {
  id?: string;
  as?: "h1" | "h2" | "h3";
  lines: AnimatedHeadingLine[];
  className?: string;
  /**
   * "line" masks the whole line and moves it up; "word" staggers words inside
   * each line. Use "word" once per page at most.
   */
  mode?: "line" | "word";
  /** Hero headings animate on load, everything else when scrolled into view. */
  start?: "load" | "inView";
  delay?: number;
}

const lineVariants: Variants = {
  hidden: { y: "108%" },
  visible: { y: "0%", transition: { duration: 0.9, ease: EASE } },
};

const wordVariants: Variants = {
  hidden: { y: "112%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: EASE } },
};

const mask = "overflow-hidden pb-[0.14em] -mb-[0.14em]";

export default function AnimatedHeading({
  id,
  as = "h2",
  lines,
  className,
  mode = "line",
  start = "inView",
  delay = 0,
}: AnimatedHeadingProps) {
  const content = (
    <motion.span
      data-motion=""
      className="block"
      initial="hidden"
      animate={start === "load" ? "visible" : undefined}
      whileInView={start === "inView" ? "visible" : undefined}
      viewport={start === "inView" ? { once: true, amount: 0.35 } : undefined}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: mode === "word" ? 0.055 : 0.09, delayChildren: delay },
        },
      }}
    >
      {lines.map((line, index) => (
        <Fragment key={index}>
          <span className={`block ${mask} ${line.className ?? ""}`}>
            {mode === "word" ? (
              line.text.split(" ").map((word, wordIndex, words) => (
                <Fragment key={`${word}-${wordIndex}`}>
                  <span className={`inline-block align-bottom ${mask}`}>
                    <motion.span
                      data-motion=""
                      variants={wordVariants}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                  {wordIndex < words.length - 1 ? " " : null}
                </Fragment>
              ))
            ) : (
              <motion.span data-motion="" variants={lineVariants} className="block">
                {line.text}
              </motion.span>
            )}
          </span>{" "}
        </Fragment>
      ))}
    </motion.span>
  );

  if (as === "h1") {
    return (
      <h1 id={id} className={className}>
        {content}
      </h1>
    );
  }

  if (as === "h3") {
    return (
      <h3 id={id} className={className}>
        {content}
      </h3>
    );
  }

  return (
    <h2 id={id} className={className}>
      {content}
    </h2>
  );
}
