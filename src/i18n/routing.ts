import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Ordered: fr first (default), then en, ar.
  locales: ["fr", "en", "ar"],
  defaultLocale: "fr",
  // French stays at the root (/, /about...), en/ar get a prefix (/en, /ar).
  localePrefix: "as-needed",
  // Always land on French at the root; visitors switch language manually
  // (no automatic Accept-Language redirect).
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
