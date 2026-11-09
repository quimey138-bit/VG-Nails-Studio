import { MapPin, Navigation } from "lucide-react";
import { address, mapEmbedSrc, mapsHref } from "@/data/site";

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 sm:py-28">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <h2 className="font-display text-5xl font-semibold leading-none text-ink sm:text-6xl">
            Te esperamos en Presidente Derqui.
          </h2>
          <p className="mt-6 flex items-start gap-3 text-lg leading-8 text-espresso/72">
            <MapPin size={22} className="mt-1 shrink-0 text-champagne" aria-hidden="true" />
            <span>
              {address.street}
              <br />
              {address.city}
            </span>
          </p>
          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 text-base font-semibold text-white shadow-glow transition hover:-translate-y-1 hover:bg-espresso"
          >
            <Navigation size={18} />
            Cómo llegar
          </a>
        </div>

        <div className="premium-border relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-veil shadow-soft">
          <iframe
            title="Mapa de VG Nail Studio"
            src={mapEmbedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
