import Image from "./Photo";
import PageLink from "./PageLink";
import Reveal from "./Reveal";
import { ArrowRight, Instagram, MapPin, Phone, WhatsApp } from "./Icons";
import { brand, photos, whatsappLink } from "@/lib/content";

const channels = [
  { icon: Phone, label: "Telefon", value: brand.phone, href: brand.phoneHref, external: false },
  { icon: WhatsApp, label: "WhatsApp", value: "Shkruani direkt", href: whatsappLink("Përshëndetje Luxury Garden!"), external: true },
  { icon: Instagram, label: "Instagram", value: brand.handle, href: brand.instagram, external: true },
  { icon: MapPin, label: "Serra", value: "Hapni në Google Maps", href: brand.maps, external: true },
];

export default function ContactCta() {
  return (
    <section aria-labelledby="kontakt-titulli" className="px-3 pb-3 pt-20 md:px-5 md:pb-5 lg:pt-28">
      <Reveal className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] bg-forest text-white">
        <Image
          src={photos.gardenNight.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-forest/60" />

        <div className="relative grid gap-10 p-5 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14">
          <div className="flex flex-col justify-center">
            <p className="section-label text-brass">Kontakt</p>
            <h2 id="kontakt-titulli" className="mt-3 text-h2">
              Gati për kopshtin që{" "}
              <span className="font-serif font-normal italic tracking-normal text-brass">meritoni?</span>
            </h2>
            <p className="mt-5 max-w-[30rem] text-lg text-white/70">
              Na tregoni për hapësirën tuaj. Vijmë në vend, ju këshillojmë dhe ju
              dërgojmë një ofertë të qartë.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink("Përshëndetje Luxury Garden, dua të caktoj një vizitë.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <WhatsApp className="h-5 w-5" />
                Caktoni një vizitë
              </a>
              <PageLink page="kontakt" className="btn btn-glass">
                Faqja e kontaktit
                <ArrowRight />
              </PageLink>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-3 lg:self-center">
            {channels.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex h-full flex-col gap-4 rounded-3xl bg-white/[0.07] p-4 ring-1 sm:gap-6 sm:p-5 ring-white/10 backdrop-blur-sm transition-colors hover:bg-white/[0.12]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brass text-forest sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-white/60 sm:text-sm">{label}</span>
                    <span className="mt-0.5 block break-words text-sm font-semibold sm:text-base">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
