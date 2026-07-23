import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

const messageLoaders = {
  fr: () => import("../messages/fr.json"),
  en: () => import("../messages/en.json"),
  ar: () => import("../messages/ar.json"),
};

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
  const loadMessages = messageLoaders[locale];

  return {
    locale,
    messages: (await loadMessages()).default,
  };
});
