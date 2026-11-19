"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

/** A vertical rule on the left edge of its content that draws itself as the content is scrolled. */
export default function ScrollLine({
  children,
  className,
  tone = "ink",
}: {
  children: ReactNode;
  className?: string;
  tone?: "ink" | "fog";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <div ref={ref} className={`relative ${className ?? ""}`}>
      <span
        aria-hidden
        className={`absolute top-0 bottom-0 left-0 w-px ${tone === "ink" ? "bg-rule" : "bg-fog-rule"}`}
      />
      <motion.span
        aria-hidden
        className="scroll-line-fill absolute top-0 bottom-0 left-0 w-px origin-top bg-accent"
        style={{ scaleY }}
      />
      {children}
    </div>
  );
}
