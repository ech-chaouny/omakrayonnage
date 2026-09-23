import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buildAlternates } from "@/i18n/seo";
import type { Locale } from "@/i18n/routing";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

type Props = {
  params: Promise<{ locale: string }>;
};

const qualityIcons = [
  (
    <>
      <path d="M12 5.5v4.2" />
      <path d="M8.4 7.2 12 9.7l3.6-2.5" />
      <path d="M5.7 15.8a4 4 0 0 1 4-4h4.6a4 4 0 0 1 4 4v2.7H5.7z" />
      <path d="M8 19v-2.2M16 19v-2.2" />
    </>
  ),
  (
    <>
      <path d="M7 11.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M17 11.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M3.5 19a4.2 4.2 0 0 1 7-3.1" />
      <path d="M13.5 15.9a4.2 4.2 0 0 1 7 3.1" />
      <path d="m9.3 16.8 2 2 4-5" />
    </>
  ),
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale as Locale, "/about"),
  };
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutContent />;
}

function AboutContent() {
  const t = useTranslations("about");
  const figures = t.raw("figures") as Array<[string, string]>;
  const services = t.raw("interlocutor.services") as string[];
  const ranges = t.raw("ranges.items") as Array<{ title: string; text: string }>;
  const qualityItems = t.raw("quality.items") as Array<{ title: string; text: string }>;

  return (
    <>
      <Nav />
      <main className="bg-bg text-ink">
        <section id="top" className="px-[max(16px,4vw)] pb-8 pt-24 md:px-[max(22px,4vw)] md:pb-14 md:pt-30">
          <div className="mx-auto max-w-[1240px]">
            <div className="grid overflow-hidden rounded-[24px] bg-[#08080e] shadow-[0_24px_80px_rgba(17,19,21,.14)] ring-1 ring-black/10 md:rounded-[30px] lg:grid-cols-[1.15fr_.85fr]">
              <div className="omak-dark-pattern flex flex-col justify-between gap-6 p-5 text-white md:gap-8 md:p-[max(22px,3.6vw)]">
                <Reveal>
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("hero.eyebrow")}</p>
                    <h1 className="font-nb mt-4 text-[34px] font-semibold leading-[.98] tracking-[-.03em] md:text-[clamp(34px,4.8vw,62px)]">
                      {t("hero.title")}
                    </h1>
                    <p className="mt-4 text-[14px] font-medium leading-[1.6] text-white/64 md:mt-5 md:text-[15px]">{t("hero.intro")}</p>
                  </div>
                </Reveal>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
                  {figures.map(([value, label]) => (
                    <Reveal key={label} className="flex">
                      <div className="flex w-full flex-col rounded-[16px] border border-white/10 bg-white/[.06] p-2.5 md:p-3">
                        <div className="font-nb whitespace-nowrap text-[22px] font-bold leading-none tracking-[-.02em] text-orange md:text-[24px]">{value}</div>
                        <div className="mt-auto pt-2 text-[10px] font-bold uppercase tracking-[.12em] text-white/58">{label}</div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              <Reveal className="reveal-img">
                <div className="relative min-h-[260px] lg:h-full lg:min-h-[340px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/about-team-clean.webp"
                    alt={t("hero.imageAlt")}
                    className="h-full min-h-[260px] w-full object-cover lg:min-h-[340px]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,14,.35),transparent_50%)]" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="px-[max(16px,4vw)] py-6 md:px-[max(22px,4vw)] md:py-14">
          <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("interlocutor.eyebrow")}</p>
                <h2 className="mt-4 max-w-[13ch] text-[28px] font-semibold leading-[1] tracking-[-.025em] md:text-[clamp(30px,3.8vw,48px)]">
                  {t("interlocutor.title")}
                </h2>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-[22px] border border-black/10 bg-white p-4 shadow-[0_18px_60px_rgba(17,19,21,.06)] md:rounded-[26px] md:p-7">
                <p className="text-[15px] font-semibold leading-[1.55] tracking-[-.015em] text-ink md:text-[18px]">{t("interlocutor.lead")}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {services.map((service) => (
                    <div key={service} className="flex items-center gap-3 rounded-full border border-black/10 bg-bg px-4 py-2.5">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-orange text-white">
                        <CheckIcon />
                      </span>
                      <span className="text-[13px] font-bold text-ink">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-[max(16px,4vw)] py-6 md:px-[max(22px,4vw)] md:py-14">
          <div className="mx-auto max-w-[1240px]">
            <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <Reveal>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("ranges.eyebrow")}</p>
                  <h2 className="mt-4 max-w-[16ch] text-[28px] font-semibold leading-[1] tracking-[-.025em] md:text-[clamp(30px,4vw,52px)]">
                    {t("ranges.title")}
                  </h2>
                </div>
              </Reveal>
              <Reveal>
                <p className="max-w-[48ch] text-[15px] font-medium leading-[1.6] text-ink2">{t("ranges.intro")}</p>
              </Reveal>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {ranges.map((item, index) => (
                <Reveal key={item.title}>
                  <article className="group min-h-[190px] rounded-[22px] border border-black/10 bg-white p-4 shadow-[0_16px_48px_rgba(17,19,21,.055)] transition-transform duration-500 hover:-translate-y-1 md:min-h-[220px] md:rounded-[24px] md:p-5">
                    <div className="font-nb text-[26px] font-bold leading-none text-orange md:text-[30px]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-6 text-[19px] font-bold tracking-[-.02em]">{item.title}</h3>
                    <p className="mt-3 text-[14px] font-medium leading-[1.55] text-ink2">{item.text}</p>
                    <div className="mt-5 h-1 rounded-full bg-black/5">
                      <div className="h-full w-2/3 rounded-full bg-orange transition-all duration-500 group-hover:w-full" />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[max(16px,4vw)] py-6 md:px-[max(22px,4vw)] md:py-14">
          <div className="mx-auto max-w-[1240px]">
            <Reveal>
              <div className="mb-8 text-center">
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("quality.eyebrow")}</p>
                <h2 className="mx-auto mt-4 max-w-[18ch] text-[28px] font-semibold leading-[1] tracking-[-.025em] md:text-[clamp(30px,4vw,52px)]">
                  {t("quality.title")}
                </h2>
              </div>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2">
              {qualityItems.map((item, index) => (
                <Reveal key={item.title}>
                  <article className="rounded-[22px] border border-black/10 bg-white p-4 shadow-[0_16px_48px_rgba(17,19,21,.055)] md:rounded-[26px] md:p-6">
                    <div className="grid h-14 w-14 place-items-center rounded-[18px] bg-orange text-white shadow-[0_14px_30px_rgba(242,72,28,.22)] md:h-16 md:w-16 md:rounded-[20px]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-8 w-8"
                        aria-hidden="true"
                      >
                        {qualityIcons[index]}
                      </svg>
                    </div>
                    <h3 className="mt-5 text-[19px] font-bold tracking-[-.02em] md:mt-6 md:text-[22px]">{item.title}</h3>
                    <p className="mt-3 text-[14px] font-medium leading-[1.6] text-ink2 md:text-[15px]">{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[max(16px,4vw)] py-8 md:px-[max(22px,4vw)] md:py-16">
          <div className="mx-auto max-w-[1040px] text-center">
            <Reveal>
              <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("cta.eyebrow")}</p>
              <h2 className="font-nb mx-auto mt-4 max-w-[20ch] text-[30px] font-semibold leading-[1] tracking-[-.025em] md:text-[clamp(32px,4.2vw,56px)]">
                {t("cta.title")}
              </h2>
              <p className="mx-auto mt-5 max-w-[58ch] text-[14px] font-medium leading-[1.6] text-ink2 md:text-[16px]">{t("cta.intro")}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-orange px-6 py-3 text-[14px] font-semibold text-white shadow-[0_12px_36px_rgba(242,72,28,.35)] transition-colors hover:bg-orangedark md:px-8 md:py-4 md:text-[16px]"
                >
                  {t("cta.quote")} →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
