import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { buildAlternates, ogLocales } from "@/i18n/seo";
import "../globals.css";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<LayoutProps, "children">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  return {
    metadataBase: new URL("https://omakrayonnage.com"),
    title: {
      default: t("title"),
      template: "%s | OMAK RAYONNAGE",
    },
    description: t("description"),
    keywords: t.raw("keywords") as string[],
    alternates: buildAlternates(locale as Locale, "/"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://omakrayonnage.com",
      siteName: "OMAK RAYONNAGE",
      locale: ogLocales[locale as Locale] ?? "fr_MA",
      type: "website",
      images: [{ url: "/img/og-omak-rayonnage.jpg", width: 1200, height: 630, alt: t("ogImageAlt") }],
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const isArabic = locale === "ar";

  return (
    <html lang={locale} dir={isArabic ? "rtl" : "ltr"}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap" />
        {isArabic && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap"
            />
          </>
        )}
      </head>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
