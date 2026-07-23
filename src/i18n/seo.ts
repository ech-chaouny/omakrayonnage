import type { Locale } from "./routing";

// og:locale value per app locale.
export const ogLocales: Record<Locale, string> = {
  fr: "fr_MA",
  en: "en_US",
  ar: "ar_MA",
};

function localePath(locale: Locale, path: string) {
  const clean = path === "/" ? "" : path;
  return locale === "fr" ? clean || "/" : `/${locale}${clean}`;
}

// Build canonical + hreflang alternates for a page.
// `path` is the locale-less pathname, e.g. "/" or "/produits/cantilever".
export function buildAlternates(locale: Locale, path: string) {
  return {
    canonical: localePath(locale, path),
    languages: {
      fr: localePath("fr", path),
      en: localePath("en", path),
      ar: localePath("ar", path),
      "x-default": localePath("fr", path),
    },
  };
}
