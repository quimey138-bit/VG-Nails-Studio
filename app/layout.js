import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";

const display = Bodoni_Moda({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Jost({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata = {
  title: "VG Nail Studio | Uñas esculpidas y nail art",
  description:
    "VG Nail Studio en Presidente Derqui: uñas esculpidas, kapping híbrido, semipermanente y nail art hecho a mano."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
