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
import ServiceMetricCard, { type ServiceMetricIcon } from "@/components/ServiceMetricCard";
import { getService, services, type Service } from "@/lib/services";

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

const impactIcons: ServiceMetricIcon[] = ["study", "mount", "control", "support"];

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getService(slug);

  if (!service) {
    const tf = await getTranslations({ locale, namespace: "metadata.serviceDetail" });
    return { title: tf("fallback") };
  }

  const tm = await getTranslations({ locale, namespace: "metadata.productDetail" });
  const ts = await getTranslations({ locale, namespace: "catalog.services" });
  const title = ts(`${slug}.title`);
  const intro = ts(`${slug}.intro`);

  return {
    title,
    description: `${title} ${tm("descriptionPrefix")}: ${intro}`,
    alternates: buildAlternates(locale as Locale, `/services/${slug}`),
    openGraph: {
      title: `${title} | OMAK RAYONNAGE`,
      description: intro,
      images: [{ url: service.image, width: 1200, height: 900, alt: title }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = getService(slug);
  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug);

  return <ServiceDetailContent service={service} related={relatedServices} />;
}

function ServiceDetailContent({ service, related }: { service: Service; related: Service[] }) {
  const t = useTranslations("serviceDetail");
  const ts = useTranslations("catalog.services");
  const slug = service.slug;

  const stats = ts.raw(`${slug}.stats`) as Array<[string, string]>;
  const deliverables = ts.raw(`${slug}.deliverables`) as string[];
  const advantages = ts.raw(`${slug}.advantages`) as string[];
  const process = ts.raw(`${slug}.process`) as Array<[string, string]>;
  const impactLabels = t.raw("impact.labels") as string[];

  return (
    <>
      <Nav />
      <main className="bg-bg text-ink">
        <section id="top" className="px-[max(16px,4vw)] pb-8 pt-24 md:px-[max(22px,4vw)] md:pb-10 md:pt-30">
          <div className="mx-auto max-w-[1240px]">
            <Reveal>
              <Link href="/services" className="text-[12px] font-bold uppercase tracking-[.18em] text-ink2 transition-colors hover:text-orange">
                ← {t("back")}
              </Link>
            </Reveal>

            <Reveal>
              <div className="omak-dark-pattern mt-5 rounded-[24px] p-5 text-white shadow-[0_20px_70px_rgba(17,19,21,.12)] md:rounded-[32px] md:p-8 md:shadow-[0_24px_90px_rgba(17,19,21,.14)] lg:p-10">
                <div className="grid gap-6 lg:grid-cols-[1fr_340px] lg:items-end">
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[.26em] text-orange">{ts(`${slug}.eyebrow`)}</p>
                    <h1 className="mt-4 max-w-[12ch] text-[34px] font-semibold leading-[.96] tracking-[-.04em] md:text-[clamp(38px,5vw,68px)]">
                      {ts(`${slug}.title`)}
                    </h1>
                    <p className="mt-4 max-w-[68ch] text-[14px] font-medium leading-[1.65] text-white/66 md:mt-5 md:text-[15px] md:leading-[1.75]">{ts(`${slug}.intro`)}</p>
                  </div>

                  <div className="grid gap-2 rounded-[20px] border border-white/10 bg-white/[.055] p-3 md:rounded-[24px] md:p-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[.2em] text-white/42">{t("brief")}</p>
                    {stats.map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between gap-3 rounded-[14px] bg-white/[.055] px-3 py-2.5 md:gap-4 md:px-4 md:py-3">
                        <span className="text-[10px] font-bold uppercase tracking-[.16em] text-white/42">{label}</span>
                        <span className="text-right text-[13px] font-semibold text-white md:text-[14px]">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-[max(16px,4vw)] py-6 md:px-[max(22px,4vw)] md:py-12">
          <div className="mx-auto grid max-w-[1240px] gap-6 lg:grid-cols-[1fr_360px]">
            <Reveal>
              <div className="rounded-[24px] border border-black/10 bg-white p-4 shadow-[0_18px_60px_rgba(17,19,21,.07)] md:rounded-[30px] md:p-8">
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("method.eyebrow")}</p>
                <h2 className="mt-3 max-w-[16ch] text-[28px] font-semibold leading-[1] tracking-[-.03em] md:text-[clamp(30px,4vw,50px)]">
                  {t("method.title")}
                </h2>

                <div className="relative mt-6 grid gap-3 md:mt-8 md:gap-4">
                  <div className="absolute bottom-7 left-6 top-7 hidden w-px bg-black/10 md:block" />
                  {process.map(([title, text], index) => (
                    <div key={title} className="relative grid gap-3 rounded-[20px] border border-black/10 bg-bg p-3 md:grid-cols-[64px_1fr] md:gap-4 md:rounded-[22px] md:p-4">
                      <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-orange font-nb text-[18px] font-bold text-white shadow-[0_12px_28px_rgba(242,72,28,.22)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block text-[18px] font-semibold tracking-[-.02em] md:text-[22px]">{title}</span>
                        <span className="mt-2 block text-[13px] font-medium leading-[1.6] text-ink2 md:text-[14px]">{text}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <aside className="lg:sticky lg:top-28">
                <div className="omak-dark-pattern overflow-hidden rounded-[24px] p-2.5 text-white shadow-[0_22px_76px_rgba(17,19,21,.14)] md:rounded-[30px] md:p-3 md:shadow-[0_22px_76px_rgba(17,19,21,.16)]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-ink">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.image} alt={ts(`${slug}.title`)} className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,14,.04)_20%,rgba(8,8,14,.78))]" />
                    <div className="absolute bottom-3 left-3 right-3 rounded-[18px] border border-white/14 bg-black/40 p-3 shadow-[0_16px_36px_rgba(0,0,0,.22)] backdrop-blur-md md:bottom-4 md:left-4 md:right-4 md:rounded-[20px] md:p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[.22em] text-orange">OMAK RAYONNAGE</p>
                      <p className="mt-2 text-[16px] font-semibold leading-[1.14] tracking-[-.02em] text-white md:text-[18px]">{ts(`${slug}.headline`)}</p>
                    </div>
                  </div>
                  <div className="p-4 md:p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[.22em] text-orange">{t("aside.eyebrow")}</p>
                        <h3 className="mt-2 text-[21px] font-semibold leading-[1.05] tracking-[-.02em] md:text-[24px]">{t("aside.title")}</h3>
                      </div>
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[16px] bg-orange text-[22px] font-bold text-white shadow-[0_16px_34px_rgba(242,72,28,.24)] md:h-14 md:w-14 md:rounded-[18px] md:text-[24px]">
                        +
                      </span>
                    </div>
                    <p className="mt-4 text-[13px] font-medium leading-[1.65] text-white/60 md:mt-5 md:text-[14px]">{t("aside.text")}</p>
                    <Link
                      href="/contact"
                      className="mt-5 inline-flex w-full justify-center rounded-full bg-orange px-5 py-3 text-[13px] font-bold text-white shadow-[0_14px_34px_rgba(242,72,28,.3)] transition-colors hover:bg-orangedark md:mt-6 md:px-6 md:text-[14px]"
                    >
                      {t("aside.cta")} →
                    </Link>
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </section>

        <section className="px-[max(16px,4vw)] py-6 md:px-[max(22px,4vw)] md:py-12">
          <div className="mx-auto grid max-w-[1240px] gap-5 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <div className="rounded-[24px] border border-black/10 bg-white p-4 shadow-[0_18px_60px_rgba(17,19,21,.07)] md:rounded-[30px] md:p-7">
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("deliverables.eyebrow")}</p>
                <h2 className="mt-3 text-[28px] font-semibold leading-[1] tracking-[-.03em] md:text-[clamp(28px,3.6vw,44px)]">{t("deliverables.title")}</h2>
                <div className="mt-5 grid gap-3 md:mt-7">
                  {deliverables.map((item) => (
                    <div key={item} className="flex gap-3 border-b border-black/10 pb-3 text-[13px] font-semibold leading-[1.45] text-ink2 last:border-0 last:pb-0 md:text-[14px]">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-orange text-white">
                        <MiniCheck />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Reveal>
              <div className="rounded-[24px] border border-black/10 bg-white p-4 shadow-[0_18px_60px_rgba(17,19,21,.07)] md:rounded-[30px] md:p-7">
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("impact.eyebrow")}</p>
                <h2 className="mt-3 text-[28px] font-semibold leading-[1] tracking-[-.03em] md:text-[clamp(28px,3.6vw,44px)]">{t("impact.title")}</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 md:mt-7 md:gap-4">
                  {advantages.map((item, index) => (
                    <ServiceMetricCard
                      key={item}
                      compact
                      index={String(index + 1).padStart(2, "0")}
                      value={String(index + 1).padStart(2, "0")}
                      label={impactLabels[index] ?? t("impact.fallback")}
                      text={item}
                      icon={impactIcons[index % impactIcons.length]}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-[max(16px,4vw)] py-6 md:px-[max(22px,4vw)] md:py-12">
          <div className="mx-auto max-w-[1240px] rounded-[24px] border border-black/10 bg-white p-4 shadow-[0_18px_60px_rgba(17,19,21,.07)] md:rounded-[30px] md:p-8">
            <Reveal>
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("continuity.eyebrow")}</p>
                  <h2 className="mt-3 text-[28px] font-semibold leading-[1] tracking-[-.03em] md:text-[clamp(28px,3.8vw,46px)]">{t("continuity.title")}</h2>
                </div>
                <Link href="/services" className="text-[13px] font-bold uppercase tracking-[.1em] text-orange">
                  {t("continuity.all")} →
                </Link>
              </div>
            </Reveal>

            <div className="mt-5 grid gap-3 md:mt-7 md:grid-cols-3">
              {related.map((item, index) => (
                <Reveal key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="group block rounded-[20px] border border-black/10 bg-bg p-4 transition-all hover:-translate-y-1 hover:border-orange/35 hover:bg-white md:rounded-[22px] md:p-5"
                  >
                    <span className="font-nb text-[24px] font-bold leading-none text-orange md:text-[28px]">{String(index + 1).padStart(2, "0")}</span>
                    <p className="mt-4 text-[18px] font-semibold leading-[1.1] tracking-[-.02em] md:mt-5 md:text-[20px]">{ts(`${item.slug}.title`)}</p>
                    <p className="mt-3 text-[13px] font-medium leading-[1.55] text-ink2">{ts(`${item.slug}.caption`)}</p>
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
                <h2 className="mt-3 max-w-[20ch] text-[clamp(28px,4vw,48px)] font-semibold leading-[1] tracking-[-.03em]">
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
