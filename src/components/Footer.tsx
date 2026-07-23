import { useTranslations } from "next-intl";
import Logo from "./Logo";

export default function Footer() {
  const t = useTranslations("footer");
  const cols = [
    { heading: t("cols.solutions.heading"), items: t.raw("cols.solutions.items") as string[] },
    { heading: t("cols.services.heading"), items: t.raw("cols.services.items") as string[] },
    { heading: t("cols.contact.heading"), items: t.raw("cols.contact.items") as string[] },
  ];

  return (
    <footer
      id="contact"
      className="omak-dark-pattern px-[max(16px,4vw)] pb-8 pt-12 text-[13px] leading-[1.55] text-white/62 md:px-[max(22px,4vw)] md:pb-10 md:pt-20 md:text-[14px] md:leading-[1.6]"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 gap-7 border-b border-white/12 pb-8 md:grid-cols-[1.6fr_1fr_1fr_1.3fr] md:gap-10 md:pb-12">
          <div>
            <Logo light className="h-9 md:h-11" />
            <p className="mt-4 max-w-[300px] text-white/58 md:mt-6">{t("tagline")}</p>
          </div>
          {cols.map((c) => (
            <div key={c.heading}>
              <h5 className="mb-3 text-[11px] font-semibold uppercase tracking-[.15em] text-white md:mb-4 md:text-[12px] md:tracking-[.16em]">{c.heading}</h5>
              <ul>
                {c.items.map((it) => (
                  <li key={it} className="py-1 transition-colors hover:text-orange md:py-[6px]">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-5 text-[12px] text-white/45 md:pt-8 md:text-[13px]">{t("copyright")}</div>
      </div>
    </footer>
  );
}
