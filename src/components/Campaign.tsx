import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

export default function Campaign() {
  const t = useTranslations("campaign");
  const reasons = t.raw("reasons") as Array<{ title: string; text: string }>;

  return (
    <section id="pourquoi" className="px-[max(22px,4vw)] py-10">
      <div className="omak-dark-pattern mx-auto max-w-[1240px] overflow-hidden rounded-[34px] px-[max(24px,4vw)] py-[clamp(48px,7vw,84px)] shadow-[0_24px_90px_rgba(17,19,21,.12)]">
        <div className="grid gap-10 md:grid-cols-[.75fr_1.25fr]">
          <div className="text-white">
            <Reveal>
              <div className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("eyebrow")}</div>
            </Reveal>
            <Reveal>
              <h2 className="mt-5 max-w-[10ch] text-[clamp(34px,5vw,70px)] font-semibold leading-[.98] tracking-[-.03em]">
                {t("title")}
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-6 max-w-[42ch] text-[16px] font-medium leading-[1.65] text-white/64">{t("intro")}</p>
            </Reveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title}>
                <article className="min-h-[190px] rounded-[22px] border border-white/10 bg-white/[.06] p-6 text-white backdrop-blur-sm">
                  <span className="font-nb text-[28px] font-bold leading-none text-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 text-[22px] font-bold tracking-[-.02em]">{reason.title}</h3>
                  <p className="mt-3 text-[14px] font-medium leading-[1.55] text-white/62">{reason.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
