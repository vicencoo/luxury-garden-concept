import Image from "./Photo";
import PageLink from "./PageLink";
import Reveal from "./Reveal";
import { ArrowRight, Check } from "./Icons";
import { brand, photos, values } from "@/lib/content";

export default function About() {
  return (
    <section aria-labelledby="rreth-titulli" className="bg-white px-4 py-20 md:px-8 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative grid grid-cols-2 gap-3 md:gap-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-mist">
            <Image src={photos.oliveCrane.src} alt={photos.oliveCrane.alt} fill sizes="(min-width: 1024px) 22vw, 45vw" className="object-cover" />
          </div>
          <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-3xl bg-mist">
            <Image src={photos.nursery.src} alt={photos.nursery.alt} fill sizes="(min-width: 1024px) 22vw, 45vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-5 left-1/2 w-[78%] -translate-x-1/2 rounded-2xl bg-forest p-5 text-white shadow-xl md:w-[60%]">
            <p className="text-3xl font-bold tracking-tight text-brass">{brand.followers}</p>
            <p className="text-sm text-white/75">njerëz ndjekin punën tonë në Instagram</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="section-label">Rreth nesh</p>
          <h2 id="rreth-titulli" className="mt-3 text-h2">
            Gjelbërim me{" "}
            <span className="font-serif font-normal italic tracking-normal text-moss">standard luksi</span>
          </h2>
          <p className="mt-5 max-w-[34rem] text-lg text-muted">
            Luxury Garden sjell pemë dekorative të të gjitha llojeve, lule
            natyrale dhe vazo, dhe i kthen në kopshte, tarraca dhe ambiente të
            gjelbra për vila, hotele, restorante dhe rezidenca.
          </p>
          <ul className="mt-8 space-y-4">
            {values.map((value) => (
              <li key={value.title} className="flex gap-4 rounded-2xl bg-cream p-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest text-brass">
                  <Check className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-semibold">{value.title}</span>
                  <span className="block text-sm text-muted">{value.text}</span>
                </span>
              </li>
            ))}
          </ul>
          <PageLink page="rrethNesh" className="btn btn-dark mt-9">
            Më shumë rreth nesh
            <ArrowRight />
          </PageLink>
        </Reveal>
      </div>
    </section>
  );
}
