import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Vanilla Three.js manages its own WebGL context; disable dev-only StrictMode
  // double-invoke so the 3D hero initializes once. (Production is unaffected.)
  reactStrictMode: false,

  // Export 100% statique (dossier `out/`) : le site est hébergé sur un
  // mutualisé Apache/cPanel, sans Node. Donc pas de middleware ni de route API.
  output: "export",
  // Génère /fr/contact/index.html -> Apache sert /fr/contact/ nativement.
  trailingSlash: true,
};

export default withNextIntl(nextConfig);
