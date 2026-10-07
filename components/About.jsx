import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const bullets = [
  "Atención personalizada para elegir forma, largo y diseño.",
  "Enfoque en preparación prolija y cuidado de la uña natural.",
  "Nail art hecho a mano con terminaciones limpias y elegantes."
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 sm:py-28">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative">
          <div className="premium-border image-sheen relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-veil shadow-soft">
            <Image
              src="/gallery/cow-print-coffin.png"
              alt="Diseño de uñas coffin de VG Nail Studio"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-3xl border border-white/65 bg-white/78 p-5 shadow-soft backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-champagne">
              VG Nail Studio
            </p>
            <p className="mt-2 font-display text-3xl font-semibold leading-none text-ink">
              Manos cuidadas, diseño con intención.
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-champagne">
            Sobre mí
          </p>
          <h2 className="mt-3 font-display text-5xl font-semibold leading-none text-ink sm:text-6xl">
            Un estudio pensado para disfrutar el proceso.
          </h2>
          <p className="mt-6 text-lg leading-8 text-espresso/72">
            VG Nail Studio nace de una mirada detallista sobre la belleza de las manos:
            técnica, diseño y una experiencia tranquila de principio a fin. Cada turno se
            trabaja de forma personalizada, cuidando la preparación de la uña natural y
            buscando una terminación que se sienta cómoda, prolija y fiel al estilo de cada clienta.
          </p>
          <div className="mt-8 space-y-4">
            {bullets.map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-1 shrink-0 text-champagne" size={20} />
                <p className="text-base leading-7 text-espresso/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
