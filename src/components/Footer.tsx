import { useTranslations } from "next-intl";
import Logo from "./Logo";

function ContactIcon({ type }: { type: "phone" | "location" | "website" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4 shrink-0 text-orange">
      {type === "phone" && <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.79a2 2 0 0 1-.45 2.11L8.09 9.89a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.33 1.83.56 2.79.69A2 2 0 0 1 22 16.92Z" />}
      {type === "location" && <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>}
      {type === "website" && <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>}
    </svg>
  );
}

export default function Footer() {
  const t = useTranslations("footer");
  const items = t.raw("cols.contact.items") as string[];
  const [address, ...contacts] = items;
  const website = contacts[contacts.length - 1];
  const phones = contacts.slice(0, -1).map((contact) => {
    const separator = contact.indexOf(":");
    const label = contact.slice(0, separator).trim();
    const number = contact.slice(separator + 1).trim();
    return { label, number, href: `tel:+212${number.replace(/\D/g, "").slice(1)}` };
  });

  return (
    <footer id="contact" className="border-t border-white/10 bg-[#0e1112] px-[max(20px,4vw)] text-white">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-8 py-9 md:py-12 lg:grid-cols-[.85fr_2fr] lg:items-center lg:gap-12">
          <div>
            <Logo light className="h-11 md:h-12" />
            <p className="mt-4 flex items-center gap-2.5 text-[13px] leading-relaxed text-white/55"><ContactIcon type="location" />{address}</p>
          </div>
          <div>
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[.2em] text-orange">{t("cols.contact.heading")}</h2>
            <div className="grid gap-2 sm:grid-cols-3 sm:gap-3">
              {phones.map(({ label, number, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[.025] px-4 py-4 transition-colors hover:border-orange/50 hover:bg-white/[.055] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange sm:block"
                >
                  <span className="flex items-center gap-2 text-[12px] text-white/50 transition-colors group-hover:text-white/75"><ContactIcon type="phone" />{label}</span>
                  <span dir="ltr" className="block whitespace-nowrap text-[15px] font-semibold tracking-[.02em] sm:mt-2">{number}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/10 py-5 text-[11px] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:text-[12px]">
          <p>{t("copyright")}</p>
          <a href={`https://${website}`} className="flex w-fit items-center gap-2 text-white/60 transition-colors hover:text-orange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange">
            <ContactIcon type="website" />{website} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
