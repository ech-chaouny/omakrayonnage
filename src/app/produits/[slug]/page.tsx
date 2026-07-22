import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { getProduct, products } from "@/lib/products";

type ProductPageProps = {
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
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Produit",
    };
  }

  return {
    title: product.title,
    description: `${product.title} par OMAK RAYONNAGE: ${product.intro}`,
    openGraph: {
      title: `${product.title} | OMAK RAYONNAGE`,
      description: product.intro,
      images: [{ url: product.image, width: 1200, height: 900, alt: product.title }],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <>
      <Nav />
      <main className="bg-bg text-ink">
        <section id="top" className="px-[max(22px,4vw)] pb-10 pt-28 md:pt-30">
          <div className="mx-auto max-w-[1240px] overflow-hidden rounded-[30px] border border-black/10 bg-white p-3 shadow-[0_22px_80px_rgba(17,19,21,.1)]">
            <div className="grid gap-3 lg:grid-cols-[1fr_.92fr]">
              <div className="omak-dark-pattern rounded-[24px] p-6 text-white md:p-8 lg:p-10">
                <Reveal>
                  <Link href="/produits" className="text-[12px] font-bold uppercase tracking-[.18em] text-white/50 transition-colors hover:text-white">
                    ← Tous les produits
                  </Link>
                  <p className="mt-9 text-[12px] font-bold uppercase tracking-[.24em] text-orange">{product.eyebrow}</p>
                  <h1 className="mt-4 max-w-[12ch] text-[clamp(38px,5.2vw,70px)] font-semibold leading-[.96] tracking-[-.04em]">
                    {product.title}
                  </h1>
                  <p className="mt-5 max-w-[58ch] text-[16px] font-medium leading-[1.7] text-white/66">{product.intro}</p>
                </Reveal>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {product.stats.map(([value, label]) => (
                    <Reveal key={value}>
                      <div className="rounded-[18px] border border-white/10 bg-white/[.06] px-4 py-4">
                        <p className="text-[10px] font-bold uppercase tracking-[.16em] text-white/42">{value}</p>
                        <p className="mt-2 text-[18px] font-semibold leading-none text-white">{label}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="rounded-full bg-orange px-6 py-3 text-[14px] font-bold text-white shadow-[0_14px_34px_rgba(242,72,28,.3)] transition-colors hover:bg-orangedark"
                  >
                    Demander un devis →
                  </Link>
                  <Link
                    href="/produits"
                    className="rounded-full border border-white/14 px-6 py-3 text-[14px] font-bold text-white/78 transition-colors hover:text-white"
                  >
                    Voir la gamme
                  </Link>
                </div>
              </div>

              <Reveal className="reveal-img">
                <div className="relative min-h-[360px] overflow-hidden rounded-[24px] bg-white lg:min-h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.image} alt={product.title} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(8,8,14,.7))]" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-[22px] border border-white/18 bg-white/92 p-5 shadow-[0_18px_44px_rgba(17,19,21,.16)] backdrop-blur-md">
                    <p className="text-[11px] font-bold uppercase tracking-[.18em] text-orange">Fabricant / gamme</p>
                    <p className="mt-1 text-[22px] font-semibold tracking-[-.02em] text-ink">{product.partner}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="px-[max(22px,4vw)] py-10 md:py-16">
          <div className="mx-auto grid max-w-[1240px] gap-6 lg:grid-cols-[.9fr_1.1fr]">
            <Reveal>
              <div className="rounded-[30px] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(17,19,21,.07)] md:p-7">
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Usage</p>
                <h2 className="mt-3 max-w-[12ch] text-[clamp(30px,4vw,48px)] font-semibold leading-[1] tracking-[-.03em]">
                  Pour quels besoins ?
                </h2>
                <div className="mt-7 grid gap-3">
                  {product.uses.map((item) => (
                    <div key={item} className="flex gap-3 rounded-[18px] border border-black/10 bg-bg p-4 text-[14px] font-semibold leading-[1.45] text-ink2">
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
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Avantages</p>
                <h2 className="mt-3 text-[clamp(30px,4vw,48px)] font-semibold leading-[1] tracking-[-.03em]">
                  Ce que la solution apporte.
                </h2>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {product.advantages.map((item) => (
                    <div key={item} className="rounded-[18px] border border-black/10 bg-bg p-4">
                      <span className="grid h-8 w-8 place-items-center rounded-[12px] bg-orange text-white">
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

        <section className="px-[max(22px,4vw)] py-10 md:py-16">
          <div className="mx-auto grid max-w-[1240px] gap-6 lg:grid-cols-[.9fr_1.1fr]">
            <Reveal>
              <div className="rounded-[30px] border border-black/10 bg-white p-6 shadow-[0_18px_60px_rgba(17,19,21,.07)] md:p-7">
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Détails</p>
                <h2 className="mt-3 text-[clamp(30px,4vw,48px)] font-semibold leading-[1] tracking-[-.03em]">
                  Fiche rapide.
                </h2>
                <div className="mt-7 divide-y divide-black/10 overflow-hidden rounded-[22px] border border-black/10">
                  {product.specs.map(([label, value]) => (
                    <div key={label} className="grid gap-2 bg-bg px-5 py-4 sm:grid-cols-[150px_1fr]">
                      <span className="text-[11px] font-bold uppercase tracking-[.16em] text-orange">{label}</span>
                      <span className="text-[14px] font-bold text-ink">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="omak-dark-pattern rounded-[30px] p-6 text-white shadow-[0_20px_70px_rgba(17,19,21,.12)] md:p-7">
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Méthode OMAK</p>
                <h2 className="mt-3 text-[clamp(30px,4vw,48px)] font-semibold leading-[1] tracking-[-.03em]">
                  De l'étude au montage.
                </h2>
                <div className="mt-7 grid gap-3">
                  {product.steps.map(([title, text], index) => (
                    <div key={title} className="grid gap-4 rounded-[20px] border border-white/10 bg-white/[.055] p-4 sm:grid-cols-[72px_1fr]">
                      <span className="font-nb text-[34px] font-bold leading-none text-orange">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block text-[18px] font-semibold text-white">{title}</span>
                        <span className="mt-2 block text-[14px] font-medium leading-[1.55] text-white/58">{text}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-[max(22px,4vw)] py-10 md:py-16">
          <div className="mx-auto max-w-[1240px]">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <Reveal>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">À comparer</p>
                  <h2 className="mt-3 text-[clamp(30px,4vw,48px)] font-semibold leading-[1] tracking-[-.03em]">
                    Autres solutions.
                  </h2>
                </div>
              </Reveal>
              <Reveal>
                <Link href="/produits" className="text-[13px] font-bold uppercase tracking-[.1em] text-orange">
                  Catalogue complet →
                </Link>
              </Reveal>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {relatedProducts.map((item) => (
                <Reveal key={item.slug}>
                  <Link href={`/produits/${item.slug}`} className="group block rounded-[24px] border border-black/10 bg-white p-3 shadow-[0_14px_40px_rgba(17,19,21,.06)] transition-all hover:-translate-y-1">
                    <div className="aspect-[4/3] overflow-hidden rounded-[18px] bg-bg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-[700ms] group-hover:scale-[1.05]" />
                    </div>
                    <div className="p-4">
                      <p className="text-[11px] font-bold uppercase tracking-[.16em] text-orange">{item.partner}</p>
                      <h3 className="mt-2 text-[22px] font-semibold tracking-[-.02em]">{item.title}</h3>
                    </div>
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
                <h2 className="mt-3 max-w-[20ch] text-[clamp(28px,4vw,50px)] font-semibold leading-[1] tracking-[-.03em]">
                  Vous voulez valider cette solution pour votre site ?
                </h2>
              </div>
            </Reveal>
            <Reveal>
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-orange px-7 py-4 text-[14px] font-bold text-white shadow-[0_14px_34px_rgba(242,72,28,.32)] transition-colors hover:bg-orangedark"
              >
                Demander une étude →
              </Link>
            </Reveal>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
