import { ReactNode } from "react";

export default function Section({
  id,
  no,
  title,
  children,
}: {
  id: string;
  no: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="rule-top scroll-mt-14">
      <div className="mx-auto w-full max-w-5xl px-6 py-14 md:py-20">
        <div className="grid gap-6 md:grid-cols-[7rem_1fr] md:gap-12">
          <header className="md:sticky md:top-24 md:self-start">
            <div className="flex items-baseline gap-3 md:block">
              <span className="font-[family-name:var(--font-mono)] text-xs text-accent">{no}</span>
              <h2 className="text-base font-semibold tracking-tight md:mt-2">{title}</h2>
            </div>
          </header>
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
}
