"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const LABELS: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  ar: "ع",
};

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={`flex items-center gap-0.5 rounded-full border border-white/12 bg-white/[.06] p-0.5 ${className}`}
      role="group"
      aria-label="Language"
    >
      {routing.locales.filter((l) => l !== "ar").map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            aria-current={active ? "true" : undefined}
            onClick={() => router.replace(pathname, { locale: l })}
            className={`min-w-[26px] rounded-full px-2 py-1.5 text-[11px] font-bold uppercase tracking-[.04em] transition-colors sm:min-w-[30px] sm:px-2.5 sm:text-[12px] ${
              active ? "bg-orange text-white" : "text-white/62 hover:text-white"
            }`}
          >
            {LABELS[l]}
          </button>
        );
      })}
    </div>
  );
}
