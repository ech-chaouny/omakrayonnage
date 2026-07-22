import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez OMAK RAYONNAGE pour une étude, un devis gratuit ou un accompagnement technique en rayonnage industriel au Maroc.",
};

const departments = [
  {
    label: "Direction",
    phone: "+212 5 22 66 46 41",
    tel: "+212522664641",
    email: "k.elabbas@omakrayonnage.com",
  },
  {
    label: "Service administratif",
    phone: "+212 6 62 04 67 33",
    tel: "+212662046733",
    email: "b.fatimazahra@omakrayonnage.com",
  },
  {
    label: "Service commercial",
    phone: "+212 6 45 12 27 27",
    tel: "+212645122727",
    email: "commercial@omakrayonnage.com",
  },
  {
    label: "Service technique",
    phone: "+212 6 61 48 40 94",
    tel: "+212661484094",
    email: "o.rachid@omakrayonnage.com",
  },
  {
    label: "Contact général",
    phone: "+212 5 22 66 46 41",
    tel: "+212522664641",
    email: "contact@omakrayonnage.com",
  },
];

const featuredDepartment = departments[2];
const supportDepartments = [departments[0], departments[1], departments[3], departments[4]];
const needs = ["Rayonnage lourd", "Semi-lourd / léger", "Cantilever", "Plateforme", "Sécurité", "SAV"];
const mapEmbedUrl =
  "https://www.google.com/maps?q=OMAK%20Service%20Bd%20Attaka%20Casablanca%2022580%20Maroc&output=embed";
const mapDirectionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=OMAK%20Service%20Bd%20Attaka%20Casablanca%2022580%20Maroc";

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

const inputClass =
  "h-[52px] w-full rounded-[16px] border border-black/10 bg-bg px-4 text-[14px] font-semibold text-ink outline-none transition-colors placeholder:text-ink2/55 focus:border-orange focus:bg-white";

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="bg-bg text-ink">
        <section id="top" className="px-[max(22px,4vw)] pb-10 pt-28 md:pt-30">
          <div className="mx-auto max-w-[1240px]">
            <div className="overflow-hidden rounded-[30px] border border-black/10 bg-white p-3 shadow-[0_22px_80px_rgba(17,19,21,.1)]">
              <div className="grid gap-3 lg:grid-cols-[1fr_430px]">
                <div className="omak-dark-pattern rounded-[24px] p-6 text-white md:p-8 lg:p-10">
                  <Reveal>
                    <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Contact</p>
                    <h1 className="mt-4 max-w-[15ch] text-[clamp(34px,4.2vw,56px)] font-semibold leading-[1] tracking-[-.035em]">
                      Un devis clair, une réponse rapide.
                    </h1>
                    <p className="mt-5 max-w-[58ch] text-[15px] font-medium leading-[1.65] text-white/66">
                      Partagez les dimensions, les charges et les contraintes de votre espace. L'équipe OMAK cadre
                      l'étude et vous oriente vers la solution la plus adaptée.
                    </p>
                  </Reveal>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {["Devis gratuit", "Étude technique", "Réponse rapide"].map((item) => (
                      <Reveal key={item}>
                        <div className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/[.06] px-4 py-3 text-[12px] font-bold uppercase tracking-[.1em] text-white/76">
                          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-orange text-white">
                            <CheckIcon />
                          </span>
                          {item}
                        </div>
                      </Reveal>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="#devis"
                      className="rounded-full bg-orange px-6 py-3 text-[14px] font-bold text-white shadow-[0_14px_34px_rgba(242,72,28,.3)] transition-colors hover:bg-orangedark"
                    >
                      Remplir le formulaire →
                    </a>
                    <a
                      href="mailto:commercial@omakrayonnage.com"
                      className="rounded-full border border-white/14 px-6 py-3 text-[14px] font-bold text-white/78 transition-colors hover:text-white"
                    >
                      commercial@omakrayonnage.com
                    </a>
                  </div>
                </div>

                <div className="grid gap-3">
                  <Reveal className="reveal-img">
                    <div className="relative min-h-[280px] overflow-hidden rounded-[24px] lg:min-h-[360px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/img/cta-etude-clean.png"
                        alt="Étude de projet de rayonnage industriel"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(8,8,14,.68))]" />
                      <div className="absolute bottom-4 left-4 right-4 rounded-[20px] border border-white/18 bg-white/92 p-4 text-ink shadow-[0_18px_44px_rgba(17,19,21,.16)] backdrop-blur-md">
                        <p className="text-[11px] font-bold uppercase tracking-[.18em] text-orange">Service commercial</p>
                        <a href="tel:+212645122727" className="mt-1 block text-[18px] font-semibold tracking-[-.01em]">
                          +212 6 45 12 27 27
                        </a>
                      </div>
                    </div>
                  </Reveal>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    <Reveal>
                      <a
                        href="tel:+212522664641"
                        className="flex items-center justify-between rounded-[20px] border border-black/10 bg-bg px-5 py-4 text-[13px] font-bold text-ink transition-colors hover:border-orange"
                      >
                        Direction
                        <span className="text-orange">05 22 66 46 41</span>
                      </a>
                    </Reveal>
                    <Reveal>
                      <a
                        href="#map"
                        className="flex items-center justify-between rounded-[20px] border border-black/10 bg-bg px-5 py-4 text-[13px] font-bold text-ink transition-colors hover:border-orange"
                      >
                        Localisation
                        <span className="text-orange">Casablanca</span>
                      </a>
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="devis" className="px-[max(22px,4vw)] py-8 md:py-14">
          <div className="mx-auto grid max-w-[1240px] gap-6 lg:grid-cols-[1.05fr_.95fr]">
            <Reveal>
              <form
                action="mailto:commercial@omakrayonnage.com"
                method="post"
                encType="text/plain"
                className="rounded-[30px] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(17,19,21,.07)] md:p-7"
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Devis gratuit</p>
                    <h2 className="mt-3 text-[clamp(28px,3.6vw,44px)] font-semibold leading-[1] tracking-[-.03em]">
                      Envoyez votre besoin.
                    </h2>
                  </div>
                  <span className="rounded-full border border-black/10 bg-bg px-4 py-2 text-[11px] font-bold uppercase tracking-[.12em] text-ink2">
                    2 min
                  </span>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <input className={`${inputClass} sm:col-span-2`} name="Nom complet" placeholder="Nom complet" required />
                  <input className={inputClass} name="Téléphone" placeholder="Téléphone" required />
                  <input className={inputClass} type="email" name="Email" placeholder="Email" required />
                  <input className={inputClass} name="Société" placeholder="Nom de la société" />
                  <input className={inputClass} name="Ville" placeholder="Ville" />
                </div>

                <div className="mt-4">
                  <p className="mb-3 text-[12px] font-bold uppercase tracking-[.16em] text-ink2">Type de besoin</p>
                  <div className="flex flex-wrap gap-2">
                    {needs.map((need) => (
                      <label key={need} className="cursor-pointer">
                        <input className="peer sr-only" type="checkbox" name="Besoin" value={need} />
                        <span className="block rounded-full border border-black/10 bg-bg px-4 py-2 text-[12px] font-bold text-ink2 transition-colors peer-checked:border-orange peer-checked:bg-orange peer-checked:text-white">
                          {need}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <textarea
                  className="mt-4 min-h-32 w-full resize-none rounded-[18px] border border-black/10 bg-bg px-4 py-4 text-[14px] font-semibold leading-[1.5] text-ink outline-none transition-colors placeholder:text-ink2/55 focus:border-orange focus:bg-white"
                  name="Message"
                  placeholder="Votre besoin: dimensions, charges, surface, délai souhaité..."
                />

                <button
                  type="submit"
                  className="mt-5 w-full rounded-full bg-orange px-8 py-4 text-[15px] font-bold text-white shadow-[0_12px_34px_rgba(242,72,28,.32)] transition-colors hover:bg-orangedark"
                >
                  Envoyer la demande →
                </button>
              </form>
            </Reveal>

            <Reveal>
              <div className="relative overflow-hidden rounded-[30px] border border-black/10 bg-white p-5 shadow-[0_18px_60px_rgba(17,19,21,.07)] md:p-6">
                <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-orange/10 blur-3xl" />
                <div className="relative">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div>
                      <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Coordonnées</p>
                      <h2 className="mt-3 max-w-[13ch] text-[clamp(28px,3.4vw,42px)] font-semibold leading-[1] tracking-[-.03em]">
                        Contactez le bon service.
                      </h2>
                    </div>
                    <span className="w-fit rounded-full border border-black/10 bg-bg px-4 py-2 text-[11px] font-bold uppercase tracking-[.14em] text-ink2">
                      Équipe locale
                    </span>
                  </div>

                  <article className="omak-dark-pattern mt-6 overflow-hidden rounded-[24px] p-5 text-white shadow-[0_18px_46px_rgba(17,19,21,.16)]">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[.22em] text-orange">Priorité devis</p>
                        <h3 className="mt-2 text-[24px] font-semibold leading-none tracking-[-.02em]">
                          {featuredDepartment.label}
                        </h3>
                      </div>
                      <span className="rounded-full border border-white/12 bg-white/[.08] px-3 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-white/64">
                        Réponse rapide
                      </span>
                    </div>
                    <p className="mt-4 max-w-[42ch] text-[13px] font-medium leading-[1.55] text-white/62">
                      Pour un chiffrage, une visite technique ou un besoin urgent de rayonnage.
                    </p>
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
                        key={item.label}
                        className="group rounded-[20px] border border-black/10 bg-bg/80 p-4 transition-all hover:border-orange/35 hover:bg-white hover:shadow-[0_14px_34px_rgba(17,19,21,.07)]"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <div className="flex items-center gap-3">
                              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[14px] border border-black/10 bg-white text-orange transition-colors group-hover:border-orange/30">
                                {index % 2 === 0 ? <PhoneIcon /> : <MailIcon />}
                              </span>
                              <h3 className="text-[12px] font-bold uppercase tracking-[.16em] text-ink">
                                {item.label}
                              </h3>
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

        <section id="map" className="px-[max(22px,4vw)] py-8 md:py-14">
          <div className="mx-auto max-w-[1240px] overflow-hidden rounded-[30px] bg-white shadow-[0_20px_70px_rgba(17,19,21,.08)] ring-1 ring-black/10">
            <div className="grid gap-0 lg:grid-cols-[.72fr_1.28fr]">
            <Reveal>
              <div className="omak-dark-pattern flex h-full flex-col justify-between gap-8 p-7 text-white md:p-8">
                <div className="grid h-[52px] w-[52px] place-items-center rounded-[18px] bg-orange">
                  <PinIcon />
                </div>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Localisation</p>
                  <h2 className="mt-4 max-w-[12ch] text-[clamp(30px,4vw,48px)] font-semibold leading-[1] tracking-[-.03em]">
                    Retrouvez OMAK à Casablanca.
                  </h2>
                  <p className="mt-5 text-[15px] font-medium leading-[1.6] text-white/64">
                    Bd Attaka, Casablanca 22580
                    <br />
                    Maroc
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={mapDirectionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-orange px-5 py-3 text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(242,72,28,.32)] transition-colors hover:bg-orangedark"
                  >
                    Itinéraire →
                  </a>
                  <a
                    href="tel:+212645122727"
                    className="rounded-full border border-white/14 px-5 py-3 text-[13px] font-bold text-white/78 transition-colors hover:text-white"
                  >
                    Appeler
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="relative min-h-[360px] bg-bg p-3 md:min-h-[430px]">
                <iframe
                  title="Carte OMAK RAYONNAGE Casablanca"
                  src={mapEmbedUrl}
                  className="h-full min-h-[336px] w-full rounded-[24px] border-0 md:min-h-[406px]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="pointer-events-none absolute bottom-7 left-7 rounded-[18px] border border-black/10 bg-white/92 px-5 py-4 shadow-[0_16px_44px_rgba(17,19,21,.14)] backdrop-blur-md">
                  <div className="text-[11px] font-bold uppercase tracking-[.18em] text-orange">OMAK Service</div>
                  <div className="mt-1 text-[14px] font-bold text-ink">Bd Attaka, Casablanca 22580</div>
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
