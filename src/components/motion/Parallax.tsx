"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * Moves its child slightly slower than the page while it crosses the viewport.
 * The wrapper clips; the inner layer is extended by `strength` px above and below.
 * Reduced motion is handled in CSS (`.parallax-layer`), so server and client render the same markup.
 */
export default function Parallax({
  children,
  strength = 60,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div className="parallax-layer absolute inset-x-0" style={{ y, top: -strength, bottom: -strength }}>
        {children}
      </motion.div>
    </div>
  );
}
