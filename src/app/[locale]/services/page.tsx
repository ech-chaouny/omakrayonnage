import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buildAlternates } from "@/i18n/seo";
import type { Locale } from "@/i18n/routing";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";

type Props = {
  params: Promise<{ locale: string }>;
};

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

  return (
    <>
      <Nav />
      <main className="bg-bg text-ink">
        <section className="px-[max(16px,4vw)] pb-8 pt-24 md:px-[max(22px,4vw)] md:pb-14 md:pt-32">
          <div className="mx-auto max-w-[1240px]">
            <Reveal>
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("workflow.eyebrow")}</p>
                  <h1 className="font-nb mt-3 max-w-none text-[28px] font-semibold leading-[1.05] tracking-[-.03em] sm:whitespace-nowrap sm:text-[clamp(30px,4vw,50px)] sm:leading-[1]">
                    {t("workflow.title")}
                  </h1>
                </div>
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
