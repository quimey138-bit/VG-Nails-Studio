"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { filters, gallery } from "@/data/site";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const visibleItems = useMemo(() => {
    if (activeFilter === "Todos") return gallery;
    return gallery.filter(
      (item) => item.shape === activeFilter || item.style === activeFilter
    );
  }, [activeFilter]);

  return (
        <section id="portfolio" className="bg-[#F1D4B5] py-20 text-ink sm:py-28">      <div className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-champagne">
              Portfolio
            </p>
            <h2 className="mt-3 font-display text-5xl font-semibold leading-none sm:text-6xl">
              Diseños reales, con identidad propia.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/66">
              Filtrá por forma o estilo para mostrar rápidamente distintas líneas de trabajo
              durante la reunión.
            </p>
          </div>
          <p className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/60">
            {visibleItems.length} trabajos visibles
          </p>
        </div>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 rounded-full border px-5 py-3 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "border-champagne bg-champagne text-ink"
                  : "border-white/12 bg-white/5 text-white/72 hover:border-white/30 hover:bg-white/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {visibleItems.map((item, index) => (
            <article
              key={item.src}
              className={`group image-sheen relative overflow-hidden rounded-[1.35rem] bg-white/5 ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div className={index === 0 ? "aspect-square" : "aspect-[4/5]"}>
                <Image
                  src={item.src}
                  alt={`${item.title} - ${item.shape}, ${item.style}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-black/78 via-black/18 to-transparent p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-5">
                <p className="font-display text-2xl font-semibold">{item.title}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/72">
                  {item.shape} · {item.style}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
