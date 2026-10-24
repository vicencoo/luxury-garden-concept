"use client";

import { useRef } from "react";
import Image from "./Photo";
import { ArrowLeft, ArrowRight, Instagram, Play } from "./Icons";
import { brand, reels } from "@/lib/content";

/** Recent projects as Instagram reels: each card opens the video on Instagram. */
export default function Work() {
  const rail = useRef<HTMLUListElement>(null);

  function scroll(direction: 1 | -1) {
    const node = rail.current;
    if (!node) return;
    node.scrollBy({ left: direction * node.clientWidth * 0.8, behavior: "smooth" });
  }

  return (
    <section aria-labelledby="punet-titulli" className="py-20 lg:py-28">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="section-label">Punët tona</p>
          <h2 id="punet-titulli" className="mt-3 max-w-[44rem] text-h2">
            Projekte të realizuara
          </h2>
          <p className="mt-4 max-w-[32rem] text-muted">
            Shikoni videot e punëve tona të fundit, nga serra deri te kopshti i
            përfunduar.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
            <Instagram />
            {brand.handle}
          </a>
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Projektet e mëparshme"
            className="grid h-11 w-11 place-items-center rounded-full bg-white text-forest shadow-[0_1px_2px_rgba(15,36,27,0.08)] transition-colors hover:bg-mist"
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Projektet e tjera"
            className="grid h-11 w-11 place-items-center rounded-full bg-forest text-white transition-colors hover:bg-moss"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <ul
        ref={rail}
        className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-4 px-4 md:gap-4 md:scroll-px-8 md:px-8 xl:px-[max(2rem,calc((100vw-1400px)/2+2rem))]"
      >
        {reels.map((item) => (
          <li key={item.href} className="w-[62vw] shrink-0 snap-start sm:w-[38vw] md:w-[28vw] lg:w-[19rem]">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[9/16] overflow-hidden rounded-3xl bg-mist"
            >
              <Image
                src={item.photo.src}
                alt={item.photo.alt}
                fill
                sizes="(min-width: 1024px) 304px, 62vw"
                className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
              <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/25 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                <Play className="ml-0.5 h-5 w-5" />
              </span>
              <span className="absolute inset-x-4 bottom-4 text-sm font-semibold text-white">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
