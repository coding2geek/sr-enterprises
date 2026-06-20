"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInWhenVisibleProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function FadeInWhenVisible({ children, delay = 0, className }: FadeInWhenVisibleProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "0px 0px -80px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
