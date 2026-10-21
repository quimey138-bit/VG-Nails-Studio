import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappHref } from "@/data/site";

export default function Hero() {
  return (
    <section id="inicio" className="section-shell flex min-h-screen items-center pt-28">
      <div className="grid w-full items-center gap-10 pb-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div className="animate-float-in">
          <h1 className="font-display text-[clamp(4rem,17vw,8.5rem)] font-semibold leading-[0.78] text-ink">
            VG
            <span className="mt-4 block text-[clamp(2.6rem,10vw,5.6rem)] text-espresso">
              Nail Studio
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-xl leading-8 text-espresso/74">
            Uñas esculpidas y nail art hecho a mano con una estética elegante,
            cuidada y pensada para que tus manos se vean protagonistas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 text-base font-semibold text-white shadow-glow transition hover:-translate-y-1 hover:bg-espresso"
            >
              <MessageCircle size={20} />
              Agendar turno
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full border border-espresso/15 bg-white/55 px-7 py-4 text-base font-semibold text-ink transition hover:-translate-y-1 hover:border-champagne hover:bg-white"
            >
              Ver trabajos
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px] animate-float-in [animation-delay:160ms]">
          <div className="image-sheen premium-border relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-veil shadow-soft">
            <Image
              src="/gallery/foto-presentacion.jpeg"
              alt="Van, creadora de VG Nail Studio"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/72 to-transparent p-7 text-white">
              <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                Diseños con caracter
              </p>
              <p className="mt-2 font-display text-4xl font-semibold">
                La persona detrás de VG
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
