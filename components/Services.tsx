import Image from "./Photo";
import Reveal from "./Reveal";
import { ArrowRight, Care, Check, Crane, Plan, WhatsApp } from "./Icons";
import { services, steps, whatsappLink } from "@/lib/content";

const icons = { plan: Plan, crane: Crane, care: Care };

export default function Services() {
  return (
    <section id="sherbimet" aria-labelledby="sherbimet-titulli" className="scroll-mt-24 px-3 py-3 md:px-5">
      <div className="mx-auto max-w-[1400px] rounded-[2rem] bg-forest px-4 py-14 text-white sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label text-brass">Shërbimet</p>
            <h2 id="sherbimet-titulli" className="mt-3 max-w-[40rem] text-h2">
              Nga projekti te{" "}
              <span className="font-serif font-normal italic tracking-normal text-brass">mirëmbajtja</span>
            </h2>
          </div>
          <p className="max-w-[26rem] text-white/65">
            Një ekip i vetëm për gjithçka: projektin, pemët, transportin,
            mbjelljen dhe kujdesin që e mban kopshtin të bukur.
          </p>
        </Reveal>

        <ul className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-4 px-4 sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:mt-12 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:gap-5">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal as="li" key={service.title} delay={0.08 * i} className="flex w-[84%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl bg-pine sm:w-[60%] md:w-auto">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.photo.src}
                    alt={service.photo.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-brass text-forest">
                    <Icon />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
                  <h3 className="text-xl sm:text-2xl">{service.title}</h3>
                  <p className="mt-3 text-[0.95rem] text-white/65 sm:text-base">{service.text}</p>
                  <ul className="mt-5 space-y-2.5">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm text-white/85">
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-brass/20 text-brass">
                          <Check className="h-3 w-3" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(`Përshëndetje Luxury Garden, dua një ofertë për: ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-glass btn-sm mt-7 w-fit"
                  >
                    <WhatsApp className="h-4 w-4 text-whatsapp" />
                    Kërko ofertë
                  </a>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-14 md:mt-20">
          <h3 className="text-2xl md:text-3xl">Si punojmë</h3>
          <ol className="mt-6 grid grid-cols-2 gap-3 md:mt-8 md:gap-4 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="relative rounded-3xl border border-white/10 p-4 sm:p-6">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-xs font-bold text-forest sm:h-11 sm:w-11 sm:text-sm">
                  0{i + 1}
                </span>
                {i < steps.length - 1 && (
                  <ArrowRight className="absolute right-6 top-9 hidden h-5 w-5 text-brass lg:block" />
                )}
                <h4 className="mt-4 text-[0.95rem] font-semibold leading-snug sm:mt-5 sm:text-lg">{step.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-white/60 sm:text-sm">{step.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
