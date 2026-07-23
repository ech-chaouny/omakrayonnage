"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { products } from "@/lib/products";
import Reveal from "./Reveal";

export default function Products() {
  const t = useTranslations("homeProducts");
  const tp = useTranslations("catalog.products");
  const [activeIndex, setActiveIndex] = useState(0);
  const productRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const nodes = productRefs.current.filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target instanceof HTMLElement) {
          const nextIndex = Number(visible.target.dataset.productIndex);
          if (!Number.isNaN(nextIndex)) {
            setActiveIndex(nextIndex);
          }
        }
      },
      {
        rootMargin: "-28% 0px -42% 0px",
        threshold: [0.18, 0.35, 0.55, 0.72],
      },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="produits"
      className="relative overflow-visible px-[max(16px,4vw)] py-10 md:px-[max(22px,4vw)] md:py-30"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(17,19,21,.035)_1px,transparent_1px),linear-gradient(180deg,rgba(17,19,21,.028)_1px,transparent_1px)] bg-[size:128px_128px]" />
      <div className="relative mx-auto max-w-[1360px]">
        <div className="grid gap-7 lg:grid-cols-[.84fr_1.34fr] lg:items-start lg:gap-10 xl:grid-cols-[.78fr_1.42fr]">
          <aside className="lg:sticky lg:top-[90px] lg:z-10 lg:self-start">
            <Reveal>
              <div className="py-2 md:py-3">
                <div className="border-l border-black/10 pl-4 md:pl-5">
                  <p className="text-[11px] font-bold uppercase tracking-[.24em] text-orange">{t("eyebrow")}</p>
                  <h2 className="mt-3 max-w-[11ch] text-[32px] font-semibold leading-[.98] text-ink md:text-[56px] md:leading-[.92] lg:text-[62px] xl:text-[68px]">
                    {t("titleLead")} <span className="text-orange">{t("titleAccent")}</span>
                  </h2>
                  <p className="mt-4 max-w-[35ch] text-[13px] font-medium leading-[1.6] text-ink2 md:text-[14px]">
                    {t("intro")}
                  </p>
                </div>

                <nav className="mt-4 space-y-1 rounded-[20px] border border-black/10 bg-white px-2 py-2.5 md:mt-5 md:space-y-1.5 md:rounded-3xl md:py-4" aria-label={t("navAriaLabel")}>
                  {products.map((product, index) => {
                    const active = index === activeIndex;

                    return (
                      <a
                        key={product.slug}
                        href={`#${product.anchor}`}
                        className={`group flex items-center gap-2.5 rounded-[15px] px-2.5 py-2 transition-all duration-300 md:gap-3 md:rounded-[18px] md:px-3 md:py-2.5 ${
                          active
                            ? "bg-ink text-white"
                            : "text-ink/48 hover:bg-bg hover:text-ink"
                        }`}
                      >
                        <span
                          className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[9px] font-black transition-all md:h-7 md:w-7 md:text-[10px] ${
                            active
                              ? "bg-orange text-white"
                              : "bg-white text-ink/35 ring-1 ring-black/8 group-hover:text-orange"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 text-[13px] font-semibold leading-[1.2] transition-colors md:text-[16px]">
                          {tp(`${product.slug}.navTitle`)}
                        </span>
                        <span
                          className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[14px] font-bold transition-all md:h-7 md:w-7 md:text-[15px] ${
                            active
                              ? "bg-white text-orange"
                              : "bg-transparent text-transparent group-hover:bg-white group-hover:text-orange"
                          }`}
                        >
                          →
                        </span>
                      </a>
                    );
                  })}
                </nav>

                <div className="mt-3 rounded-[16px] border border-white/10 bg-ink p-3 text-white md:mt-4 md:rounded-[20px] md:p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[.22em] text-orange">{t("methodEyebrow")}</p>
                  <p className="mt-2 text-[12px] font-medium leading-[1.5] text-white/68 md:text-[13px] md:leading-[1.55]">{t("methodText")}</p>
                </div>
              </div>
            </Reveal>
          </aside>

          <div className="space-y-7 lg:space-y-20">
            {products.map((product, index) => {
              const stats = tp.raw(`${product.slug}.stats`) as Array<[string, string]>;
              return (
                <article
                  key={product.slug}
                  id={product.anchor}
                  ref={(node) => {
                    productRefs.current[index] = node;
                  }}
                  data-product-index={index}
                    className="flex scroll-mt-28 items-start md:scroll-mt-36 lg:min-h-[88vh]"
                >
                  <Reveal className="w-full lg:sticky lg:top-[112px]">
                    <Link
                      href={`/produits/${product.slug}`}
                      className="group grid overflow-hidden rounded-[22px] border border-black/10 bg-white shadow-[0_18px_54px_rgba(17,19,21,.075)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(17,19,21,.14)] md:rounded-[30px] lg:grid-cols-[1.05fr_.95fr]"
                    >
                      <div className="relative min-h-[190px] overflow-hidden bg-ink md:min-h-[360px] lg:min-h-[470px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product.image}
                          alt={tp(`${product.slug}.title`)}
                          className="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.045]"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,7,10,.02),rgba(6,7,10,.54))]" />
                        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-1.5 md:left-5 md:top-5 md:gap-2">
                          <span className="rounded-full bg-white/92 px-2.5 py-1.5 text-[8px] font-extrabold uppercase tracking-[.14em] text-orange shadow-[0_10px_28px_rgba(17,19,21,.12)] md:px-3 md:text-[9px] md:tracking-[.16em]">
                            {product.partner}
                          </span>
                          <span className="rounded-full border border-white/18 bg-black/28 px-2.5 py-1.5 text-[8px] font-extrabold uppercase tracking-[.14em] text-white backdrop-blur-md md:px-3 md:text-[9px] md:tracking-[.16em]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <span className="absolute bottom-4 left-4 max-w-[24ch] text-[15px] font-semibold leading-[1.25] text-white md:bottom-5 md:left-5 md:text-[22px]">
                          {tp(`${product.slug}.caption`)}
                        </span>
                        <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-orange text-[16px] font-bold text-white shadow-[0_14px_34px_rgba(242,72,28,.35)] transition-transform group-hover:translate-x-1 md:right-5 md:top-5 md:h-11 md:w-11 md:text-[20px]">
                          →
                        </span>
                      </div>

                      <div className="flex flex-col justify-between p-4 md:p-8 lg:p-9">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[.24em] text-orange">
                            {tp(`${product.slug}.eyebrow`)}
                          </p>
                          <h3 className="mt-2.5 max-w-[15ch] text-[26px] font-semibold leading-[1] text-ink md:mt-3 md:text-[42px] md:leading-[.98]">
                            {tp(`${product.slug}.title`)}
                          </h3>
                          <p className="mt-3 max-w-[42ch] text-[12px] font-medium leading-[1.5] text-ink2 md:mt-4 md:text-[14px] md:leading-[1.65]">
                            {tp(`${product.slug}.headline`)}
                          </p>
                        </div>

                        <div className="mt-5 md:mt-7">
                          <dl className="grid grid-cols-3 gap-2 border-y border-black/10 py-3 md:gap-3 md:py-4">
                            {stats.map(([label, value]) => (
                              <div key={label}>
                                <dt className="text-[8px] font-bold uppercase tracking-[.16em] text-ink/38 md:text-[9px] md:tracking-[.18em]">{label}</dt>
                                <dd className="mt-1 text-[11px] font-bold leading-tight text-ink md:text-[13px]">{value}</dd>
                              </div>
                            ))}
                          </dl>

                          <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-bg px-3.5 py-2.5 text-[9px] font-extrabold uppercase tracking-[.1em] text-orange transition-colors group-hover:border-orange/35 group-hover:bg-orange group-hover:text-white md:mt-6 md:text-[11px] md:tracking-[.13em]">
                            {t("viewSolution")} <span className="text-[16px] leading-none">→</span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
