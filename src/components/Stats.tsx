import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import Counter from "./Counter";

const icons = {
  warehouse: (
    <>
      <path d="M4 10.5 12 5l8 5.5" />
      <path d="M6.5 9.2v9.3h11V9.2" />
      <path d="M9 18.5v-5h6v5" />
      <path d="M8.5 11.2h7" />
    </>
  ),
  alliance: (
    <>
      <circle cx="7" cy="12" r="3.2" />
      <circle cx="17" cy="12" r="3.2" />
      <path d="M10.2 12h3.6" />
      <path d="M5 6.5c4.8-3 9.2-3 14 0" />
      <path d="M19 17.5c-4.8 3-9.2 3-14 0" />
    </>
  ),
  workflow: (
    <>
      <path d="M6.5 6.5h5v5h-5z" />
      <path d="M12.5 12.5h5v5h-5z" />
      <path d="M11.5 9h2.2c2.3 0 3.8 1.5 3.8 3.5" />
      <path d="m7 16.4 1.5 1.5 3-3" />
    </>
  ),
};

const metrics = [
  { icon: icons.warehouse, pre: "+", n: 90 },
  { icon: icons.alliance, pre: "", n: 2 },
  { icon: icons.workflow, pre: "", n: 6 },
];

export default function Stats() {
  const t = useTranslations("stats");
  const items = t.raw("items") as Array<{ label: string; text: string }>;

  return (
    <section className="relative px-[max(16px,4vw)] py-12 md:px-[max(22px,4vw)] md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-7 flex flex-col justify-between gap-4 md:mb-10 md:flex-row md:items-end md:gap-5">
          <Reveal>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.22em] text-orange md:text-[12px] md:tracking-[.24em]">{t("eyebrow")}</p>
              <h2 className="mt-3 max-w-[12ch] text-[32px] font-semibold leading-[1] tracking-[-.03em] text-ink md:mt-4 md:text-[clamp(34px,4.6vw,64px)] md:leading-[.98]">
                {t("title")}
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <p className="max-w-[48ch] text-[14px] font-medium leading-[1.6] text-ink2 md:text-[16px] md:leading-[1.65]">{t("intro")}</p>
          </Reveal>
        </div>

        <div className="grid gap-3 md:grid-cols-3 md:gap-5">
          {metrics.map((s, index) => (
            <Reveal key={index}>
              <article className="group relative min-h-[220px] overflow-hidden rounded-[24px] border border-black/10 bg-white p-5 shadow-[0_20px_70px_rgba(17,19,21,.07)] md:min-h-[310px] md:rounded-[30px] md:p-7">
                <div className="pointer-events-none absolute -right-16 -top-16 h-[140px] w-[140px] rounded-full bg-orange/10 transition-transform duration-500 group-hover:scale-125 md:h-[168px] md:w-[168px]" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-[16px] bg-orange text-white shadow-[0_16px_34px_rgba(242,72,28,.28)] md:h-16 md:w-16 md:rounded-[20px]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 md:h-8 md:w-8"
                      aria-hidden="true"
                    >
                      {s.icon}
                    </svg>
                  </div>
                  <span className="rounded-full border border-black/10 bg-bg px-4 py-2 text-[11px] font-bold uppercase tracking-[.14em] text-ink2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative mt-6 md:mt-10">
                  <div className="font-nb text-[48px] font-bold leading-none tracking-[-.05em] text-orange md:text-[clamp(56px,6vw,86px)]">
                    {s.pre}
                    <Counter to={s.n} />
                  </div>
                  <h3 className="mt-3 text-[11px] font-bold uppercase tracking-[.16em] text-ink md:mt-4 md:text-[13px] md:tracking-[.18em]">{items[index]?.label}</h3>
                  <p className="mt-3 text-[13px] font-medium leading-[1.55] text-ink2 md:mt-5 md:text-[15px] md:leading-[1.6]">{items[index]?.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
