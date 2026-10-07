"use client";

import Image from "next/image";
import { Instagram, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { instagramHref, whatsappHref } from "@/data/site";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Sobre mí", href: "#sobre-mi" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50">
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="Ir al inicio">
          <Image
            src="/gallery/vg-logo.png"
            alt="VG Nail Studio"
            width={44}
            height={44}
            className="rounded-full ring-1 ring-espresso/10 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="leading-none">
            <p className="font-display text-2xl font-semibold text-ink">VG</p>
            <p className="text-[10px] uppercase tracking-[0.24em] text-espresso/60">Nail Studio</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-espresso/70 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={instagramHref}
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full border border-espresso/10 text-espresso transition hover:-translate-y-0.5 hover:border-champagne hover:text-ink"
            aria-label="Instagram de VG Nail Studio"
          >
            <Instagram size={18} />
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-espresso"
          >
            <MessageCircle size={18} />
            Agendar
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-espresso/10 text-ink md:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="section-shell pb-5 md:hidden">
          <div className="rounded-2xl border border-espresso/10 bg-porcelain p-3 shadow-soft">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-espresso/75 hover:bg-veil"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle size={18} />
              Agendar turno
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
