"use client";

import { useState } from "react";
import Image from "./Photo";
import PageLink from "./PageLink";
import { ArrowRight, Store, WhatsApp } from "./Icons";
import { categories, products, whatsappLink, type Category } from "@/lib/content";

type Filter = Category | "all";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "Të gjitha" },
  ...categories.map((c) => ({ id: c.id, label: c.label })),
];

// "All" shows a mix: the first two of every category.
const featured = categories.flatMap((c) => products.filter((p) => p.category === c.id).slice(0, 2));

export default function Products() {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = filter === "all" ? featured : products.filter((p) => p.category === filter);
  const labelFor = (id: Category) => categories.find((c) => c.id === id)?.label;

  return (
    <section id="produktet" aria-labelledby="produktet-titulli" className="scroll-mt-24 bg-white px-4 py-20 md:px-8 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label">Produktet</p>
            <h2 id="produktet-titulli" className="mt-3 max-w-[44rem] text-h2">
              Zgjidhni, na shkruani, ne e sjellim
            </h2>
            <p className="mt-4 max-w-[34rem] text-muted">
              Klikoni “Porosit” te çdo produkt dhe na shkruani direkt në
              WhatsApp për çmimin, përmasat dhe transportin.
            </p>
          </div>
          <PageLink page="produktet" className="btn btn-outline w-fit">
            Të gjitha produktet
            <ArrowRight />
          </PageLink>
        </div>

        <div role="tablist" aria-label="Kategoritë" className="no-scrollbar -mx-4 mt-10 flex gap-2 overflow-x-auto px-4 md:mx-0 md:px-0">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                filter === f.id ? "bg-forest text-white" : "bg-mist text-forest/75 hover:text-forest"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 md:gap-x-5 lg:grid-cols-4">
          {shown.map((product) => (
            <li key={product.name} className="settle group flex flex-col transition-transform duration-500 ease-luxe lg:hover:-translate-y-1.5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-mist transition-shadow duration-500 lg:group-hover:shadow-[0_28px_50px_-24px_rgba(15,36,27,0.55)]">
                <Image
                  src={product.photo.src}
                  alt={product.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                />
                <span className="chip absolute left-3 top-3 bg-white/90 text-forest backdrop-blur">
                  {labelFor(product.category)}
                </span>
                {product.tag && (
                  <span className="chip absolute right-3 top-3 hidden bg-brass text-forest sm:inline-flex">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="mt-4 flex flex-1 flex-col px-1">
                <h3 className="text-base font-semibold tracking-tight md:text-lg">{product.name}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted">{product.detail}</p>
                <div className="mt-auto flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-sm font-medium text-forest/70">Çmimi me kërkesë</span>
                  <a
                    href={whatsappLink(`Përshëndetje Luxury Garden, jam i interesuar për: ${product.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark btn-sm lg:group-hover:bg-brass lg:group-hover:text-forest"
                  >
                    <WhatsApp className="h-4 w-4 text-whatsapp" />
                    Porosit
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-start gap-6 rounded-3xl bg-forest p-7 text-white md:flex-row md:items-center md:justify-between md:p-10">
          <div className="flex items-start gap-5">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brass text-forest">
              <Store />
            </span>
            <div>
              <h3 className="text-xl font-semibold md:text-2xl">Blini me shumicë?</h3>
              <p className="mt-1 max-w-[36rem] text-white/70">
                Furnizojmë hotele, restorante, kantiere dhe dyqane me pemë, bimë
                dhe vazo. Na tregoni çfarë ju duhet dhe ju dërgojmë ofertën.
              </p>
            </div>
          </div>
          <a
            href={whatsappLink("Përshëndetje Luxury Garden, dua një ofertë për shumicë.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary shrink-0"
          >
            Kërko ofertë për shumicë
            <span className="arrow-dot">
              <ArrowRight />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
