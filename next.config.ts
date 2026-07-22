import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vanilla Three.js manages its own WebGL context; disable dev-only StrictMode
  // double-invoke so the 3D hero initializes once. (Production is unaffected.)
  reactStrictMode: false,
};

export default nextConfig;
