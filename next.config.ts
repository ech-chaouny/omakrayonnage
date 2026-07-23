import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Vanilla Three.js manages its own WebGL context; disable dev-only StrictMode
  // double-invoke so the 3D hero initializes once. (Production is unaffected.)
  reactStrictMode: false,
};

export default withNextIntl(nextConfig);
