"use client";
import Link from "next/link";
import { products } from "@/lib/products";
import { services } from "@/lib/services";
import Logo from "./Logo";

const links = [
  ["Contact", "/contact"],
];

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-5 z-50 px-4">
      <div className="relative mx-auto flex h-16 max-w-[1120px] items-center justify-between rounded-[28px] border border-white/10 bg-[linear-gradient(120deg,rgba(245,130,32,.18),rgba(8,8,14,.58)_38%,rgba(8,8,14,.46))] px-6 shadow-[0_18px_60px_rgba(0,0,0,.32)] backdrop-blur-xl">
        <Link href="/#top" aria-label="OMAK RAYONNAGE">
          <Logo light />
        </Link>
        <div className="hidden items-center gap-7 text-[14px] font-semibold text-white/80 md:flex">
          <Link href="/" className="transition-colors hover:text-white">
            Accueil
          </Link>
          <Link href="/about" className="transition-colors hover:text-white">
            À propos
          </Link>
          <div className="group relative flex h-16 items-center" aria-haspopup="true">
            <Link href="/produits" className="transition-colors hover:text-white group-hover:text-white">
              Produits
            </Link>
            <div className="invisible absolute left-1/2 top-full w-[680px] max-w-[calc(100vw-32px)] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[rgba(8,8,12,.94)] p-3 shadow-[0_24px_80px_rgba(0,0,0,.42)] backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4 px-3 py-2">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.22em] text-orange">Gamme OMAK</p>
                    <p className="mt-1 text-[13px] font-medium text-white/56">Choisissez le rayonnage adapté au flux.</p>
                  </div>
                  <Link
                    href="/produits"
                    className="shrink-0 rounded-full border border-white/12 px-4 py-2 text-[11px] font-bold uppercase tracking-[.12em] text-white/72 transition-colors hover:border-orange hover:text-white"
                  >
                    Tout voir
                  </Link>
                </div>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {products.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/produits/${product.slug}`}
                      className="group/item grid grid-cols-[82px_1fr] gap-3 rounded-[18px] border border-white/8 bg-white/[.045] p-2.5 transition-all hover:border-orange/45 hover:bg-white/[.08]"
                    >
                      <span className="relative h-[62px] overflow-hidden rounded-[14px] bg-white/8">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product.image}
                          alt=""
                          className="h-full w-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                        />
                        <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,8,12,.28))]" />
                      </span>
                      <span className="min-w-0 py-1">
                        <span className="block truncate text-[14px] font-bold text-white transition-colors group-hover/item:text-orange">
                          {product.navTitle}
                        </span>
                        <span className="mt-1 block text-[12px] font-medium leading-[1.35] text-white/52">
                          {product.caption}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="group relative flex h-16 items-center" aria-haspopup="true">
            <Link href="/services" className="transition-colors hover:text-white group-hover:text-white">
              Services
            </Link>
            <div className="invisible absolute left-1/2 top-full w-[520px] max-w-[calc(100vw-32px)] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[rgba(8,8,12,.94)] p-3 shadow-[0_24px_80px_rgba(0,0,0,.42)] backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4 px-3 py-2">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.22em] text-orange">Accompagnement</p>
                    <p className="mt-1 text-[13px] font-medium text-white/56">De l'étude au service après-vente.</p>
                  </div>
                  <Link
                    href="/services"
                    className="shrink-0 rounded-full border border-white/12 px-4 py-2 text-[11px] font-bold uppercase tracking-[.12em] text-white/72 transition-colors hover:border-orange hover:text-white"
                  >
                    Tout voir
                  </Link>
                </div>
                <div className="mt-2 grid gap-2">
                  {services.map((service, index) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group/item grid grid-cols-[48px_1fr] gap-3 rounded-[18px] border border-white/8 bg-white/[.045] p-3 transition-all hover:border-orange/45 hover:bg-white/[.08]"
                    >
                      <span className="grid h-12 w-12 place-items-center rounded-[16px] border border-white/10 bg-white/[.06] font-nb text-[18px] font-bold text-orange">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-[14px] font-bold text-white transition-colors group-hover/item:text-orange">
                          {service.navTitle}
                        </span>
                        <span className="mt-1 block text-[12px] font-medium leading-[1.35] text-white/52">
                          {service.caption}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {links.map(([l, h]) => (
            <Link key={h} href={h} className="transition-colors hover:text-white">
              {l}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="whitespace-nowrap rounded-full bg-orange px-4 py-3 text-[13px] font-bold text-white shadow-[0_8px_24px_rgba(245,130,32,.4)] transition-colors hover:bg-orangedark sm:px-6 sm:text-[14px]"
        >
          Demander un devis
        </Link>
      </div>
    </nav>
  );
}
