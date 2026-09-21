"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { products } from "@/lib/products";
import { services } from "@/lib/services";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav() {
  const t = useTranslations("nav");
  const tp = useTranslations("catalog.products");
  const ts = useTranslations("catalog.services");
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const closeMobileMenu = () => setMobileOpen(false);

  // Page active = lien coloré en orange au lieu de blanc
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  const linkCls = (href: string) =>
    `transition-colors ${isActive(href) ? "text-orange" : "hover:text-white"}`;

  return (
    <nav className="fixed inset-x-0 top-3 z-50 px-3 md:top-5 md:px-4">
      <div className="relative mx-auto flex h-[58px] max-w-[1120px] items-center justify-between rounded-[28px] border border-white/12 bg-[linear-gradient(120deg,rgba(12,12,14,.94),rgba(22,22,26,.90)_48%,rgba(12,12,14,.86))] px-3 shadow-[0_18px_60px_rgba(0,0,0,.34)] backdrop-blur-xl md:h-16 md:px-6">
        <Link href="/#top" aria-label="OMAK RAYONNAGE" onClick={closeMobileMenu}>
          <Logo light className="h-8 md:h-11" />
        </Link>
        <div className="hidden items-center gap-7 text-[14px] font-semibold text-white/80 md:flex">
          <Link href="/" aria-current={isActive("/") ? "page" : undefined} className={linkCls("/")}>
            {t("home")}
          </Link>
          <Link href="/about" aria-current={isActive("/about") ? "page" : undefined} className={linkCls("/about")}>
            {t("about")}
          </Link>
          <div className="group relative flex h-16 items-center" aria-haspopup="true">
            <button
              type="button"
              aria-haspopup="true"
              aria-current={isActive("/produits") ? "page" : undefined}
              className={`cursor-default transition-colors ${
                isActive("/produits") ? "text-orange" : "text-white/80 hover:text-white group-hover:text-white"
              }`}
            >
              {t("products")}
            </button>
            <div className="invisible absolute left-1/2 top-full w-[680px] max-w-[calc(100vw-32px)] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[rgba(8,8,12,.94)] p-3 shadow-[0_24px_80px_rgba(0,0,0,.42)] backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4 px-3 py-2">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.22em] text-orange">{t("productsMenu.eyebrow")}</p>
                    <p className="mt-1 text-[13px] font-medium text-white/56">{t("productsMenu.subtitle")}</p>
                  </div>
                  <Link
                    href="/#produits"
                    className="shrink-0 rounded-full border border-white/12 px-4 py-2 text-[11px] font-bold uppercase tracking-[.12em] text-white/72 transition-colors hover:border-orange hover:text-white"
                  >
                    {t("productsMenu.all")}
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
                          {tp(`${product.slug}.navTitle`)}
                        </span>
                        <span className="mt-1 block text-[12px] font-medium leading-[1.35] text-white/52">
                          {tp(`${product.slug}.caption`)}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="group relative flex h-16 items-center" aria-haspopup="true">
            <Link
              href="/services"
              aria-current={isActive("/services") ? "page" : undefined}
              className={`${linkCls("/services")} ${isActive("/services") ? "" : "group-hover:text-white"}`}
            >
              {t("services")}
            </Link>
            <div className="invisible absolute left-1/2 top-full w-[520px] max-w-[calc(100vw-32px)] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[rgba(8,8,12,.94)] p-3 shadow-[0_24px_80px_rgba(0,0,0,.42)] backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4 px-3 py-2">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.22em] text-orange">{t("servicesMenu.eyebrow")}</p>
                    <p className="mt-1 text-[13px] font-medium text-white/56">{t("servicesMenu.subtitle")}</p>
                  </div>
                  <Link
                    href="/services"
                    className="shrink-0 rounded-full border border-white/12 px-4 py-2 text-[11px] font-bold uppercase tracking-[.12em] text-white/72 transition-colors hover:border-orange hover:text-white"
                  >
                    {t("servicesMenu.all")}
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
                          {ts(`${service.slug}.navTitle`)}
                        </span>
                        <span className="mt-1 block text-[12px] font-medium leading-[1.35] text-white/52">
                          {ts(`${service.slug}.caption`)}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Link href="/contact" aria-current={isActive("/contact") ? "page" : undefined} className={linkCls("/contact")}>
            {t("contact")}
          </Link>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          <div className="md:hidden">
            <LanguageSwitcher className="scale-[.92] origin-right" />
          </div>
          <Link
            href="/contact"
            className="hidden whitespace-nowrap rounded-full bg-orange px-6 py-3 text-[14px] font-bold text-white shadow-[0_8px_24px_rgba(245,130,32,.4)] transition-colors hover:bg-orangedark md:inline-flex"
          >
            {t("quote")}
          </Link>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="grid h-9 w-9 place-items-center rounded-full bg-orange text-white shadow-[0_8px_18px_rgba(245,130,32,.34)] transition-colors hover:bg-orangedark md:hidden"
          >
            <span className="relative h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                  mobileOpen ? "top-[7px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                  mobileOpen ? "top-[7px] -rotate-45" : "top-[14px]"
                }`}
              />
            </span>
          </button>
        </div>

        {mobileOpen && (
          <div className="absolute left-0 right-0 top-[calc(100%+10px)] overflow-hidden rounded-[24px] border border-white/12 bg-[rgba(8,8,12,.96)] p-2 shadow-[0_24px_70px_rgba(0,0,0,.42)] backdrop-blur-xl md:hidden">
            <div className="grid gap-1">
              {[
                ["/", t("home")],
                ["/about", t("about")],
                ["/#produits", t("products")],
                ["/services", t("services")],
                ["/contact", t("contact")],
              ].map(([href, label]) => {
                // "/#produits" points to the home section but should light up on /produits/* pages
                const active = href === "/#produits" ? isActive("/produits") : isActive(href);
                return (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMobileMenu}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-[18px] px-4 py-3 text-[15px] font-bold transition-colors hover:bg-white/[.07] ${
                    active ? "bg-white/[.06] text-orange" : "text-white/82 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
                );
              })}
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-white/10 pt-2">
              <Link
                href="/#produits"
                onClick={closeMobileMenu}
                className="rounded-[18px] border border-white/10 bg-white/[.055] px-3 py-3 text-[12px] font-extrabold uppercase tracking-[.12em] text-orange"
              >
                {t("productsMenu.all")}
              </Link>
              <Link
                href="/services"
                onClick={closeMobileMenu}
                className="rounded-[18px] border border-white/10 bg-white/[.055] px-3 py-3 text-[12px] font-extrabold uppercase tracking-[.12em] text-orange"
              >
                {t("servicesMenu.all")}
              </Link>
            </div>
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="mt-2 flex items-center justify-center rounded-[18px] bg-orange px-4 py-3 text-[14px] font-bold text-white shadow-[0_12px_30px_rgba(245,130,32,.34)]"
            >
              {t("quote")}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
