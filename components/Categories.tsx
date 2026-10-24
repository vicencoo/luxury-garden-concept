import Image from "./Photo";
import PageLink from "./PageLink";
import Reveal from "./Reveal";
import { ArrowRight, ArrowUpRight } from "./Icons";
import { categories } from "@/lib/content";

export default function Categories() {
  return (
    <section aria-labelledby="koleksioni-titulli" className="px-4 pb-20 pt-14 md:px-8 lg:pb-28 lg:pt-20">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label">Koleksioni</p>
            <h2 id="koleksioni-titulli" className="mt-3 max-w-[44rem] text-h2">
              Çfarë gjeni në serrën tonë
            </h2>
          </div>
          <PageLink page="koleksioni" className="btn btn-outline w-fit">
            Shiko koleksionin
            <ArrowRight />
          </PageLink>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
          {categories.map((category, i) => (
            <Reveal as="li" key={category.id} delay={0.06 * i}>
              <PageLink
                page="koleksioni"
                className="group relative block aspect-[3/4] overflow-hidden rounded-3xl bg-mist"
              >
                <Image
                  src={category.photo.src}
                  alt={category.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/10 to-transparent" />
                <span className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white text-forest transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight />
                </span>
                <span className="absolute inset-x-4 bottom-4 text-white md:inset-x-5 md:bottom-5">
                  <span className="block text-lg font-semibold tracking-tight md:text-2xl">{category.label}</span>
                  <span className="mt-1 block text-xs text-white/75 md:text-sm">{category.text}</span>
                </span>
              </PageLink>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
