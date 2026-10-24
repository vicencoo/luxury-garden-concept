import { whatsappLink } from "@/lib/content";
import { WhatsApp } from "./Icons";

/** Always-visible WhatsApp button, the fastest way for a visitor to ask. */
export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Përshëndetje Luxury Garden, kam një pyetje.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Na shkruani në WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_12px_30px_-6px_rgba(37,211,102,0.6)] transition-transform hover:scale-105"
    >
      <WhatsApp className="h-7 w-7" />
    </a>
  );
}
