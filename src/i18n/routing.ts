import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Ordered: fr first (default), then en, ar.
  locales: ["fr", "en", "ar"],
  defaultLocale: "fr",
  // Every locale is prefixed (/fr, /en, /ar). Required by the static export:
  // each URL maps 1:1 to a generated file, with no middleware to rewrite "/".
  // Apache (.htaccess) redirects "/" and the legacy unprefixed URLs to /fr/.
  localePrefix: "always",
  // Visitors switch language manually (no automatic Accept-Language redirect).
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
