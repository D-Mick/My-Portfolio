import Image from "next/image";

const shots = [
  {
    src: "/lifteller/request.jpg",
    alt: "",
    className: "absolute top-2 right-3 w-[42%] sm:right-0 sm:w-[48%] sm:origin-top-right sm:-rotate-6",
  },
  {
    src: "/lifteller/liftclip.jpg",
    alt: "Lifteller on iPhone, from the App Store listing",
    className: "absolute top-14 left-1 w-[50%] sm:top-16 sm:left-0 sm:w-[54%]",
  },
] as const;

export function DeviceStage() {
  return (
    <figure className="mx-auto w-full min-w-0 max-w-[320px]">
      <div className="relative h-[460px] w-full max-sm:overflow-hidden sm:h-[500px]">
        {shots.map((shot) => (
          <div
            key={shot.src}
            className={`overflow-hidden rounded-[1.35rem] bg-ink shadow-[var(--device-shadow)] ring-1 ring-[var(--device-ring)] ${shot.className}`}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={704}
              height={1480}
              priority={shot.alt.length > 0}
              className="h-auto w-full"
            />
          </div>
        ))}
      </div>
      <figcaption className="mt-2 text-center font-mono text-[0.68rem] tracking-[0.14em] text-ink-soft uppercase">
        Lifteller · App Store screenshots
      </figcaption>
    </figure>
  );
}
