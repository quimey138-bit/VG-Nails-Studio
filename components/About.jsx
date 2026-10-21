import Image from "next/image";

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 sm:py-28">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative">
          <div className="premium-border image-sheen relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-veil shadow-soft">
            <Image
              src="/gallery/foto-sobre-mi.jpeg"
              alt="Van trabajando en VG Nail Studio"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-3xl border border-white/65 bg-white/78 p-5 shadow-soft backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-champagne">
              La historia detrás de VG
            </p>
            <p className="mt-2 font-display text-3xl font-semibold leading-none text-ink">
              Más que un turno de uñas, tu momento.
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-champagne">
            Sobre mí
          </p>
          <h2 className="mt-3 font-display text-5xl font-semibold leading-none text-ink sm:text-6xl">
            La persona detrás de VGNails.
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-espresso/72">
            <p>¡Hola! Soy Van, la persona detrás de VGNails 🤎</p>
            <p>
              Mi historia con las uñas comenzó en 2017, cuando hice mi primer curso de manicura tradicional. Lo que empezó como una capacitación terminó convirtiéndose en una pasión que, con el tiempo, se transformó en mi profesión y en uno de mis mayores sueños.
            </p>
            <p>
              En 2018 seguí formándome en esmaltado semipermanente y kapping, y en 2021 incorporé las uñas esculpidas. Ese mismo camino me llevó a dar un paso enorme: abrir mi primer local y empezar a construir este proyecto que tanto amo.
            </p>
            <p>
              Pero si hay algo que descubrí en todos estos años, es que mi trabajo va mucho más allá de hacer uñas lindas. Me encanta crear, cuidar cada detalle y verlas felices con el resultado, pero también disfruto muchísimo ese ratito que compartimos: las charlas, las risas, escuchar y acompañar.
            </p>
            <p>
              Porque muchas veces, entre turnos y diseños, también encontramos un espacio para desconectar, desahogarnos y sentirnos un poquito mejor.
            </p>
            <p>
              Detrás de VGNails hay años de esfuerzo, aprendizajes, cambios, desafíos y decisiones difíciles. Hubo momentos en los que tuve que frenar, reorganizar mis prioridades y volver a empezar.
            </p>
            <p>
              En ese camino me acompañaron mis dos grandes motores: mis hijos, hoy de 7 y 3 años, y mi compañero de vida, con quien comparto estos últimos 10 años. Ellos son parte de esta historia y de cada paso que doy para seguir creciendo.
            </p>
            <p>
              Hoy vuelvo a apostar por este sueño con más experiencia, más ganas y la ilusión intacta de seguir haciendo lo que amo. Tener la posibilidad de vivir de mi pasión es un sueño hecho realidad, y cada clienta que confía en mí forma parte de eso.
            </p>
            <p>
              Gracias por estar acá, por conocer mi trabajo y por darme la oportunidad de recibirte en VGNails.
            </p>
            <p className="font-display text-3xl font-semibold leading-tight text-ink">
              Más que un turno de uñas, quiero que encuentres tu momento. ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
