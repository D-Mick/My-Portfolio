import { profile } from "@/content/profile";
import { Section } from "@/components/section";

export function Experience() {
  return (
    <Section id="experience" index="04" title="Experience">
      <ol className="divide-y divide-line border-y border-line">
        {profile.experience.map((role) => (
          <li
            key={`${role.company}-${role.dates}`}
            className="grid gap-2 py-6 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:gap-8"
          >
            <p className="font-mono text-xs text-ink-soft tabular-nums">{role.dates}</p>
            <div>
              <h3 className="text-lg text-ink">{role.role}</h3>
              {role.company ? (
                <p className="mt-1 font-mono text-[0.72rem] tracking-[0.12em] text-signal uppercase">
                  {role.company}
                </p>
              ) : null}
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
                {role.summary}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-8 max-w-xl text-sm leading-relaxed text-ink-soft">
        <span className="text-ink">{profile.education.school}</span>
        {" — "}
        {profile.education.credential}. {profile.education.detail}.
      </p>
    </Section>
  );
}
