import Image from "./Photo";
import { marquee } from "@/lib/content";

function Sparkle() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5 text-brass">
      <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" />
    </svg>
  );
}

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {marquee.map((item) => (
        <li key={item.label} className="flex items-center gap-4 pr-10 md:gap-5 md:pr-14">
          <span className="relative h-9 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-forest/10 md:h-11 md:w-[4.5rem]">
            <Image src={item.photo.src} alt="" fill sizes="72px" className="object-cover" />
          </span>
          <span className="whitespace-nowrap text-lg font-medium tracking-tight text-forest md:text-[1.4rem]">
            {item.label}
          </span>
          <Sparkle />
        </li>
      ))}
    </ul>
  );
}

/** Slow ribbon of what we grow and do, between the hero and the page. Pauses on hover. */
export default function Marquee() {
  return (
    <div className="marquee relative mt-6 overflow-hidden py-4 md:mt-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent md:w-40" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent md:w-40" />
      <p className="sr-only">{marquee.map((item) => item.label).join(", ")}</p>
      <div className="marquee-track flex w-max" aria-hidden="true">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
