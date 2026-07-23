import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buildAlternates } from "@/i18n/seo";
import type { Locale } from "@/i18n/routing";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ServiceMetricCard, { type ServiceMetricIcon } from "@/components/ServiceMetricCard";
import { services } from "@/lib/services";

type Props = {
  params: Promise<{ locale: string }>;
};

const benchmarkIcons: ServiceMetricIcon[] = ["site", "partners", "steps"];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.services" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale as Locale, "/services"),
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicesContent />;
}

function ServicesContent() {
  const t = useTranslations("servicesPage");
  const ts = useTranslations("catalog.services");
  const benchmarkCards = t.raw("benchmarks.cards") as Array<{ value: string; label: string; text: string }>;
  const methodPoints = t.raw("method.points") as Array<[string, string, string]>;

  return (
    <>
      <Nav />
      <main className="bg-bg text-ink">
        <section id="top" className="px-[max(16px,4vw)] pb-8 pt-24 md:px-[max(22px,4vw)] md:pb-10 md:pt-30">
          <div className="mx-auto grid max-w-[1240px] gap-5 lg:grid-cols-[.9fr_1.1fr]">
            <Reveal>
              <div className="omak-dark-pattern rounded-[24px] p-5 text-white shadow-[0_18px_54px_rgba(17,19,21,.12)] md:rounded-[30px] md:p-9 md:shadow-[0_22px_80px_rgba(17,19,21,.13)]">
                <p className="text-[10px] font-bold uppercase tracking-[.22em] text-orange md:text-[12px] md:tracking-[.24em]">{t("hero.eyebrow")}</p>
                <h1 className="mt-3 max-w-[11ch] text-[34px] font-semibold leading-[.98] tracking-[-.035em] md:mt-4 md:text-[clamp(34px,5vw,64px)] md:leading-[.96] md:tracking-[-.04em]">
                  {t("hero.title")}
                </h1>
                <p className="mt-4 max-w-[58ch] text-[14px] font-medium leading-[1.62] text-white/62 md:mt-5 md:text-[15px] md:leading-[1.7]">{t("hero.intro")}</p>
                <div className="mt-6 flex flex-wrap items-center gap-2.5 md:mt-8 md:gap-3">
                  <Link
                    href="/contact"
                    className="rounded-full bg-orange px-5 py-3 text-[13px] font-bold text-white shadow-[0_12px_28px_rgba(242,72,28,.26)] transition-colors hover:bg-orangedark md:px-6 md:text-[14px] md:shadow-[0_14px_34px_rgba(242,72,28,.3)]"
                  >
                    {t("hero.cta")} →
                  </Link>
                  <span className="rounded-full border border-white/12 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[.12em] text-white/62 md:px-5 md:py-3 md:text-[12px]">
                    {t("hero.badge")}
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[24px] border border-black/10 bg-white p-4 shadow-[0_14px_42px_rgba(17,19,21,.07)] md:rounded-[30px] md:p-6 md:shadow-[0_18px_60px_rgba(17,19,21,.08)]">
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-orange md:text-[12px] md:tracking-[.22em]">{t("journey.eyebrow")}</p>
                <div className="mt-4 grid gap-2.5 md:mt-5 md:gap-3">
                  {services.map((service, index) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group grid grid-cols-[42px_1fr_auto] items-center gap-3 rounded-[17px] border border-black/10 bg-bg px-3 py-2.5 transition-all hover:border-orange/40 hover:bg-white hover:shadow-[0_14px_36px_rgba(17,19,21,.08)] md:grid-cols-[52px_1fr_auto] md:gap-4 md:rounded-[20px] md:px-4 md:py-3"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-[13px] bg-ink font-nb text-[15px] font-bold text-orange transition-colors group-hover:bg-orange group-hover:text-white md:h-12 md:w-12 md:rounded-[16px] md:text-[18px]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[15px] font-semibold tracking-[-.01em] md:text-[17px]">{ts(`${service.slug}.title`)}</span>
                        <span className="mt-1 block text-[12px] font-medium leading-[1.4] text-ink2 md:text-[13px] md:leading-[1.45]">{ts(`${service.slug}.caption`)}</span>
                      </span>
                      <span className="hidden rounded-full border border-black/10 px-3 py-2 text-[11px] font-bold uppercase tracking-[.1em] text-orange transition-colors group-hover:border-orange/35 md:inline-flex">
                        {t("journey.view")}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-[max(16px,4vw)] py-8 md:px-[max(22px,4vw)] md:py-14">
          <div className="mx-auto max-w-[1240px]">
            <Reveal>
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("workflow.eyebrow")}</p>
                  <h2 className="mt-3 max-w-[14ch] text-[30px] font-semibold leading-[1] tracking-[-.03em] md:text-[clamp(30px,4vw,50px)]">
                    {t("workflow.title")}
                  </h2>
                </div>
                <p className="max-w-[48ch] text-[14px] font-medium leading-[1.58] text-ink2 md:text-[15px] md:leading-[1.65]">{t("workflow.intro")}</p>
              </div>
            </Reveal>

            <div className="relative mt-6 md:mt-9">
              <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-black/10 md:block" />
              <div className="grid gap-4">
                {services.map((service, index) => {
                  const stats = ts.raw(`${service.slug}.stats`) as Array<[string, string]>;
                  return (
                    <Reveal key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="group grid gap-3 rounded-[22px] border border-black/10 bg-white p-4 shadow-[0_12px_34px_rgba(17,19,21,.055)] transition-all hover:-translate-y-1 hover:border-orange/35 hover:shadow-[0_20px_64px_rgba(17,19,21,.1)] md:grid-cols-[76px_1fr_270px] md:items-center md:gap-4 md:rounded-[26px]"
                      >
                        <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-orange font-nb text-[18px] font-bold text-white shadow-[0_12px_28px_rgba(242,72,28,.24)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>
                          <span className="block text-[11px] font-bold uppercase tracking-[.22em] text-orange">{ts(`${service.slug}.eyebrow`)}</span>
                          <span className="mt-2 block text-[23px] font-semibold leading-[1.06] tracking-[-.025em] md:text-[30px]">
                            {ts(`${service.slug}.title`)}
                          </span>
                          <span className="mt-2.5 block max-w-[64ch] text-[13px] font-medium leading-[1.55] text-ink2 md:mt-3 md:text-[14px] md:leading-[1.6]">
                            {ts(`${service.slug}.intro`)}
                          </span>
                        </span>
                        <span className="rounded-[18px] border border-black/10 bg-bg p-3 md:rounded-[20px] md:p-4">
                          {stats.map(([label, value]) => (
                            <span key={label} className="flex items-center justify-between gap-4 border-b border-black/8 py-2 last:border-0">
                              <span className="text-[10px] font-bold uppercase tracking-[.16em] text-ink2/70">{label}</span>
                              <span className="text-right text-[13px] font-semibold text-ink">{value}</span>
                            </span>
                          ))}
                        </span>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="px-[max(16px,4vw)] py-8 md:px-[max(22px,4vw)] md:py-14">
          <div className="mx-auto max-w-[1240px]">
            <Reveal>
              <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("benchmarks.eyebrow")}</p>
                  <h2 className="mt-3 max-w-[15ch] text-[30px] font-semibold leading-[1] md:text-[clamp(30px,4vw,50px)]">
                    {t("benchmarks.title")}
                  </h2>
                </div>
                <p className="max-w-[44ch] text-[14px] font-medium leading-[1.58] text-ink2 md:text-[15px] md:leading-[1.65]">{t("benchmarks.intro")}</p>
              </div>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-3 md:gap-5">
              {benchmarkCards.map((card, index) => (
                <Reveal key={card.label}>
                  <ServiceMetricCard
                    index={String(index + 1).padStart(2, "0")}
                    value={card.value}
                    label={card.label}
                    text={card.text}
                    icon={benchmarkIcons[index] ?? "site"}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[max(16px,4vw)] py-6 md:px-[max(22px,4vw)] md:py-12">
          <div className="mx-auto grid max-w-[1240px] gap-4 md:grid-cols-3">
            {methodPoints.map(([number, title, text]) => (
              <Reveal key={number}>
                <div className="h-full rounded-[22px] border border-black/10 bg-white p-4 shadow-[0_12px_34px_rgba(17,19,21,.055)] md:rounded-[26px] md:p-6 md:shadow-[0_14px_44px_rgba(17,19,21,.06)]">
                  <span className="font-nb text-[28px] font-bold leading-none text-orange md:text-[34px]">{number}</span>
                  <h3 className="mt-4 text-[19px] font-semibold md:mt-5 md:text-[22px]">{title}</h3>
                  <p className="mt-2.5 text-[13px] font-medium leading-[1.55] text-ink2 md:mt-3 md:text-[14px] md:leading-[1.6]">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="px-[max(16px,4vw)] py-8 md:px-[max(22px,4vw)] md:py-16">
          <div className="omak-dark-pattern mx-auto grid max-w-[1240px] gap-5 rounded-[24px] p-5 text-white shadow-[0_18px_54px_rgba(17,19,21,.1)] md:grid-cols-[1fr_auto] md:items-center md:rounded-[30px] md:p-9 md:shadow-[0_22px_80px_rgba(17,19,21,.12)]">
            <Reveal>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.22em] text-orange md:text-[12px] md:tracking-[.24em]">{t("cta.eyebrow")}</p>
                <h2 className="mt-3 max-w-[20ch] text-[28px] font-semibold leading-[1] tracking-[-.03em] md:text-[clamp(28px,4vw,48px)]">
                  {t("cta.title")}
                </h2>
              </div>
            </Reveal>
            <Reveal>
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-orange px-6 py-3 text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(242,72,28,.3)] transition-colors hover:bg-orangedark md:px-7 md:py-4 md:text-[14px] md:shadow-[0_14px_34px_rgba(242,72,28,.32)]"
              >
                {t("cta.talk")} →
              </Link>
            </Reveal>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
