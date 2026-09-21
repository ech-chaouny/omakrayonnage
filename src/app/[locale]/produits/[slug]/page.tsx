import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buildAlternates } from "@/i18n/seo";
import type { Locale } from "@/i18n/routing";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { getProduct, products, type Product } from "@/lib/products";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

function MiniCheck() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const tm = await getTranslations({ locale, namespace: "metadata.productDetail" });
  const product = getProduct(slug);

  if (!product) {
    return { title: tm("fallback") };
  }

  const tp = await getTranslations({ locale, namespace: "catalog.products" });
  const title = tp(`${slug}.title`);
  const intro = tp(`${slug}.intro`);

  return {
    title,
    description: `${title} ${tm("descriptionPrefix")}: ${intro}`,
    alternates: buildAlternates(locale as Locale, `/produits/${slug}`),
    openGraph: {
      title: `${title} | OMAK RAYONNAGE`,
      description: intro,
      images: [{ url: product.image, width: 1200, height: 900, alt: title }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const product = getProduct(slug);
  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return <ProductDetailContent product={product} related={relatedProducts} />;
}

function ProductDetailContent({ product, related }: { product: Product; related: Product[] }) {
  const t = useTranslations("productDetail");
  const tp = useTranslations("catalog.products");
  const slug = product.slug;
  const isHeavyRacking = slug === "rayonnage-lourd";

  const stats = tp.raw(`${slug}.stats`) as Array<[string, string]>;
  const uses = tp.raw(`${slug}.uses`) as string[];
  const advantages = tp.raw(`${slug}.advantages`) as string[];

  return (
    <>
      <Nav />
      <main className="bg-bg text-ink">
        <section id="top" className="px-[max(16px,4vw)] pb-8 pt-24 md:px-[max(22px,4vw)] md:pb-10 md:pt-30">
          <div className="mx-auto max-w-[1240px] overflow-hidden rounded-[24px] border border-black/10 bg-white p-2 shadow-[0_22px_80px_rgba(17,19,21,.09)] md:rounded-[30px] md:p-3 md:shadow-[0_22px_80px_rgba(17,19,21,.1)]">
            <div className="grid gap-3 lg:grid-cols-[1fr_.92fr]">
              <div className="omak-dark-pattern rounded-[22px] p-5 text-white md:rounded-[24px] md:p-8 lg:p-10">
                <Reveal>
                  <Link href="/#produits" className="text-[12px] font-bold uppercase tracking-[.18em] text-white/50 transition-colors hover:text-white">
                    ← {t("back")}
                  </Link>
                  <p className="mt-7 text-[12px] font-bold uppercase tracking-[.24em] text-orange md:mt-9">{tp(`${slug}.eyebrow`)}</p>
                  <h1 className="mt-4 max-w-[12ch] text-[34px] font-semibold leading-[.96] tracking-[-.04em] md:text-[clamp(38px,5.2vw,70px)]">
                    {tp(`${slug}.title`)}
                  </h1>
                  <p className="mt-4 max-w-[58ch] text-[14px] font-medium leading-[1.65] text-white/66 md:mt-5 md:text-[16px] md:leading-[1.7]">{tp(`${slug}.intro`)}</p>
                </Reveal>

                <div className="mt-6 grid gap-2 sm:grid-cols-3 md:mt-8 md:gap-3">
                  {stats.map(([value, label]) => (
                    <Reveal key={value}>
                      <div className="rounded-[16px] border border-white/10 bg-white/[.06] px-3 py-3 md:rounded-[18px] md:px-4 md:py-4">
                        <p className="text-[10px] font-bold uppercase tracking-[.16em] text-white/42">{value}</p>
                        <p className="mt-2 text-[15px] font-semibold leading-none text-white md:text-[18px]">{label}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3 md:mt-8">
                  <Link
                    href="/contact"
                    className="rounded-full bg-orange px-5 py-3 text-[13px] font-bold text-white shadow-[0_14px_34px_rgba(242,72,28,.3)] transition-colors hover:bg-orangedark md:px-6 md:text-[14px]"
                  >
                    {t("quote")} →
                  </Link>
                  <Link
                    href="/#produits"
                    className="rounded-full border border-white/14 px-5 py-3 text-[13px] font-bold text-white/78 transition-colors hover:text-white md:px-6 md:text-[14px]"
                  >
                    {t("viewRange")}
                  </Link>
                </div>
              </div>

              <Reveal className="reveal-img">
                <div className="relative min-h-[250px] overflow-hidden rounded-[22px] bg-white md:min-h-[360px] md:rounded-[24px] lg:min-h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.image} alt={tp(`${slug}.title`)} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(8,8,14,.7))]" />
                  <div className="absolute bottom-3 left-3 right-3 rounded-[18px] border border-white/18 bg-white/92 p-3 shadow-[0_18px_44px_rgba(17,19,21,.14)] backdrop-blur-md md:bottom-5 md:left-5 md:right-5 md:rounded-[22px] md:p-5 md:shadow-[0_18px_44px_rgba(17,19,21,.16)]">
                    <p className="text-[11px] font-bold uppercase tracking-[.18em] text-orange">{t("manufacturer")}</p>
                    <p className="mt-1 text-[18px] font-semibold tracking-[-.02em] text-ink md:text-[22px]">{product.partner}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="px-[max(16px,4vw)] py-6 md:px-[max(22px,4vw)] md:py-16">
          <div className={`mx-auto grid max-w-[1240px] gap-6 ${isHeavyRacking ? "" : "lg:grid-cols-[.9fr_1.1fr]"}`}>
            <Reveal>
              <div className="rounded-[24px] border border-black/10 bg-white p-4 shadow-[0_18px_60px_rgba(17,19,21,.07)] md:rounded-[30px] md:p-7">
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("usage.eyebrow")}</p>
                <h2 className={`mt-3 ${isHeavyRacking ? "max-w-[30ch]" : "max-w-[12ch]"} text-[28px] font-semibold leading-[1] tracking-[-.03em] md:text-[clamp(30px,4vw,48px)]`}>
                  {isHeavyRacking ? tp(`${slug}.usageTitle`) : t("usage.title")}
                </h2>
                <div className="mt-5 grid gap-3 md:mt-7">
                  {uses.map((item, index) => (
                    <div key={item} className="flex gap-3 rounded-[16px] border border-black/10 bg-bg p-3 text-[13px] font-semibold leading-[1.45] text-ink2 md:rounded-[18px] md:p-4 md:text-[14px]">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-orange text-white">
                        {isHeavyRacking ? String(index + 1).padStart(2, "0") : <MiniCheck />}
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {!isHeavyRacking && <Reveal>
              <div className="rounded-[24px] border border-black/10 bg-white p-4 shadow-[0_18px_60px_rgba(17,19,21,.07)] md:rounded-[30px] md:p-7">
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("advantages.eyebrow")}</p>
                <h2 className="mt-3 text-[28px] font-semibold leading-[1] tracking-[-.03em] md:text-[clamp(30px,4vw,48px)]">
                  {t("advantages.title")}
                </h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 md:mt-7">
                  {advantages.map((item) => (
                    <div key={item} className="rounded-[16px] border border-black/10 bg-bg p-3 md:rounded-[18px] md:p-4">
                      <span className="grid h-8 w-8 place-items-center rounded-[12px] bg-orange text-white">
                        <MiniCheck />
                      </span>
                      <p className="mt-3 text-[13px] font-semibold leading-[1.5] text-ink2 md:mt-4 md:text-[14px]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>}
          </div>
        </section>

        <section className="px-[max(16px,4vw)] py-6 md:px-[max(22px,4vw)] md:py-16">
          <div className="mx-auto max-w-[1240px]">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <Reveal>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("compare.eyebrow")}</p>
                  <h2 className="mt-3 text-[28px] font-semibold leading-[1] tracking-[-.03em] md:text-[clamp(30px,4vw,48px)]">
                    {t("compare.title")}
                  </h2>
                </div>
              </Reveal>
              <Reveal>
                <Link href="/#produits" className="text-[13px] font-bold uppercase tracking-[.1em] text-orange">
                  {t("compare.catalog")} →
                </Link>
              </Reveal>
            </div>

            <div className="mt-6 grid gap-4 md:mt-8 md:gap-5 md:grid-cols-3">
              {related.map((item) => (
                <Reveal key={item.slug}>
                  <Link href={`/produits/${item.slug}`} className="group block rounded-[22px] border border-black/10 bg-white p-2.5 shadow-[0_14px_40px_rgba(17,19,21,.06)] transition-all hover:-translate-y-1 md:rounded-[24px] md:p-3">
                    <div className="aspect-[4/3] overflow-hidden rounded-[18px] bg-bg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.image} alt={tp(`${item.slug}.title`)} className="h-full w-full object-cover transition-transform duration-[700ms] group-hover:scale-[1.05]" />
                    </div>
                    <div className="p-3 md:p-4">
                      <p className="text-[11px] font-bold uppercase tracking-[.16em] text-orange">{item.partner}</p>
                      <h3 className="mt-2 text-[19px] font-semibold tracking-[-.02em] md:text-[22px]">{tp(`${item.slug}.title`)}</h3>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[max(16px,4vw)] py-8 md:px-[max(22px,4vw)] md:py-16">
          <div className="omak-dark-pattern mx-auto grid max-w-[1240px] gap-5 rounded-[24px] p-5 text-white md:grid-cols-[1fr_auto] md:items-center md:rounded-[30px] md:p-9">
            <Reveal>
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("cta.eyebrow")}</p>
                <h2 className="mt-3 max-w-[20ch] text-[clamp(28px,4vw,50px)] font-semibold leading-[1] tracking-[-.03em]">
                  {t("cta.title")}
                </h2>
              </div>
            </Reveal>
            <Reveal>
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-orange px-6 py-3 text-[13px] font-bold text-white shadow-[0_14px_34px_rgba(242,72,28,.32)] transition-colors hover:bg-orangedark md:px-7 md:py-4 md:text-[14px]"
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
