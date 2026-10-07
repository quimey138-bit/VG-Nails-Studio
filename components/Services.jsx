import { Gem, Hand, Palette, ShieldCheck } from "lucide-react";
import { services } from "@/data/site";

const icons = [ShieldCheck, Hand, Gem, Palette];

export default function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-champagne">
            Servicios
          </p>
          <h2 className="mt-3 font-display text-5xl font-semibold leading-none text-ink sm:text-6xl">
            Una carta simple, cuidada y flexible.
          </h2>
          <p className="mt-5 text-lg leading-8 text-espresso/70">
            Tratamientos pensados para acompañar distintos estilos: desde una base
            natural y resistente hasta diseños protagonistas con detalle artesanal.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <article
                key={service.title}
                className="group min-h-[340px] rounded-[1.4rem] border border-espresso/10 bg-white/58 p-8 shadow-[0_18px_60px_rgba(58,43,35,0.06)] transition duration-300 hover:-translate-y-2 hover:border-champagne/55 hover:bg-white"              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-veil text-espresso transition group-hover:bg-ink group-hover:text-white">
                  <Icon size={21} />
                </div>
                <h3 className="mt-7 font-display text-3xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 min-h-28 text-sm leading-6 text-espresso/70">{service.description}</p>
                <p className="mt-5 border-t border-espresso/10 pt-4 text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
                  {service.detail}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
