import "./globals.css";

export const metadata = {
  title: "VG Nail Studio | Uñas esculpidas y nail art",
  description:
    "Landing demo para VG Nail Studio: uñas esculpidas, kapping gel, semipermanente y nail art hecho a mano."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
