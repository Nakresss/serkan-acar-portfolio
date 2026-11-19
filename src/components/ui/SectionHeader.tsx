import type { ReactNode } from "react";
import Reveal from "@/components/motion/Reveal";

/** Large section title on a hairline, with an optional note set to the right. */
export default function SectionHeader({
  title,
  aside,
  tone = "ink",
  id,
}: {
  title: string;
  aside?: ReactNode;
  tone?: "ink" | "fog";
  id?: string;
}) {
  return (
    <Reveal
      y={32}
      className={`grid gap-6 border-t pt-6 md:grid-cols-12 md:items-end ${
        tone === "ink" ? "border-rule" : "border-fog-rule"
      }`}
    >
      <h2 id={id} className="display text-[clamp(2.75rem,8vw,6.5rem)] md:col-span-8">
        {title}
      </h2>
      {aside && (
        <div
          className={`max-w-md text-[0.95rem] leading-relaxed md:col-span-4 md:justify-self-end md:pb-2 ${
            tone === "ink" ? "text-ink-2" : "text-fog-2"
          }`}
        >
          {aside}
        </div>
      )}
    </Reveal>
  );
}
