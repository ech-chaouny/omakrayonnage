import Reveal from "./Reveal";

const ICONS: Record<string, React.ReactNode> = {
  shield: (
    <>
      <path d="M12 3 20 6v6c0 4.6-3.2 7.8-8 9-4.8-1.2-8-4.4-8-9V6Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  gem: <path d="M12 3 15 9l6 .9-4.4 4.2L17.8 20 12 17 6.2 20l1.2-5.9L3 9.9 9 9Z" />,
  medal: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="m9 13-2 8 5-3 5 3-2-8" />
    </>
  ),
};

const values = [
  { i: "shield", t: "Sécurité", p: "La sécurité des personnes et des produits stockés, dans chaque installation." },
  { i: "gem", t: "Expérience", p: "L'équipe OMAK (étude, solutions, montage) et ses fabricants européens conformes aux normes EN/FEM." },
  { i: "medal", t: "Qualité", p: "Se démarquer par la perfection des produits et des installations, normes respectées." },
];

export default function Values() {
  return (
    <section id="valeurs" className="py-[clamp(80px,11vh,140px)]">
      <div className="mx-auto max-w-[1200px] px-[max(22px,4vw)]">
        <Reveal className="max-w-[720px]">
          <span className="mb-[18px] inline-flex items-center gap-[10px] text-[12.5px] font-bold uppercase tracking-[.16em] text-orange before:h-[2px] before:w-6 before:bg-orange before:content-['']">
            Nos engagements
          </span>
          <h2 className="text-[clamp(32px,4.4vw,56px)] font-extrabold leading-[1.04] tracking-[-.028em] text-ink">
            Sécurité. Expérience. Qualité.
          </h2>
          <p className="mt-[18px] text-[clamp(17px,1.5vw,20px)] leading-[1.55] text-ink2">
            Trois exigences, à chaque installation.
          </p>
        </Reveal>

        <div className="mt-13 grid grid-cols-1 gap-7 md:grid-cols-3">
          {values.map((v) => (
            <Reveal key={v.t}>
              <div className="rounded-2xl border border-black/10 bg-white p-[34px_30px] shadow-[0_14px_36px_rgba(17,19,21,.06)] transition-all duration-300 hover:-translate-y-1 hover:border-orange/40 hover:shadow-[0_20px_50px_rgba(17,19,21,.12)]">
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-[14px] bg-orange/10 text-orange">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                    {ICONS[v.i]}
                  </svg>
                </div>
                <h3 className="text-[21px] font-extrabold text-ink">{v.t}</h3>
                <p className="mt-[10px] text-[15px] leading-[1.55] text-ink2">{v.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
