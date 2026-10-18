import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, index, title, children }: SectionProps) {
  const headingId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="mt-16 scroll-mt-28 border-t border-line pt-12 lg:mt-24 lg:pt-16"
    >
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs tabular-nums text-signal">{index}</span>
        <h2
          id={headingId}
          className="font-mono text-[0.72rem] tracking-[0.18em] text-ink-soft uppercase"
        >
          {title}
        </h2>
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}
