"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import PageLink from "./PageLink";
import { Close, Instagram, Menu, Phone, WhatsApp } from "./Icons";
import { brand, navPages, pages, whatsappLink } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <div className="bg-forest text-[0.8rem] text-white/75">
        <div className="mx-auto flex h-10 max-w-[1400px] items-center justify-between px-4 md:px-8">
          <p className="truncate">
            Shitje me pakicë dhe shumicë <span className="mx-2 hidden text-brass sm:inline">•</span>
            <span className="hidden sm:inline">Projektim, zbatim dhe mirëmbajtje kopshtesh</span>
          </p>
          <div className="hidden items-center gap-5 md:flex">
            <a href={brand.phoneHref} className="flex items-center gap-2 hover:text-white">
              <Phone className="h-3.5 w-3.5" />
              {brand.phone}
            </a>
            <a
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white"
            >
              <Instagram className="h-3.5 w-3.5" />
              {brand.followers} ndjekës
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-cream/85 shadow-[0_1px_0_rgba(15,36,27,0.08)] backdrop-blur-xl" : "bg-cream"
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[1400px] items-center justify-between gap-6 px-4 md:px-8">
          <PageLink page="home" className="text-forest" >
            <span className="sr-only">Luxury Garden, kryefaqja</span>
            <Logo />
          </PageLink>

          <nav aria-label="Kryesore" className="hidden lg:block">
            <ul className="flex items-center gap-1 rounded-full bg-white p-1.5 shadow-[0_1px_2px_rgba(15,36,27,0.06)]">
              {navPages.map((key) => (
                <li key={key}>
                  <PageLink
                    page={key}
                    className={`block rounded-full px-4 py-2 text-[0.9rem] font-medium transition-colors ${
                      key === "home" ? "bg-forest text-white" : "text-forest/75 hover:bg-mist hover:text-forest"
                    }`}
                  >
                    {pages[key].label}
                  </PageLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={brand.phoneHref}
              aria-label={`Telefononi ${brand.phone}`}
              className="hidden h-11 w-11 place-items-center rounded-full bg-white text-forest shadow-[0_1px_2px_rgba(15,36,27,0.06)] transition-colors hover:bg-mist sm:grid"
            >
              <Phone />
            </a>
            <a
              href={whatsappLink("Përshëndetje Luxury Garden, dua një ofertë.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark btn-sm hidden sm:inline-flex"
            >
              <WhatsApp className="h-4 w-4 text-whatsapp" />
              Kërko ofertë
            </a>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full bg-forest text-white lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Mbyll menunë" : "Hap menunë"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            aria-label="Menuja"
            className="h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-forest/10 bg-cream px-4 pb-10 pt-4 lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navPages.map((key, i) => (
                <li key={key} className="settle" style={{ animationDelay: `${0.04 * i}s` }}>
                  <PageLink
                    page={key}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-xl font-semibold tracking-tight"
                  >
                    {pages[key].label}
                    <span className="text-brass">→</span>
                  </PageLink>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-3">
              <a
                href={whatsappLink("Përshëndetje Luxury Garden, dua një ofertë.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark w-full"
              >
                <WhatsApp className="h-5 w-5 text-whatsapp" />
                Kërko ofertë në WhatsApp
              </a>
              <a href={brand.phoneHref} className="btn btn-outline w-full">
                <Phone />
                {brand.phone}
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
