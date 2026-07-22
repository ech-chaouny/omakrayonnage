import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Découvrez les services OMAK RAYONNAGE: étude et conception, installation, contrôle des installations et service après-vente.",
};

const methodPoints = [
  ["01", "Cadrage", "Besoin, mesures, charges, contraintes et objectif d'exploitation."],
  ["02", "Décision", "Choix technique, budget, planning et organisation terrain."],
  ["03", "Exécution", "Montage, contrôle, réception et suivi après mise en service."],
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="bg-bg text-ink">
        <section id="top" className="px-[max(22px,4vw)] pb-10 pt-28 md:pt-30">
          <div className="mx-auto grid max-w-[1240px] gap-5 lg:grid-cols-[.9fr_1.1fr]">
            <Reveal>
              <div className="omak-dark-pattern rounded-[30px] p-7 text-white shadow-[0_22px_80px_rgba(17,19,21,.13)] md:p-9">
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Services</p>
                <h1 className="mt-4 max-w-[11ch] text-[clamp(34px,5vw,64px)] font-semibold leading-[.96] tracking-[-.04em]">
                  Une méthode pour chaque projet.
                </h1>
                <p className="mt-5 max-w-[58ch] text-[15px] font-medium leading-[1.7] text-white/62">
                  Les services OMAK ne sont pas une vitrine. C'est le parcours qui transforme un besoin de stockage
                  en installation lisible: étude, montage, contrôle et suivi.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="rounded-full bg-orange px-6 py-3 text-[14px] font-bold text-white shadow-[0_14px_34px_rgba(242,72,28,.3)] transition-colors hover:bg-orangedark"
                  >
                    Cadrer mon projet →
                  </Link>
                  <span className="rounded-full border border-white/12 px-5 py-3 text-[12px] font-bold uppercase tracking-[.12em] text-white/62">
                    4 services clés
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[30px] border border-black/10 bg-white p-5 shadow-[0_18px_60px_rgba(17,19,21,.08)] md:p-6">
                <p className="text-[12px] font-bold uppercase tracking-[.22em] text-orange">Parcours OMAK</p>
                <div className="mt-5 grid gap-3">
                  {services.map((service, index) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group grid grid-cols-[52px_1fr_auto] items-center gap-4 rounded-[20px] border border-black/10 bg-bg px-4 py-3 transition-all hover:border-orange/40 hover:bg-white hover:shadow-[0_14px_36px_rgba(17,19,21,.08)]"
                    >
                      <span className="grid h-12 w-12 place-items-center rounded-[16px] bg-ink font-nb text-[18px] font-bold text-orange transition-colors group-hover:bg-orange group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[17px] font-semibold tracking-[-.01em]">{service.title}</span>
                        <span className="mt-1 block text-[13px] font-medium leading-[1.45] text-ink2">{service.caption}</span>
                      </span>
                      <span className="hidden rounded-full border border-black/10 px-3 py-2 text-[11px] font-bold uppercase tracking-[.1em] text-orange transition-colors group-hover:border-orange/35 md:inline-flex">
                        Voir
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-[max(22px,4vw)] py-10 md:py-14">
          <div className="mx-auto max-w-[1240px]">
            <Reveal>
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Workflow</p>
                  <h2 className="mt-3 max-w-[14ch] text-[clamp(30px,4vw,50px)] font-semibold leading-[1] tracking-[-.03em]">
                    Le service suit le chantier.
                  </h2>
                </div>
                <p className="max-w-[48ch] text-[15px] font-medium leading-[1.65] text-ink2">
                  Chaque service répond à une étape précise. La lecture reste simple: ce qui entre, ce qui sort, et ce
                  que votre équipe gagne sur le terrain.
                </p>
              </div>
            </Reveal>

            <div className="relative mt-9">
              <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-black/10 md:block" />
              <div className="grid gap-4">
                {services.map((service, index) => (
                  <Reveal key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group grid gap-4 rounded-[26px] border border-black/10 bg-white p-4 shadow-[0_14px_44px_rgba(17,19,21,.06)] transition-all hover:-translate-y-1 hover:border-orange/35 hover:shadow-[0_20px_64px_rgba(17,19,21,.1)] md:grid-cols-[76px_1fr_270px] md:items-center"
                    >
                      <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-orange font-nb text-[18px] font-bold text-white shadow-[0_12px_28px_rgba(242,72,28,.24)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block text-[11px] font-bold uppercase tracking-[.22em] text-orange">{service.eyebrow}</span>
                        <span className="mt-2 block text-[26px] font-semibold leading-[1.06] tracking-[-.025em] md:text-[30px]">
                          {service.title}
                        </span>
                        <span className="mt-3 block max-w-[64ch] text-[14px] font-medium leading-[1.6] text-ink2">
                          {service.intro}
                        </span>
                      </span>
                      <span className="rounded-[20px] border border-black/10 bg-bg p-4">
                        {service.stats.map(([label, value]) => (
                          <span key={label} className="flex items-center justify-between gap-4 border-b border-black/8 py-2 last:border-0">
                            <span className="text-[10px] font-bold uppercase tracking-[.16em] text-ink2/70">{label}</span>
                            <span className="text-right text-[13px] font-semibold text-ink">{value}</span>
                          </span>
                        ))}
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-[max(22px,4vw)] py-10 md:py-14">
          <div className="mx-auto grid max-w-[1240px] gap-4 md:grid-cols-3">
            {methodPoints.map(([number, title, text]) => (
              <Reveal key={number}>
                <div className="h-full rounded-[26px] border border-black/10 bg-white p-6 shadow-[0_14px_44px_rgba(17,19,21,.06)]">
                  <span className="font-nb text-[34px] font-bold leading-none text-orange">{number}</span>
                  <h3 className="mt-5 text-[22px] font-semibold tracking-[-.02em]">{title}</h3>
                  <p className="mt-3 text-[14px] font-medium leading-[1.6] text-ink2">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="px-[max(22px,4vw)] py-10 md:py-16">
          <div className="omak-dark-pattern mx-auto grid max-w-[1240px] gap-6 rounded-[30px] p-6 text-white shadow-[0_22px_80px_rgba(17,19,21,.12)] md:grid-cols-[1fr_auto] md:items-center md:p-9">
            <Reveal>
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Votre projet</p>
                <h2 className="mt-3 max-w-[20ch] text-[clamp(28px,4vw,48px)] font-semibold leading-[1] tracking-[-.03em]">
                  On choisit le bon service selon votre besoin.
                </h2>
              </div>
            </Reveal>
            <Reveal>
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-orange px-7 py-4 text-[14px] font-bold text-white shadow-[0_14px_34px_rgba(242,72,28,.32)] transition-colors hover:bg-orangedark"
              >
                Parler à l'équipe →
              </Link>
            </Reveal>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
