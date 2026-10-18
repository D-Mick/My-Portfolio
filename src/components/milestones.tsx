import { profile } from "@/content/profile";
import { Section } from "@/components/section";

export function Milestones() {
  return (
    <Section id="milestones" index="02" title="Milestones">
      <ol className="divide-y divide-line border-y border-line">
        {profile.milestones.map((item) => (
          <li
            key={item.title}
            className="grid gap-2 py-6 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-8"
          >
            <p className="font-mono text-xs text-signal tabular-nums">{item.year}</p>
            <div>
              <h3 className="font-display text-[1.7rem] leading-none text-ink">{item.title}</h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
