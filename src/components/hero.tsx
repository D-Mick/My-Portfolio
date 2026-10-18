import { profile } from "@/content/profile";
import { DeviceStage } from "@/components/device-stage";

export function Hero() {
  return (
    <section className="pt-8 lg:pt-14" aria-labelledby="intro-title">
      <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-8">
        <div className="min-w-0">
          <p className="hidden font-mono text-[0.72rem] tracking-[0.18em] text-ink-soft uppercase lg:block">
            {profile.title}
          </p>
          <h1
            id="intro-title"
            className="mt-4 max-w-[18ch] font-display text-[2.7rem] leading-[0.96] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.15rem]"
          >
            {profile.statement}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {profile.summary}
          </p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {profile.platforms.map((platform) => (
              <li
                key={platform}
                className="border border-line bg-paper-raised px-2.5 py-1 font-mono text-[0.68rem] tracking-[0.14em] text-ink uppercase"
              >
                {platform}
              </li>
            ))}
          </ul>
        </div>
        <DeviceStage />
      </div>
    </section>
  );
}
