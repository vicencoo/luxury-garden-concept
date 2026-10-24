import Image from "./Photo";
import { TreeMark } from "./Logo";
import { ArrowRight, Check, Play, WhatsApp } from "./Icons";
import { brand, photos, reels, whatsappLink } from "@/lib/content";

const promises = ["Pakicë dhe shumicë", "Transport me vinç", "Mirëmbajtje gjatë vitit"];
const proofPhotos = [photos.oliveNight, photos.whiteVases, photos.cycas, photos.palms];

/** Round seal that turns slowly, like a wax stamp on a gift box. */
function Seal() {
  return (
    <div className="relative grid h-28 w-28 place-items-center rounded-full bg-forest shadow-[0_18px_40px_-10px_rgba(0,0,0,0.6)] ring-1 ring-brass/40 md:h-32 md:w-32">
      <svg viewBox="0 0 120 120" className="spin-slow absolute h-28 w-28 text-brass-light md:h-32 md:w-32" aria-hidden="true">
        <defs>
          <path id="seal-path" d="M60 60m-45 0a45 45 0 1 1 90 0a45 45 0 1 1 -90 0" />
        </defs>
        <text fill="currentColor" style={{ fontSize: "9px", letterSpacing: "0.3em", fontWeight: 600 }}>
          <textPath href="#seal-path">LUXURY GARDEN ✦ PREMIUM ✦ </textPath>
        </text>
      </svg>
      <TreeMark className="h-8 w-9 text-brass" />
    </div>
  );
}

export default function Hero() {
  const oliveReel = reels[0];

  return (
    <section id="top" className="px-3 pt-2 md:px-5">
      <div className="grain relative mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] bg-forest text-white">
        {/* lamp-light glows and a fine inner frame */}
        <div aria-hidden="true" className="pointer-events-none absolute -left-48 -top-48 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.2),transparent_62%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-64 right-0 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(44,74,60,0.9),transparent_65%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-3 rounded-[1.6rem] border border-brass/15 md:inset-4" />

        <div className="relative z-10 grid gap-14 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-12 lg:gap-10 lg:px-16 lg:py-16">
          <div className="flex flex-col justify-center lg:col-span-6">
            <p className="settle flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brass sm:text-[0.72rem] sm:tracking-[0.32em]">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-brass" />
              Studio e gjelbërimit luksoz
            </p>

            <h1 className="settle mt-7 text-hero font-medium tracking-[-0.035em]" style={{ animationDelay: "0.78s" }}>
              Krijojmë kopshte{" "}
              <span className="gold-text pr-1 font-serif text-[1.15em] font-normal italic leading-none tracking-normal">
                luksoze
              </span>{" "}
              që lënë përshtypje.
            </h1>

            <p className="settle mt-6 max-w-[33rem] text-lg leading-relaxed text-white/65" style={{ animationDelay: "0.86s" }}>
              Pemë dekorative, bimë, lule natyrale dhe vazo për shtëpinë dhe
              biznesin tuaj, bashkë me një ekip që i projekton, i mbjell dhe i
              mirëmban.
            </p>

            <div className="settle mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.94s" }}>
              <a href="#produktet" className="btn btn-gold">
                <span className="relative">Shiko produktet</span>
                <span className="arrow-dot relative">
                  <ArrowRight />
                </span>
              </a>
              <a
                href={whatsappLink("Përshëndetje Luxury Garden, dua informacion.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glass"
              >
                <WhatsApp className="h-5 w-5 text-whatsapp" />
                Na shkruani në WhatsApp
              </a>
            </div>

            <div
              className="settle mt-11 flex flex-col gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:gap-8"
              style={{ animationDelay: "1.02s" }}
            >
              <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                <span className="flex -space-x-3">
                  {proofPhotos.map((photo) => (
                    <span key={photo.alt} className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-forest">
                      <Image src={photo.src} alt="" fill sizes="40px" className="object-cover" />
                    </span>
                  ))}
                </span>
                <span className="leading-tight">
                  <span className="block text-lg font-semibold">{brand.followers}</span>
                  <span className="block text-xs text-white/55 transition-colors group-hover:text-white/80">
                    ndjekës në Instagram
                  </span>
                </span>
              </a>
              <span aria-hidden="true" className="hidden h-10 w-px bg-white/15 sm:block" />
              <ul className="flex flex-col gap-2 text-sm text-white/75">
                {promises.map((promise) => (
                  <li key={promise} className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-brass" />
                    {promise}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="grid h-[470px] grid-cols-2 grid-rows-2 gap-3 sm:h-[580px]">
              <figure className="settle relative row-span-2 overflow-hidden rounded-[1.75rem] bg-pine" style={{ animationDelay: "0.8s" }}>
                <Image
                  src={photos.oliveNight.src}
                  alt={photos.oliveNight.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 330px, 50vw"
                  className="ken-burns object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-3 bottom-3">
                  <a
                    href={oliveReel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 ring-1 ring-white/20 backdrop-blur-xl transition-colors hover:bg-white/20"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-forest">
                      <Play className="ml-0.5 h-4 w-4" />
                    </span>
                    <span className="leading-tight">
                      <span className="block text-sm font-semibold">Ulli shekullor</span>
                      <span className="hidden text-xs text-white/70 sm:block">Shikoni videon e projektit</span>
                    </span>
                  </a>
                </figcaption>
              </figure>

              <figure className="settle relative overflow-hidden rounded-[1.75rem] bg-pine" style={{ animationDelay: "0.88s" }}>
                <Image src={photos.whiteVases.src} alt={photos.whiteVases.alt} fill priority sizes="(min-width: 1024px) 330px, 50vw" className="object-cover" />
                <span className="chip absolute right-3 top-3 bg-forest/55 text-white ring-1 ring-white/20 backdrop-blur-md">
                  Vazo artizanale
                </span>
              </figure>

              <figure className="settle relative overflow-hidden rounded-[1.75rem] bg-pine" style={{ animationDelay: "0.96s" }}>
                <Image src={photos.yucca.src} alt={photos.yucca.alt} fill sizes="(min-width: 1024px) 330px, 50vw" className="object-cover" />
                <span className="chip absolute bottom-3 right-3 bg-forest/55 text-white ring-1 ring-white/20 backdrop-blur-md">
                  Bimë dekorative
                </span>
              </figure>
            </div>

            <div className="settle absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: "1.3s" }}>
              <div className="float relative grid place-items-center">
                <Seal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
