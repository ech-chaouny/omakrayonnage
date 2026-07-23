import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

type PartnerContent = {
  role: string;
  origin: string;
  text: string;
  items: string[];
};

const brands = [
  { key: "stow", name: "STOW", logo: "/partners/stow.svg" },
  { key: "manorga", name: "MANORGA", logo: "/partners/manorga-black.png" },
] as const;

function BrandMark({ name, logo }: { name: string; logo?: string }) {
  if (name === "STOW" && logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={logo} alt="STOW logo" className="h-[58px] w-auto max-w-[230px] object-contain md:h-[82px] md:max-w-[300px]" />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={logo} alt="MANORGA logo" className="h-[78px] w-auto max-w-[240px] object-contain md:h-[122px] md:max-w-[330px]" />
  );
}

export default function Partners() {
  const t = useTranslations("partners");
  const strengths = t.raw("strengths") as Array<[string, string, string]>;

  return (
    <section id="partenaires" className="px-[max(16px,4vw)] pb-14 pt-16 md:px-[max(22px,4vw)] md:pb-34 md:pt-36">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-5 md:grid-cols-[.85fr_1.15fr] md:items-end md:gap-8">
          <Reveal>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.22em] text-orange md:text-[12px] md:tracking-[.24em]">{t("eyebrow")}</p>
              <h2 className="mt-3 max-w-[12ch] text-[34px] font-semibold leading-[.98] tracking-[-.03em] text-ink md:mt-5 md:text-[clamp(36px,5vw,72px)]">
                {t("title")}
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <p className="max-w-[62ch] text-[14px] font-medium leading-[1.6] text-ink2 md:justify-self-end md:text-[17px] md:leading-[1.65]">
              {t("intro")}
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-8 overflow-hidden rounded-[28px] bg-[#08090d] p-3 shadow-[0_28px_100px_rgba(17,19,21,.18)] ring-1 ring-black/10 md:mt-14 md:rounded-[38px] md:p-6">
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_78%_18%,rgba(242,72,28,.18),transparent_34%),linear-gradient(135deg,rgba(255,255,255,.055)_0_1px,transparent_1px_72px)] px-4 py-5 md:rounded-[30px] md:px-8 md:py-8">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-orange md:text-[11px] md:tracking-[.24em]">{t("allianceEyebrow")}</p>
                  <p className="mt-2 text-[12px] font-semibold text-white/58 md:text-[14px]">{t("allianceSubtitle")}</p>
                </div>
                <div className="rounded-full border border-white/12 bg-white/[.06] px-3 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-white/70 md:px-4 md:text-[11px] md:tracking-[.16em]">
                  {t("selection")}
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-[1fr_86px_1fr] lg:items-stretch">
                {brands.map((brand, index) => {
                  const partner = t.raw(`list.${brand.key}`) as PartnerContent;
                  return (
                    <div key={brand.name} className="contents">
                      <article className="rounded-[22px] bg-white p-3 shadow-[0_18px_54px_rgba(0,0,0,.22)] md:rounded-[28px] md:p-4">
                        <div className="grid min-h-[132px] place-items-center rounded-[18px] border border-black/8 bg-bg px-4 py-6 md:min-h-[190px] md:rounded-[24px] md:px-5 md:py-8">
                          <BrandMark name={brand.name} logo={brand.logo} />
                        </div>

                        <div className="px-1 pb-2 pt-5 md:px-2 md:pt-7">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-orange px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.12em] text-white md:px-4 md:py-2 md:text-[11px] md:tracking-[.14em]">
                              {partner.origin}
                            </span>
                            <span className="rounded-full border border-black/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.12em] text-ink2 md:px-4 md:py-2 md:text-[11px] md:tracking-[.14em]">
                              {partner.role}
                            </span>
                          </div>
                          <h3 className="mt-5 font-nb text-[32px] font-bold leading-none tracking-[-.04em] text-ink md:mt-6 md:text-[clamp(34px,4.3vw,58px)] md:tracking-[-.045em]">
                            {brand.name}
                          </h3>
                          <p className="mt-4 text-[14px] font-medium leading-[1.6] text-ink2 md:mt-5 md:text-[16px] md:leading-[1.68]">{partner.text}</p>
                          <div className="mt-5 flex flex-wrap gap-2 md:mt-7">
                            {partner.items.map((item) => (
                              <span
                                key={item}
                                className="rounded-full border border-black/10 bg-bg px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.06em] text-ink md:px-4 md:py-2 md:text-[12px] md:tracking-[.08em]"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-2 h-1 rounded-full bg-black/5">
                          <div className="h-full rounded-full bg-orange" style={{ width: index === 0 ? "72%" : "62%" }} />
                        </div>
                      </article>
                      {index === 0 && (
                        <div className="grid place-items-center">
                          <div className="flex items-center gap-3 lg:flex-col">
                            <span className="h-px w-16 bg-white/18 lg:h-16 lg:w-px" />
                            <span className="grid h-16 w-16 place-items-center rounded-full border border-orange/28 bg-orange text-[18px] font-black text-white shadow-[0_16px_42px_rgba(242,72,28,.32)]">
                              +
                            </span>
                            <span className="h-px w-16 bg-white/18 lg:h-16 lg:w-px" />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {strengths.map(([n, title, text]) => (
                  <div key={title} className="rounded-[18px] border border-white/10 bg-white/[.06] p-4 text-white md:rounded-[22px] md:p-5">
                    <div className="font-nb text-[22px] font-bold leading-none text-orange md:text-[26px]">{n}</div>
                    <h4 className="mt-3 text-[16px] font-bold tracking-[-.02em] md:mt-4 md:text-[18px]">{title}</h4>
                    <p className="mt-2 text-[12px] font-medium leading-[1.5] text-white/58 md:text-[13px] md:leading-[1.55]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
