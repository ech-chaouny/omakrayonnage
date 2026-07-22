import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://omakrayonnage.com"),
  title: {
    default: "OMAK RAYONNAGE — Solutions de stockage industriel à Casablanca",
    template: "%s | OMAK RAYONNAGE",
  },
  description:
    "OMAK RAYONNAGE conçoit, fabrique et installe tout type de rayonnage industriel au Maroc. Partenaire STOW et distributeur exclusif MANORGA.",
  keywords: [
    "rayonnage Maroc",
    "rayonnage industriel Casablanca",
    "palettier",
    "cantilever",
    "mezzanine industrielle",
    "solutions de stockage",
    "OMAK RAYONNAGE",
  ],
  openGraph: {
    title: "OMAK RAYONNAGE — Partenaire STOW & distributeur exclusif MANORGA",
    description:
      "Solutions de stockage et rayonnage industriel au Maroc, de l'étude au SAV, avec fabricants européens certifiés.",
    url: "https://omakrayonnage.com",
    siteName: "OMAK RAYONNAGE",
    locale: "fr_MA",
    type: "website",
    images: [{ url: "/img/og-omak-rayonnage.png", width: 1200, height: 630, alt: "Équipe OMAK RAYONNAGE" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
