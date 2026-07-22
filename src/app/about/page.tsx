import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Qui Sommes-Nous",
  description:
    "Découvrez OMAK RAYONNAGE: spécialiste du rayonnage industriel au Maroc, partenaire STOW, distributeur exclusif MANORGA, de l'étude au montage.",
};

const figures = [
  ["+90", "Entreprises équipées"],
  ["2", "Partenaires européens"],
  ["6", "Étapes maîtrisées"],
  ["ISO", "Qualité certifiée"],
];

const ranges = [
  {
    title: "Gamme légère",
    text: "Rayonnages archives fixes ou mobiles, petits accessoires, bacs et pièces de détail.",
  },
  {
    title: "Gamme semi-lourde",
    text: "Rayonnages PDR, picking, pneus, cantilever pour charges verticales et zones techniques.",
  },
  {
    title: "Gamme lourde",
    text: "Palettiers, accumulation, rayonnage dynamique et rayonnage mobile à palettes.",
  },
  {
    title: "Gamme spéciale",
    text: "Navettes, plateformes, mezzanines, silos et solutions personnalisées sur mesure.",
  },
];

const services = [
  "Audit du besoin",
  "Étude & conception",
  "Conception 3D",
  "Installation & montage",
  "Contrôle des installations",
  "Maintenance & SAV",
];

const quality = [
  {
    title: "Équipe technique professionnelle",
    text: "Des équipes formées, habituées aux contraintes terrain, pour sécuriser chaque étape du projet.",
    icon: (
      <>
        <path d="M12 5.5v4.2" />
        <path d="M8.4 7.2 12 9.7l3.6-2.5" />
        <path d="M5.7 15.8a4 4 0 0 1 4-4h4.6a4 4 0 0 1 4 4v2.7H5.7z" />
        <path d="M8 19v-2.2M16 19v-2.2" />
      </>
    ),
  },
  {
    title: "Relation client durable",
    text: "Conseil, réactivité et suivi après installation pour construire une relation de confiance sur la durée.",
    icon: (
      <>
        <path d="M7 11.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M17 11.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M3.5 19a4.2 4.2 0 0 1 7-3.1" />
        <path d="M13.5 15.9a4.2 4.2 0 0 1 7 3.1" />
        <path d="m9.3 16.8 2 2 4-5" />
      </>
    ),
  },
];

const partners = [
  {
    name: "STOW",
    role: "Partenaire systèmes lourds",
    logo: "/partners/stow.svg",
    text: "Palettiers, grande hauteur, accumulation, navettes, stockage dynamique et cantilever lourd.",
  },
  {
    name: "MANORGA",
    role: "Distributeur exclusif",
    logo: "/partners/manorga-black.png",
    text: "Rayonnage léger, mi-lourd, plateformes, cloisons grillagées, accessoires et sécurité.",
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="bg-bg text-ink">
        <section id="top" className="px-[max(22px,4vw)] pb-10 pt-28 md:pb-14 md:pt-30">
          <div className="mx-auto max-w-[1240px]">
            <div className="grid overflow-hidden rounded-[30px] bg-[#08080e] shadow-[0_24px_80px_rgba(17,19,21,.14)] ring-1 ring-black/10 lg:grid-cols-[.9fr_1.1fr]">
              <div className="omak-dark-pattern flex flex-col justify-between gap-8 p-[max(22px,3.6vw)] text-white">
                <Reveal>
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Qui sommes-nous</p>
                    <h1 className="font-nb mt-4 max-w-[14ch] text-[clamp(34px,4.8vw,62px)] font-semibold leading-[.98] tracking-[-.035em]">
                      L'expertise locale du stockage industriel.
                    </h1>
                    <p className="mt-5 max-w-[52ch] text-[15px] font-medium leading-[1.6] text-white/64">
                      OMAK RAYONNAGE accompagne les entreprises au Maroc dans la vente, l'étude et l'installation de
                      systèmes de rayonnage métallique, du besoin initial jusqu'au service après-vente.
                    </p>
                  </div>
                </Reveal>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
                  {figures.map(([value, label]) => (
                    <Reveal key={label}>
                      <div className="rounded-[16px] border border-white/10 bg-white/[.06] p-3">
                        <div className="font-nb text-[26px] font-bold leading-none text-orange">{value}</div>
                        <div className="mt-2 text-[10px] font-bold uppercase tracking-[.12em] text-white/58">{label}</div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              <Reveal className="reveal-img">
                <div className="relative min-h-[340px] lg:h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/about-team-clean.png"
                    alt="Équipe OMAK RAYONNAGE dans un entrepôt équipé"
                    className="h-full min-h-[340px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,14,.35),transparent_50%)]" />
                  <div className="absolute bottom-5 left-5 rounded-[18px] border border-white/14 bg-black/42 px-4 py-3 text-white backdrop-blur-md">
                    <div className="text-[10px] font-bold uppercase tracking-[.18em] text-orange">Casablanca</div>
                    <div className="mt-1 text-[14px] font-bold">Étude, montage, contrôle et SAV</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="px-[max(22px,4vw)] py-8 md:py-14">
          <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <Reveal>
              <div className="sticky top-28">
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">OMAK Maroc</p>
                <h2 className="mt-4 max-w-[13ch] text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1] tracking-[-.03em]">
                  Un interlocuteur unique.
                </h2>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-[26px] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(17,19,21,.06)] md:p-7">
                <p className="text-[18px] font-semibold leading-[1.5] tracking-[-.015em] text-ink">
                  Nous proposons une large gamme de produits et services pour les entrepôts, magasins, ateliers et bureaux:
                  rayonnage métallique, plateformes, mezzanines, protections, accessoires et solutions personnalisées.
                </p>
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

        <section className="px-[max(22px,4vw)] py-8 md:py-14">
          <div className="mx-auto max-w-[1240px]">
            <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <Reveal>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Gammes</p>
                  <h2 className="mt-4 max-w-[16ch] text-[clamp(30px,4vw,52px)] font-semibold leading-[1] tracking-[-.03em]">
                    Chaque contrainte a sa solution.
                  </h2>
                </div>
              </Reveal>
              <Reveal>
                <p className="max-w-[48ch] text-[15px] font-medium leading-[1.6] text-ink2">
                  La bonne réponse dépend de la charge, du flux, de la hauteur, des accès et de l'évolution future du site.
                </p>
              </Reveal>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {ranges.map((item, index) => (
                <Reveal key={item.title}>
                  <article className="group min-h-[220px] rounded-[24px] border border-black/10 bg-white p-5 shadow-[0_16px_48px_rgba(17,19,21,.055)] transition-transform duration-500 hover:-translate-y-1">
                    <div className="font-nb text-[30px] font-bold leading-none text-orange">
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

        <section className="px-[max(22px,4vw)] py-8 md:py-14">
          <div className="mx-auto max-w-[1240px] overflow-hidden rounded-[30px] bg-white shadow-[0_20px_70px_rgba(17,19,21,.08)] ring-1 ring-black/10">
            <div className="grid lg:grid-cols-[1.05fr_.95fr]">
              <Reveal className="reveal-img">
                <div className="h-full min-h-[340px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/realisation-palettier-clean.png"
                    alt="Installation de rayonnage palettier"
                    className="h-full min-h-[340px] w-full object-cover"
                  />
                </div>
              </Reveal>
              <div className="p-[max(22px,3.6vw)]">
                <Reveal>
                  <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Méthode</p>
                  <h2 className="mt-4 max-w-[14ch] text-[clamp(30px,4vw,52px)] font-semibold leading-[1] tracking-[-.03em]">
                    Un parcours projet maîtrisé.
                  </h2>
                  <p className="mt-5 text-[15px] font-medium leading-[1.6] text-ink2">
                    L'objectif n'est pas seulement de vendre du matériel: il faut concevoir une installation cohérente,
                    contrôlable et durable.
                  </p>
                </Reveal>
                <div className="mt-6 grid gap-3">
                  {services.map((service, index) => (
                    <Reveal key={service}>
                      <div className="flex items-center gap-3 rounded-[16px] border border-black/10 bg-bg p-3">
                        <span className="font-nb grid h-10 w-10 shrink-0 place-items-center rounded-[14px] bg-ink text-[15px] font-bold text-white">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[14px] font-bold text-ink">{service}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[max(22px,4vw)] py-8 md:py-14">
          <div className="mx-auto max-w-[1240px]">
            <Reveal>
              <div className="mb-8 text-center">
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Qualité</p>
                <h2 className="mx-auto mt-4 max-w-[18ch] text-[clamp(30px,4vw,52px)] font-semibold leading-[1] tracking-[-.03em]">
                  Une exécution visible sur le terrain.
                </h2>
              </div>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2">
              {quality.map((item) => (
                <Reveal key={item.title}>
                  <article className="rounded-[26px] border border-black/10 bg-white p-6 shadow-[0_16px_48px_rgba(17,19,21,.055)]">
                    <div className="grid h-16 w-16 place-items-center rounded-[20px] bg-orange text-white shadow-[0_14px_30px_rgba(242,72,28,.22)]">
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
                        {item.icon}
                      </svg>
                    </div>
                    <h3 className="mt-6 text-[22px] font-bold tracking-[-.02em]">{item.title}</h3>
                    <p className="mt-3 text-[15px] font-medium leading-[1.6] text-ink2">{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[max(22px,4vw)] py-8 md:py-14">
          <div className="omak-dark-pattern mx-auto max-w-[1240px] overflow-hidden rounded-[30px] p-[max(20px,3.2vw)] text-white shadow-[0_20px_70px_rgba(17,19,21,.12)]">
            <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <Reveal>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Partenaires</p>
                  <h2 className="mt-4 max-w-[16ch] text-[clamp(30px,4vw,52px)] font-semibold leading-[1] tracking-[-.03em]">
                    Deux références européennes.
                  </h2>
                </div>
              </Reveal>
              <Reveal>
                <p className="max-w-[52ch] text-[15px] font-medium leading-[1.6] text-white/62">
                  STOW et MANORGA permettent à OMAK de couvrir les besoins lourds, légers, plateformes et accessoires avec
                  une exécution locale au Maroc.
                </p>
              </Reveal>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {partners.map((partner) => (
                <Reveal key={partner.name}>
                  <article className="rounded-[26px] bg-white p-5 text-ink shadow-[0_16px_44px_rgba(0,0,0,.18)]">
                    <div className="grid h-28 place-items-center rounded-[20px] border border-black/10 bg-bg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className={`w-auto object-contain ${partner.name === "MANORGA" ? "h-18" : "h-12"}`}
                      />
                    </div>
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-orange px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.14em] text-white">
                        {partner.role}
                      </span>
                    </div>
                    <h3 className="font-nb mt-5 text-[clamp(30px,3.4vw,46px)] font-bold leading-none tracking-[-.04em]">
                      {partner.name}
                    </h3>
                    <p className="mt-4 text-[15px] font-medium leading-[1.6] text-ink2">{partner.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[max(22px,4vw)] py-12 md:py-16">
          <div className="mx-auto max-w-[1040px] text-center">
            <Reveal>
              <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Projet</p>
              <h2 className="font-nb mx-auto mt-4 max-w-[20ch] text-[clamp(32px,4.2vw,56px)] font-semibold leading-[1] tracking-[-.03em]">
                Découvrez le choix intelligent pour votre installation.
              </h2>
              <p className="mx-auto mt-5 max-w-[58ch] text-[16px] font-medium leading-[1.6] text-ink2">
                Parlons de votre site, de vos charges, de vos flux et de la meilleure approche technique.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-orange px-8 py-4 text-[16px] font-semibold text-white shadow-[0_12px_36px_rgba(242,72,28,.35)] transition-colors hover:bg-orangedark"
                >
                  Demander un devis →
                </a>
                <a
                  href="tel:+212662500231"
                  className="rounded-full border border-black/15 bg-white px-8 py-4 text-[16px] font-semibold text-ink transition-colors hover:border-black/40"
                >
                  06 62 50 02 31
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
