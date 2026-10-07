import Image from "next/image";
import { Instagram, MessageCircle } from "lucide-react";
import { instagramHref, whatsappHref } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-espresso/10 py-10">
      <div className="section-shell flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/gallery/vg-logo.png"
            alt="VG Nail Studio"
            width={50}
            height={50}
            className="rounded-full ring-1 ring-espresso/10"
          />
          <div>
            <p className="font-display text-2xl font-semibold leading-none text-ink">
              VG Nail Studio
            </p>
            <p className="mt-1 text-sm text-espresso/58">
              Uñas esculpidas y nail art hecho a mano
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <a
            href={instagramHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-espresso/12 px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-champagne hover:bg-white"
          >
            <Instagram size={18} />
            Instagram
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-espresso"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
