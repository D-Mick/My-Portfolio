import { profile } from "@/content/profile";
import { Section } from "@/components/section";
import { TextLink } from "@/components/text-link";

export function Contact() {
  return (
    <Section id="contact" index="05" title="Contact">
      <p className="max-w-md text-base leading-relaxed text-ink-soft">{profile.contactNote}</p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-block max-w-full font-display text-4xl leading-none tracking-tight break-words text-ink underline decoration-signal/50 decoration-1 underline-offset-[10px] hover:decoration-signal sm:text-5xl"
      >
        {profile.email}
      </a>
      <a
        href={profile.phoneHref}
        className="mt-4 block font-mono text-sm tracking-wide text-ink-soft hover:text-ink"
      >
        {profile.phone}
      </a>
      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
        {profile.links.map((link) => (
          <li key={link.label}>
            <TextLink
              href={link.href}
              className="font-mono text-[0.72rem] tracking-[0.14em] text-ink uppercase underline decoration-line underline-offset-4 hover:decoration-signal"
            >
              {link.label}
            </TextLink>
          </li>
        ))}
      </ul>
    </Section>
  );
}
