import ScrollReveal from "./ScrollReveal";

export default function SectionHeading({
  kicker,
  heading,
  align = "left",
}: {
  kicker: string;
  heading: string;
  align?: "left" | "center";
}) {
  return (
    <ScrollReveal>
      <div className={align === "center" ? "text-center" : ""}>
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-accent-2">
          {kicker}
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {heading}
        </h2>
        <div className={`mt-4 h-1 w-16 rounded-full bg-accent ${align === "center" ? "mx-auto" : ""}`} />
      </div>
    </ScrollReveal>
  );
}
