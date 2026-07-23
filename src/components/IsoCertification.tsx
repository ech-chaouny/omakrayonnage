import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

export default function IsoCertification() {
  const t = useTranslations("iso");
  const points = t.raw("points") as Array<[string, string, string]>;

  return (
    <section className="px-[max(16px,4vw)] pb-12 md:px-[max(22px,4vw)] md:pb-24">
      <Reveal>
        <div className="mx-auto max-w-[1240px] rounded-[26px] border border-black/10 bg-white p-3 shadow-[0_22px_76px_rgba(17,19,21,.08)] md:rounded-[34px] md:p-5">
          <div className="relative overflow-hidden rounded-[22px] bg-[#07101f] px-5 py-6 text-white md:rounded-[28px] md:px-10 md:py-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(35,101,184,.22),transparent_34%),radial-gradient(circle_at_85%_18%,rgba(242,72,28,.14),transparent_36%),linear-gradient(135deg,rgba(255,255,255,.045)_0_1px,transparent_1px_78px)]" />

            <div className="relative grid gap-5 lg:grid-cols-[260px_1fr] lg:items-center lg:gap-8">
              <div className="mx-auto grid h-[168px] w-[168px] place-items-center rounded-[26px] bg-white shadow-[0_24px_70px_rgba(0,0,0,.28)] md:h-[230px] md:w-[230px] md:rounded-[34px] lg:mx-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/iso-9001.png" alt="Certification ISO 9001:2015" className="h-[132px] w-[132px] object-cover md:h-[180px] md:w-[180px]" />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.22em] text-orange md:text-[12px] md:tracking-[.24em]">{t("eyebrow")}</p>
                <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <h2 className="font-nb text-[36px] font-bold leading-none tracking-[-.04em] md:text-[clamp(44px,5.2vw,72px)] md:tracking-[-.045em]">
                    ISO 9001:2015
                  </h2>
                  <span className="w-fit rounded-full border border-white/14 bg-white/[.07] px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-white/72 md:px-5 md:py-3 md:text-[11px] md:tracking-[.16em]">
                    {t("badge")}
                  </span>
                </div>
                <p className="mt-4 max-w-[72ch] text-[14px] font-medium leading-[1.6] text-white/64 md:mt-5 md:text-[16px] md:leading-[1.65]">{t("intro")}</p>

                <div className="mt-5 grid gap-3 md:mt-8 md:grid-cols-3">
                  {points.map(([n, title, text]) => (
                    <div key={title} className="rounded-[18px] border border-white/10 bg-white/[.065] p-4 md:rounded-[22px] md:p-5">
                      <div className="font-nb text-[21px] font-bold leading-none text-orange md:text-[24px]">{n}</div>
                      <h3 className="mt-3 text-[15px] font-bold tracking-[-.02em] text-white md:mt-4 md:text-[17px]">{title}</h3>
                      <p className="mt-2 text-[12px] font-medium leading-[1.45] text-white/56 md:text-[13px] md:leading-[1.5]">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
