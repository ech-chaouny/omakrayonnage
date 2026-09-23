import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

export default function Quote() {
  const t = useTranslations("quote");
  const steps = t.raw("steps") as string[];

  return (
    <section id="apropos" className="px-[max(22px,4vw)] py-24 md:py-32">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 md:grid-cols-[.9fr_1.1fr]">
        <div>
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">{t("eyebrow")}</p>
          </Reveal>
          <Reveal>
            <h2 className="mt-5 max-w-[12ch] text-[clamp(36px,5vw,72px)] font-semibold leading-[.98] tracking-[-.03em] text-ink">
              {t("title")}
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-6 max-w-[48ch] text-[17px] font-medium leading-[1.65] text-ink2">{t("intro")}</p>
          </Reveal>
          <Reveal>
            <div className="mt-8 grid max-w-[560px] gap-3 text-[14px] font-semibold text-ink sm:grid-cols-2">
              {steps.map((step, index) => (
                <span key={step} className="flex items-center gap-3 border-t border-black/10 pt-4">
                  <span className="font-nb text-orange">{String(index + 1).padStart(2, "0")}</span>
                  {step}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal className="reveal-img aspect-[16/11] rounded-[28px] shadow-[0_24px_80px_rgba(17,19,21,.10)] ring-1 ring-black/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/about-team-clean.webp"
            alt="OMAK RAYONNAGE"
            className="h-full w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
