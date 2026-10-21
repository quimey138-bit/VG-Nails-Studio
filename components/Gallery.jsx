"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { filters, gallery } from "@/data/site";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const carouselRef = useRef(null);

  const activeCategory = filters.find((filter) => filter.id === activeFilter);
  const visibleItems = useMemo(() => {
    if (activeFilter === "all") return gallery;
    return gallery.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const moveCarousel = (direction) => {
    carouselRef.current?.scrollBy({
      left: direction * carouselRef.current.clientWidth * 0.72,
      behavior: "smooth"
    });
  };

  return (
    <section id="portfolio" className="bg-[#F1D4B5] py-20 text-ink sm:py-28">
      <div className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-champagne">
              Portfolio
            </p>
            <h2 className="mt-3 font-display text-5xl font-semibold leading-none sm:text-6xl">
              Diseños reales, con identidad propia.
            </h2>
            <p className="mt-5 text-lg leading-8 text-espresso/70">
              Explorá cada línea de trabajo y deslizá para ver los diseños.
            </p>
          </div>
          <p className="rounded-full border border-espresso/15 px-5 py-3 text-sm text-espresso/70">
            {visibleItems.length} trabajos visibles
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => {
                setActiveFilter(filter.id);
                carouselRef.current?.scrollTo({ left: 0, behavior: "smooth" });
              }}
              className={
                activeFilter === filter.id
                  ? "rounded-2xl border border-espresso bg-espresso p-4 text-left text-white shadow-soft transition hover:-translate-y-1"
                  : "rounded-2xl border border-espresso/12 bg-white/55 p-4 text-left text-ink transition hover:-translate-y-1 hover:border-champagne hover:bg-white"
              }
            >
              <span className="block text-sm font-semibold">{filter.label}</span>
              <span
                className={
                  activeFilter === filter.id
                    ? "mt-1 block text-xs leading-5 text-white/70"
                    : "mt-1 block text-xs leading-5 text-espresso/62"
                }
              >
                {filter.description}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-espresso/58">
              Selección
            </p>
            <h3 className="mt-1 font-display text-3xl font-semibold text-ink">
              {activeCategory?.label}
            </h3>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => moveCarousel(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-espresso/15 bg-white/60 text-ink transition hover:bg-white"
              aria-label="Ver trabajos anteriores"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => moveCarousel(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-espresso/15 bg-white/60 text-ink transition hover:bg-white"
              aria-label="Ver más trabajos"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {visibleItems.length > 0 ? (
          <div
            ref={carouselRef}
            className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {visibleItems.map((item) => (
              <article
                key={item.src}
                className="group image-sheen relative min-w-[82%] snap-start overflow-hidden rounded-[1.35rem] bg-white/20 sm:min-w-[47%] lg:min-w-[31%]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.title + " - " + activeCategory?.label}
                    fill
                    sizes="(min-width: 1024px) 31vw, (min-width: 640px) 47vw, 82vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/78 via-black/18 to-transparent p-4 text-white sm:p-5">
                  <p className="font-display text-2xl font-semibold">{item.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/72">
                    {activeCategory?.label}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-[1.35rem] border border-dashed border-espresso/20 bg-white/35 px-6 py-16 text-center">
            <p className="font-display text-3xl font-semibold text-ink">
              Próximamente
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-espresso/65">
              Acá vas a poder mostrar los próximos trabajos de esta categoría.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
