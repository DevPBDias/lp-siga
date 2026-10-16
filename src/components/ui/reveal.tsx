"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  hover = false,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.65,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        hover && !reduceMotion
          ? { y: -4, transition: { duration: 0.2, ease: "easeOut" } }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
