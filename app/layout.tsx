import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jakarta",
});

const instrument = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

const description =
  "Luxury Garden shet pemë dekorative, bimë, lule natyrale dhe vazo, me pakicë dhe shumicë, dhe projekton, mbjell e mirëmban kopshte për vila, hotele dhe rezidenca.";

export const metadata: Metadata = {
  title: "Luxury Garden | Pemë dekorative, vazo, lule dhe kopshte",
  description,
  openGraph: {
    type: "website",
    siteName: "Luxury Garden",
    locale: "sq_AL",
    title: "Luxury Garden | Kopshte luksoze, pemë dhe vazo",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f241b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sq" className={`${jakarta.variable} ${instrument.variable}`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
