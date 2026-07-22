import Link from "next/link";
import { products } from "@/lib/products";
import Reveal from "./Reveal";

export default function Products() {
  return (
    <section id="produits" className="px-[max(22px,4vw)] py-24 md:py-32">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Solutions</p>
              <h2 className="mt-4 max-w-[14ch] text-[clamp(34px,5vw,68px)] font-semibold leading-[1] tracking-[-.03em] text-ink">
                Chaque usage a son rayonnage.
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <p className="max-w-[42ch] text-[16px] font-medium leading-[1.6] text-ink2">
              Une gamme complète, mais une approche simple: choisir la structure qui sert vraiment votre flux.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Reveal key={p.slug}>
              <article id={p.anchor} className="group scroll-mt-32">
                <div className="aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-[0_14px_40px_rgba(17,19,21,.06)] ring-1 ring-black/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <h3 className="font-nb text-[21px] font-bold text-ink">{p.title}</h3>
                  <span className="mt-1 shrink-0 rounded-full border border-black/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[.1em] text-ink2">
                    {p.partner}
                  </span>
                </div>
                <p className="mt-2 text-[14px] font-medium leading-[1.5] text-ink2">{p.caption}</p>
                <Link
                  href={`/produits/${p.slug}`}
                  className="mt-4 inline-block text-[13px] font-bold uppercase tracking-[.08em] text-orange"
                >
                  Voir la solution
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
