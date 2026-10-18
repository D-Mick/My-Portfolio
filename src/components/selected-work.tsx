import Image from "next/image";
import { profile } from "@/content/profile";
import { Section } from "@/components/section";
import { TextLink } from "@/components/text-link";

export function SelectedWork() {
  return (
    <Section id="work" index="01" title="Selected work">
      <div className="divide-y divide-line border-b border-line">
        {profile.work.map((project) => (
          <article key={project.name} className="py-8 first:pt-0 last:pb-8">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h3 className="font-display text-[2.1rem] leading-none tracking-tight text-ink sm:text-4xl">
                {project.name}
              </h3>
              <p className="font-mono text-xs text-ink-soft tabular-nums">{project.year}</p>
            </div>
            <p className="mt-3 font-mono text-[0.72rem] tracking-[0.12em] text-signal uppercase">
              {project.platforms.join("  ·  ")}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
              {project.summary}
            </p>
            {project.images.length > 0 ? (
              <ul className="mt-6 flex min-w-0 max-w-full gap-3 overflow-x-auto pb-1">
                {project.images.map((image) => (
                  <li
                    key={image.src}
                    className={`shrink-0 overflow-hidden rounded-[1.15rem] bg-ink shadow-[var(--device-shadow-sm)] ring-1 ring-[var(--device-ring)] ${
                      image.width > image.height ? "w-64 sm:w-72" : "w-36 sm:w-40"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="h-auto w-full"
                    />
                  </li>
                ))}
              </ul>
            ) : null}
            <dl className="mt-6 grid gap-4 border-t border-line pt-4 sm:grid-cols-3">
              {project.outcomes.map((outcome) => (
                <div key={outcome.label}>
                  <dt className="font-mono text-[0.68rem] tracking-[0.14em] text-ink-soft uppercase">
                    {outcome.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl text-ink">{outcome.value}</dd>
                </div>
              ))}
            </dl>
            {project.links.length > 0 ? (
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <TextLink
                      href={link.href}
                      className="font-mono text-[0.72rem] tracking-[0.12em] text-ink uppercase underline decoration-line underline-offset-4 hover:decoration-signal"
                    >
                      {link.label}
                    </TextLink>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
