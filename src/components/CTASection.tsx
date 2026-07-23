import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Reveal from "./Reveal";

export default function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="omak-dark-pattern px-[max(16px,4vw)] py-12 md:px-[max(22px,4vw)] md:py-20">
      <div className="mx-auto max-w-[1040px] rounded-[24px] bg-white px-5 py-10 text-center shadow-[0_24px_90px_rgba(0,0,0,.22)] md:rounded-[34px] md:px-[max(28px,5vw)] md:py-[clamp(56px,8vw,104px)] md:shadow-[0_24px_90px_rgba(0,0,0,.28)]">
        <Reveal>
          <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("eyebrow")}</p>
        </Reveal>
        <Reveal>
          <h2 className="font-nb mx-auto mt-4 max-w-[17ch] text-[32px] font-semibold leading-[1] tracking-[-.03em] text-ink md:mt-5 md:text-[clamp(34px,5vw,72px)]">
            {t("titleLead")} <span className="text-orange">{t("titleAccent")}</span>.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mx-auto mt-4 max-w-[48ch] text-[15px] font-medium leading-[1.55] text-ink2 md:mt-6 md:text-[18px]">{t("intro")}</p>
        </Reveal>
        <Reveal>
          <div className="mt-7 flex flex-wrap justify-center gap-3 md:mt-10 md:gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-orange px-6 py-3 text-[14px] font-semibold text-white shadow-[0_12px_36px_rgba(242,72,28,.34)] transition-colors hover:bg-orangedark md:px-8 md:py-4 md:text-[16px] md:shadow-[0_12px_36px_rgba(242,72,28,.4)]"
            >
              {t("quote")} →
            </Link>
            <a
              href="tel:+212662500231"
              className="rounded-full border border-black/15 px-6 py-3 text-[14px] font-semibold text-ink transition-colors hover:border-black/40 md:px-8 md:py-4 md:text-[16px]"
            >
              {t("phone")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
