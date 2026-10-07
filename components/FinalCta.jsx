import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappHref } from "@/data/site";

export default function FinalCta() {
  return (
    <section className="section-shell py-10 sm:py-16">
      <div className="overflow-hidden rounded-[2rem] bg-[#FFF7EF] px-6 py-12 text-center text-ink shadow-soft sm:px-10 sm:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-champagne">
          Turnos por WhatsApp
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-5xl font-semibold leading-none sm:text-7xl">
          Llevá tu próxima idea de uñas a VG Nail Studio.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/68">
          Compartí una referencia, elegí el estilo y coordiná tu turno directamente por WhatsApp.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="group mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-1 hover:bg-[#AB7743]"
        >
          <MessageCircle size={20} />
          Agendar turno
          <ArrowRight size={18} className="transition group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
