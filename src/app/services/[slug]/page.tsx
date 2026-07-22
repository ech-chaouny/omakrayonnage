import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { getService, services } from "@/lib/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

function MiniCheck() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Service",
    };
  }

  return {
    title: service.title,
    description: `${service.title} par OMAK RAYONNAGE: ${service.intro}`,
    openGraph: {
      title: `${service.title} | OMAK RAYONNAGE`,
      description: service.intro,
      images: [{ url: service.image, width: 1200, height: 900, alt: service.title }],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <Nav />
      <main className="bg-bg text-ink">
        <section id="top" className="px-[max(22px,4vw)] pb-10 pt-28 md:pt-30">
          <div className="mx-auto max-w-[1240px]">
            <Reveal>
              <Link href="/services" className="text-[12px] font-bold uppercase tracking-[.18em] text-ink2 transition-colors hover:text-orange">
                ← Tous les services
              </Link>
            </Reveal>

            <Reveal>
              <div className="omak-dark-pattern mt-5 rounded-[32px] p-6 text-white shadow-[0_24px_90px_rgba(17,19,21,.14)] md:p-8 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-end">
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[.26em] text-orange">{service.eyebrow}</p>
                    <h1 className="mt-4 max-w-[12ch] text-[clamp(38px,5vw,68px)] font-semibold leading-[.96] tracking-[-.04em]">
                      {service.title}
                    </h1>
                    <p className="mt-5 max-w-[68ch] text-[15px] font-medium leading-[1.75] text-white/66">{service.intro}</p>
                  </div>

                  <div className="grid gap-2 rounded-[24px] border border-white/10 bg-white/[.055] p-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[.2em] text-white/42">Service brief</p>
                    {service.stats.map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between gap-4 rounded-[14px] bg-white/[.055] px-4 py-3">
                        <span className="text-[10px] font-bold uppercase tracking-[.16em] text-white/42">{label}</span>
                        <span className="text-right text-[14px] font-semibold text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-[max(22px,4vw)] py-8 md:py-12">
          <div className="mx-auto grid max-w-[1240px] gap-6 lg:grid-cols-[1fr_360px]">
            <Reveal>
              <div className="rounded-[30px] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(17,19,21,.07)] md:p-8">
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Méthode</p>
                <h2 className="mt-3 max-w-[16ch] text-[clamp(30px,4vw,50px)] font-semibold leading-[1] tracking-[-.03em]">
                  Ce service avance en 3 temps.
                </h2>

                <div className="relative mt-8 grid gap-4">
                  <div className="absolute bottom-7 left-6 top-7 hidden w-px bg-black/10 md:block" />
                  {service.process.map(([title, text], index) => (
                    <div key={title} className="relative grid gap-4 rounded-[22px] border border-black/10 bg-bg p-4 md:grid-cols-[64px_1fr]">
                      <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-orange font-nb text-[18px] font-bold text-white shadow-[0_12px_28px_rgba(242,72,28,.22)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block text-[22px] font-semibold tracking-[-.02em]">{title}</span>
                        <span className="mt-2 block text-[14px] font-medium leading-[1.6] text-ink2">{text}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <aside className="lg:sticky lg:top-28">
                <div className="overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-[0_18px_60px_rgba(17,19,21,.07)]">
                  <div className="relative aspect-[4/3] bg-bg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(8,8,14,.5))]" />
                    <p className="absolute bottom-4 left-4 right-4 rounded-[18px] bg-white/92 p-4 text-[18px] font-semibold leading-[1.15] tracking-[-.02em] shadow-[0_16px_36px_rgba(17,19,21,.12)] backdrop-blur-md">
                      {service.headline}
                    </p>
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[.22em] text-orange">Demande service</p>
                    <p className="mt-3 text-[14px] font-medium leading-[1.6] text-ink2">
                      Ajoutez dimensions, charges, photos et contraintes pour une réponse plus précise.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-5 inline-flex w-full justify-center rounded-full bg-orange px-6 py-3 text-[14px] font-bold text-white shadow-[0_14px_34px_rgba(242,72,28,.3)] transition-colors hover:bg-orangedark"
                    >
                      Demander ce service →
                    </Link>
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </section>

        <section className="px-[max(22px,4vw)] py-8 md:py-12">
          <div className="mx-auto grid max-w-[1240px] gap-5 lg:grid-cols-[.9fr_1.1fr]">
            <Reveal>
              <div className="rounded-[30px] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(17,19,21,.07)] md:p-7">
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Livrables</p>
                <h2 className="mt-3 text-[clamp(28px,3.6vw,44px)] font-semibold leading-[1] tracking-[-.03em]">Ce qui sort de l'étape.</h2>
                <div className="mt-7 grid gap-3">
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex gap-3 border-b border-black/10 pb-3 text-[14px] font-semibold leading-[1.45] text-ink2 last:border-0 last:pb-0">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-orange text-white">
                        <MiniCheck />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[30px] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(17,19,21,.07)] md:p-7">
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Impact</p>
                <h2 className="mt-3 text-[clamp(28px,3.6vw,44px)] font-semibold leading-[1] tracking-[-.03em]">Pourquoi c'est utile.</h2>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {service.advantages.map((item) => (
                    <div key={item} className="rounded-[18px] border border-black/10 bg-bg p-4">
                      <span className="grid h-8 w-8 place-items-center rounded-[12px] bg-ink text-orange">
                        <MiniCheck />
                      </span>
                      <p className="mt-4 text-[14px] font-semibold leading-[1.5] text-ink2">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-[max(22px,4vw)] py-8 md:py-12">
          <div className="mx-auto max-w-[1240px] rounded-[30px] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(17,19,21,.07)] md:p-8">
            <Reveal>
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Continuité</p>
                  <h2 className="mt-3 text-[clamp(28px,3.8vw,46px)] font-semibold leading-[1] tracking-[-.03em]">Les autres étapes du parcours.</h2>
                </div>
                <Link href="/services" className="text-[13px] font-bold uppercase tracking-[.1em] text-orange">
                  Tous les services →
                </Link>
              </div>
            </Reveal>

            <div className="mt-7 grid gap-3 md:grid-cols-3">
              {relatedServices.map((item, index) => (
                <Reveal key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="group block rounded-[22px] border border-black/10 bg-bg p-5 transition-all hover:-translate-y-1 hover:border-orange/35 hover:bg-white"
                  >
                    <span className="font-nb text-[28px] font-bold leading-none text-orange">{String(index + 1).padStart(2, "0")}</span>
                    <p className="mt-5 text-[20px] font-semibold leading-[1.1] tracking-[-.02em]">{item.title}</p>
                    <p className="mt-3 text-[13px] font-medium leading-[1.55] text-ink2">{item.caption}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[max(22px,4vw)] py-10 md:py-16">
          <div className="omak-dark-pattern mx-auto grid max-w-[1240px] gap-6 rounded-[30px] p-6 text-white md:grid-cols-[1fr_auto] md:items-center md:p-9">
            <Reveal>
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Projet</p>
                <h2 className="mt-3 max-w-[20ch] text-[clamp(28px,4vw,48px)] font-semibold leading-[1] tracking-[-.03em]">
                  On prépare cette étape pour votre entrepôt ?
                </h2>
              </div>
            </Reveal>
            <Reveal>
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-orange px-7 py-4 text-[14px] font-bold text-white shadow-[0_14px_34px_rgba(242,72,28,.32)] transition-colors hover:bg-orangedark"
              >
                Demander un devis →
              </Link>
            </Reveal>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
