import Logo from "./Logo";
import PageLink from "./PageLink";
import { Instagram, MapPin, Phone, WhatsApp } from "./Icons";
import { brand, categories, navPages, pages, whatsappLink } from "@/lib/content";

const heading = "text-sm font-semibold text-white";
const linkClass = "text-sm text-white/60 transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="mx-auto max-w-[1400px] rounded-[2rem] bg-forest px-5 pb-24 pt-12 text-white sm:pb-8 sm:pt-14 sm:px-10 lg:px-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-12 lg:gap-12">
          <div className="col-span-2 lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-[20rem] text-sm text-white/60">
              Lule natyrale, pemë dekorative të të gjitha llojeve, projekte dhe
              zbatim të zonave të gjelbra.
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-brass hover:text-forest"
              >
                <Instagram />
              </a>
              <a
                href={whatsappLink("Përshëndetje Luxury Garden!")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-brass hover:text-forest"
              >
                <WhatsApp />
              </a>
              <a
                href={brand.maps}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lokacioni në Google Maps"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-brass hover:text-forest"
              >
                <MapPin />
              </a>
            </div>
          </div>

          <nav aria-label="Faqet" className="lg:col-span-2">
            <p className={heading}>Faqet</p>
            <ul className="mt-4 space-y-3">
              {navPages.map((key) => (
                <li key={key}>
                  <PageLink page={key} className={linkClass}>
                    {pages[key].label}
                  </PageLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Produktet" className="lg:col-span-3">
            <p className={heading}>Produktet</p>
            <ul className="mt-4 space-y-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <PageLink page="produktet" className={linkClass}>
                    {category.label}
                  </PageLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-2 lg:col-span-3">
            <p className={heading}>Na kontaktoni</p>
            <a href={brand.phoneHref} className="mt-4 flex items-center gap-2 text-xl font-semibold transition-colors hover:text-brass">
              <Phone className="h-5 w-5 text-brass" />
              {brand.phone}
            </a>
            <a
              href={whatsappLink("Përshëndetje Luxury Garden, dua një ofertë.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm mt-5"
            >
              <WhatsApp />
              Kërko ofertë
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>© 2026 Luxury Garden. Të gjitha të drejtat e rezervuara.</p>
          <p>Pemë dekorative · Vazo · Lule · Kopshte</p>
        </div>
      </div>
    </footer>
  );
}
