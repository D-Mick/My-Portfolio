import { profile } from "@/content/profile";
import { Section } from "@/components/section";

export function Practice() {
  return (
    <Section id="practice" index="03" title="Practice">
      <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
        {profile.practice.map((item) => (
          <li key={item.title} className="border-t border-line pt-4">
            <h3 className="font-display text-[1.7rem] leading-none text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
