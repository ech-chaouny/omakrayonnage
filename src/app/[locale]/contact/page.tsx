import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { buildAlternates } from "@/i18n/seo";
import type { Locale } from "@/i18n/routing";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

type Props = {
  params: Promise<{ locale: string }>;
};

const departments = [
  { name: "Abdelghani Ennaciri", role: "Directeur commercial", phone: "06 74 02 79 32", tel: "+212674027932", email: "abdelghani.ennaciri@omakrayonnage.com" },
  { name: "Mohammed Ksir", role: "Directeur général", phone: "06 61 51 27 58", tel: "+212661512758", email: "mohammed.ksir@omakrayonnage.com" },
  { name: "Amine Omari", role: "Responsable commercial", phone: "06 62 50 02 31", tel: "+212662500231", email: "amine.omari@omakrayonnage.com" },
  { name: "Redouane Bakir", role: "Responsable qualité", phone: "06 29 39 42 73", tel: "+212629394273", email: "redouane.bakir@omakrayonnage.com" },
] as const;

const featuredDepartment = departments[0];
const supportDepartments = [departments[1], departments[2], departments[3]];
const mapEmbedUrl =
  "https://www.google.com/maps?q=OMAK%20Service%20Bd%20Attaka%20Casablanca%2022580%20Maroc&output=embed";
const mapDirectionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=OMAK%20Service%20Bd%20Attaka%20Casablanca%2022580%20Maroc";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.contact" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale as Locale, "/contact"),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactContent />;
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} aria-hidden="true">
      <path d="M7.2 4.5 9.4 9l-2 1.6c1.2 2.5 3.4 4.7 6 6l1.7-2 4.4 2.2-.7 3a2 2 0 0 1-2.2 1.5C8.6 20.1 3.9 15.4 2.8 7.4A2 2 0 0 1 4.3 5.2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} aria-hidden="true">
      <path d="M4 6.5h16v11H4z" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} aria-hidden="true">
      <path d="M12 21s7-5.3 7-11a7 7 0 0 0-14 0c0 5.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

function ContactContent() {
  const t = useTranslations("contact");
  const highlights = t.raw("hero.highlights") as string[];

  return (
    <>
      <Nav />
      <main className="bg-bg text-ink">
        <section id="top" className="px-[max(16px,4vw)] pb-8 pt-24 md:px-[max(22px,4vw)] md:pb-10 md:pt-30">
          <div className="mx-auto max-w-[1240px]">
            <div className="overflow-hidden rounded-[24px] border border-black/10 bg-white p-2 shadow-[0_22px_80px_rgba(17,19,21,.1)] md:rounded-[30px] md:p-3">
              <div className="grid gap-3 lg:grid-cols-[1fr_430px]">
                <div className="omak-dark-pattern rounded-[22px] p-5 text-white md:rounded-[24px] md:p-8 lg:p-10">
                  <Reveal>
                    <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("hero.eyebrow")}</p>
                    <h1 className="font-nb mt-4 max-w-[15ch] text-[34px] font-semibold leading-[1] tracking-[-.03em] md:text-[clamp(34px,4.2vw,56px)]">
                      {t("hero.title")}
                    </h1>
                    <p className="mt-4 max-w-[58ch] text-[14px] font-medium leading-[1.65] text-white/66 md:mt-5 md:text-[15px]">{t("hero.intro")}</p>
                  </Reveal>

                  <div className="mt-5 grid gap-2 sm:grid-cols-3 md:mt-7 md:gap-3">
                    {highlights.map((item) => (
                      <Reveal key={item}>
                        <div className="flex items-center gap-2 rounded-[16px] border border-white/10 bg-white/[.06] px-3 py-2.5 text-[11px] font-bold uppercase tracking-[.1em] text-white/76 md:gap-3 md:rounded-[18px] md:px-4 md:py-3 md:text-[12px]">
                          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-orange text-white">
                            <CheckIcon />
                          </span>
                          {item}
                        </div>
                      </Reveal>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3 md:mt-8">
                    <a
                      href="#devis"
                      className="rounded-full bg-orange px-5 py-3 text-[13px] font-bold text-white shadow-[0_14px_34px_rgba(242,72,28,.3)] transition-colors hover:bg-orangedark md:px-6 md:text-[14px]"
                    >
                      {t("hero.fillForm")} →
                    </a>
                    <a
                      href="mailto:abdelghani.ennaciri@omakrayonnage.com"
                      className="rounded-full border border-white/14 px-5 py-3 text-[13px] font-bold text-white/78 transition-colors hover:text-white md:px-6 md:text-[14px]"
                    >
                      abdelghani.ennaciri@omakrayonnage.com
                    </a>
                  </div>
                </div>

                <div className="grid gap-3">
                  <Reveal className="reveal-img">
                    <div className="relative min-h-[240px] overflow-hidden rounded-[22px] md:rounded-[24px] lg:min-h-[360px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/img/cta-etude-clean.webp"
                        alt={t("hero.imageAlt")}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(8,8,14,.68))]" />
                      <div className="absolute bottom-3 left-3 right-3 rounded-[18px] border border-white/18 bg-white/92 p-3 text-ink shadow-[0_18px_44px_rgba(17,19,21,.16)] backdrop-blur-md md:bottom-4 md:left-4 md:right-4 md:rounded-[20px] md:p-4">
                        <p className="text-[11px] font-bold uppercase tracking-[.18em] text-orange">{featuredDepartment.role}</p>
                        <a href={`tel:${featuredDepartment.tel}`} className="mt-1 block text-[16px] font-semibold tracking-[-.01em] md:text-[18px]">
                          {featuredDepartment.phone}
                        </a>
                      </div>
                    </div>
                  </Reveal>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    <Reveal>
                      <a
                        href="tel:+212522664641"
                        className="flex items-center justify-between rounded-[18px] border border-black/10 bg-bg px-4 py-3 text-[12px] font-bold text-ink transition-colors hover:border-orange md:rounded-[20px] md:px-5 md:py-4 md:text-[13px]"
                      >
                        {t("hero.quickDirection")}
                        <span className="text-orange">{t("hero.quickDirectionValue")}</span>
                      </a>
                    </Reveal>
                    <Reveal>
                      <a
                        href="#map"
                        className="flex items-center justify-between rounded-[18px] border border-black/10 bg-bg px-4 py-3 text-[12px] font-bold text-ink transition-colors hover:border-orange md:rounded-[20px] md:px-5 md:py-4 md:text-[13px]"
                      >
                        {t("hero.quickLocation")}
                        <span className="text-orange">{t("hero.quickLocationValue")}</span>
                      </a>
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="devis" className="px-[max(16px,4vw)] py-6 md:px-[max(22px,4vw)] md:py-14">
          <div className="mx-auto grid max-w-[1240px] gap-6 lg:grid-cols-[1.05fr_.95fr]">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal>
              <div className="relative overflow-hidden rounded-[24px] border border-black/10 bg-white p-4 shadow-[0_18px_60px_rgba(17,19,21,.07)] md:rounded-[30px] md:p-6">
                <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-orange/10 blur-3xl" />
                <div className="relative">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div>
                      <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("coords.eyebrow")}</p>
                      <h2 className="mt-3 max-w-[13ch] text-[28px] font-semibold leading-[1] tracking-[-.025em] md:text-[clamp(28px,3.4vw,42px)]">
                        {t("coords.title")}
                      </h2>
                    </div>
                    <span className="w-fit rounded-full border border-black/10 bg-bg px-4 py-2 text-[11px] font-bold uppercase tracking-[.14em] text-ink2">
                      {t("coords.localTeam")}
                    </span>
                  </div>

                  <article className="omak-dark-pattern mt-5 overflow-hidden rounded-[22px] p-4 text-white shadow-[0_18px_46px_rgba(17,19,21,.16)] md:mt-6 md:rounded-[24px] md:p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[.22em] text-orange">{featuredDepartment.role}</p>
                        <h3 className="mt-2 text-[21px] font-semibold leading-none tracking-[-.02em] md:text-[24px]">
                          {featuredDepartment.name}
                        </h3>
                      </div>
                      <span className="rounded-full border border-white/12 bg-white/[.08] px-3 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-white/64">
                        {t("coords.featuredBadge")}
                      </span>
                    </div>
                    <p className="mt-4 max-w-[42ch] text-[13px] font-medium leading-[1.55] text-white/62">{t("coords.featuredText")}</p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <a
                        href={`tel:${featuredDepartment.tel}`}
                        className="flex items-center gap-3 rounded-[16px] bg-orange px-4 py-3 text-[13px] font-bold text-white shadow-[0_12px_28px_rgba(242,72,28,.24)] transition-colors hover:bg-orangedark"
                      >
                        <PhoneIcon />
                        {featuredDepartment.phone}
                      </a>
                      <a
                        href={`mailto:${featuredDepartment.email}`}
                        className="flex items-center gap-3 rounded-[16px] border border-white/12 bg-white/[.07] px-4 py-3 text-[13px] font-bold text-white/80 transition-colors hover:text-white"
                      >
                        <MailIcon />
                        <span className="min-w-0 truncate">{featuredDepartment.email}</span>
                      </a>
                    </div>
                  </article>

                  <div className="mt-4 grid gap-3">
                    {supportDepartments.map((item, index) => (
                      <article
                        key={item.name}
                        className="group rounded-[18px] border border-black/10 bg-bg/80 p-3.5 transition-all hover:border-orange/35 hover:bg-white hover:shadow-[0_14px_34px_rgba(17,19,21,.07)] md:rounded-[20px] md:p-4"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <div className="flex items-center gap-3">
                              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[14px] border border-black/10 bg-white text-orange transition-colors group-hover:border-orange/30">
                                {index % 2 === 0 ? <PhoneIcon /> : <MailIcon />}
                              </span>
                              <div className="min-w-0">
                                <h3 className="text-[14px] font-bold tracking-[-.01em] text-ink">
                                  {item.name}
                                </h3>
                                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[.16em] text-orange">
                                  {item.role}
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 grid gap-2 pl-12">
                              <a
                                href={`tel:${item.tel}`}
                                className="text-[14px] font-bold text-ink transition-colors hover:text-orange"
                              >
                                {item.phone}
                              </a>
                              <a
                                href={`mailto:${item.email}`}
                                className="truncate text-[13px] font-bold text-ink2 transition-colors hover:text-orange"
                              >
                                {item.email}
                              </a>
                            </div>
                          </div>
                          <span className="text-[22px] font-semibold leading-none text-black/10 transition-colors group-hover:text-orange">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="map" className="px-[max(16px,4vw)] py-6 md:px-[max(22px,4vw)] md:py-14">
          <div className="mx-auto max-w-[1240px] overflow-hidden rounded-[24px] bg-white shadow-[0_20px_70px_rgba(17,19,21,.08)] ring-1 ring-black/10 md:rounded-[30px]">
            <div className="grid gap-0 lg:grid-cols-[.72fr_1.28fr]">
              <Reveal>
                <div className="omak-dark-pattern flex h-full flex-col justify-between gap-6 p-5 text-white md:gap-8 md:p-8">
                  <div className="grid h-12 w-12 place-items-center rounded-[16px] bg-orange md:h-[52px] md:w-[52px] md:rounded-[18px]">
                    <PinIcon />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("map.eyebrow")}</p>
                    <h2 className="mt-4 max-w-[12ch] text-[28px] font-semibold leading-[1] tracking-[-.025em] md:text-[clamp(30px,4vw,48px)]">
                      {t("map.title")}
                    </h2>
                    <p className="mt-4 text-[14px] font-medium leading-[1.6] text-white/64 md:mt-5 md:text-[15px]">
                      {t("map.address")}
                      <br />
                      {t("map.country")}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={mapDirectionsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-orange px-5 py-3 text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(242,72,28,.32)] transition-colors hover:bg-orangedark"
                    >
                      {t("map.directions")} →
                    </a>
                    <a
                      href={`tel:${featuredDepartment.tel}`}
                      className="rounded-full border border-white/14 px-5 py-3 text-[13px] font-bold text-white/78 transition-colors hover:text-white"
                    >
                      {t("map.call")}
                    </a>
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div className="relative min-h-[300px] bg-bg p-2 md:min-h-[430px] md:p-3">
                  <iframe
                    title={t("map.iframeTitle")}
                    src={mapEmbedUrl}
                    className="h-full min-h-[284px] w-full rounded-[20px] border-0 md:min-h-[406px] md:rounded-[24px]"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="pointer-events-none absolute bottom-5 left-5 right-5 rounded-[16px] border border-black/10 bg-white/92 px-4 py-3 shadow-[0_16px_44px_rgba(17,19,21,.14)] backdrop-blur-md md:bottom-7 md:left-7 md:right-auto md:rounded-[18px] md:px-5 md:py-4">
                    <div className="text-[11px] font-bold uppercase tracking-[.18em] text-orange">{t("map.cardTitle")}</div>
                    <div className="mt-1 text-[14px] font-bold text-ink">{t("map.cardAddress")}</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
