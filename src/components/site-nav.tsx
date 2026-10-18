import Image from "next/image";
import { profile } from "@/content/profile";
import { TextLink } from "@/components/text-link";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#work", index: "01", label: "Work" },
  { href: "#milestones", index: "02", label: "Milestones" },
  { href: "#practice", index: "03", label: "Practice" },
  { href: "#experience", index: "04", label: "Experience" },
  { href: "#contact", index: "05", label: "Contact" },
];

function NavLinks({ className }: { className?: string }) {
  return (
    <nav aria-label="Sections" className={className}>
      <ul className="grid grid-cols-2 gap-x-3 gap-y-2 lg:flex lg:flex-col lg:gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="group flex items-baseline gap-3 font-mono text-[0.68rem] tracking-[0.16em] text-ink-soft uppercase hover:text-ink"
            >
              <span className="text-signal tabular-nums">{link.index}</span>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SiteNav() {
  return (
    <>
      <header className="sticky top-0 z-30 min-w-0 border-b border-line bg-paper/90 backdrop-blur-md lg:hidden">
        <div className="flex items-start justify-between gap-4 px-5 py-3 sm:px-8">
          <div className="flex min-w-0 gap-3">
            <Image
              src="/me.jpg"
              alt=""
              width={420}
              height={420}
              priority
              className="mt-0.5 size-11 shrink-0 border border-line object-cover"
            />
            <div className="min-w-0">
              <a href="#content" className="font-display text-xl leading-tight text-ink">
                {profile.name}
              </a>
              <p className="mt-1 font-mono text-[0.65rem] tracking-[0.16em] text-ink-soft uppercase">
                {profile.title}
              </p>
            </div>
          </div>
          <ThemeToggle className="mt-0.5 shrink-0" />
        </div>
        <NavLinks className="px-5 pb-3 sm:px-8" />
      </header>

      <aside className="hidden lg:block">
        <div className="sticky top-0 flex h-dvh flex-col justify-between py-12 pr-8">
          <div>
            <a href="#content" className="block max-w-[13rem]">
              <Image
                src="/me.jpg"
                alt=""
                width={420}
                height={420}
                priority
                className="mb-5 size-24 border border-line object-cover"
              />
              <span className="block font-display text-[1.65rem] leading-[1.05] text-ink">
                {profile.name}
              </span>
            </a>
            <p className="mt-3 max-w-[12rem] text-sm leading-snug text-ink-soft">
              {profile.title}
              <span className="text-line"> · </span>
              {profile.location}
            </p>
            <NavLinks className="mt-10" />
          </div>

          <div className="space-y-3">
            <ThemeToggle />
            <a
              href={`mailto:${profile.email}`}
              className="block text-sm break-all text-ink underline decoration-line underline-offset-4 hover:decoration-signal"
            >
              {profile.email}
            </a>
            <ul className="flex gap-4">
              {profile.links.map((link) => (
                <li key={link.label}>
                  <TextLink
                    href={link.href}
                    className="font-mono text-[0.68rem] tracking-[0.14em] text-ink-soft uppercase hover:text-ink"
                  >
                    {link.label}
                  </TextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
