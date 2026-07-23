import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buildAlternates } from "@/i18n/seo";
import type { Locale } from "@/i18n/routing";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { products } from "@/lib/products";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.products" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale as Locale, "/produits"),
  };
}

export default async function ProduitsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProduitsContent />;
}

function ProduitsContent() {
  const t = useTranslations("productsPage");
  const tp = useTranslations("catalog.products");

  return (
    <>
      <Nav />
      <main className="bg-bg text-ink">
        <section id="top" className="px-[max(22px,4vw)] pb-12 pt-28 md:pt-30">
          <div className="mx-auto max-w-[1240px] overflow-hidden rounded-[30px] border border-black/10 bg-white p-3 shadow-[0_22px_80px_rgba(17,19,21,.1)]">
            <div className="omak-dark-pattern rounded-[24px] px-6 py-12 text-white md:px-10 md:py-16">
              <Reveal>
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("hero.eyebrow")}</p>
                <div className="mt-4 grid gap-6 lg:grid-cols-[.9fr_1fr] lg:items-end">
                  <h1 className="max-w-[13ch] text-[clamp(38px,5.4vw,72px)] font-semibold leading-[.96] tracking-[-.04em]">
                    {t("hero.title")}
                  </h1>
                  <p className="max-w-[56ch] text-[16px] font-medium leading-[1.7] text-white/64">{t("hero.intro")}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="px-[max(22px,4vw)] py-10 md:py-16">
          <div className="mx-auto grid max-w-[1240px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Reveal key={product.slug}>
                <Link
                  href={`/produits/${product.slug}`}
                  className="group block overflow-hidden rounded-[26px] border border-black/10 bg-white p-3 shadow-[0_16px_50px_rgba(17,19,21,.07)] transition-all hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(17,19,21,.12)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-bg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={tp(`${product.slug}.title`)}
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-orange shadow-[0_10px_28px_rgba(17,19,21,.12)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[.18em] text-orange">{tp(`${product.slug}.eyebrow`)}</p>
                    <h2 className="mt-2 text-[25px] font-semibold leading-[1.05] tracking-[-.02em]">{tp(`${product.slug}.title`)}</h2>
                    <p className="mt-3 min-h-[44px] text-[14px] font-medium leading-[1.55] text-ink2">{tp(`${product.slug}.caption`)}</p>
                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-black/10 pt-4">
                      <span className="rounded-full bg-bg px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.11em] text-ink2">
                        {product.partner}
                      </span>
                      <span className="text-[13px] font-bold uppercase tracking-[.08em] text-orange">
                        {t("cardDetails")} →
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="px-[max(22px,4vw)] py-10 md:py-16">
          <div className="omak-dark-pattern mx-auto grid max-w-[1240px] gap-6 rounded-[30px] p-6 text-white shadow-[0_22px_80px_rgba(17,19,21,.12)] md:grid-cols-[1fr_auto] md:items-center md:p-9">
            <Reveal>
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("cta.eyebrow")}</p>
                <h2 className="mt-3 max-w-[18ch] text-[clamp(28px,4vw,50px)] font-semibold leading-[1] tracking-[-.03em]">
                  {t("cta.title")}
                </h2>
              </div>
            </Reveal>
            <Reveal>
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-orange px-7 py-4 text-[14px] font-bold text-white shadow-[0_14px_34px_rgba(242,72,28,.32)] transition-colors hover:bg-orangedark"
              >
                {t("cta.quote")} →
              </Link>
            </Reveal>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
