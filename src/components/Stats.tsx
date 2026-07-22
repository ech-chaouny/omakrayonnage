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

const stats = [
  {
    icon: icons.warehouse,
    pre: "+",
    n: 90,
    label: "Entreprises équipées",
    text: "Des sites industriels accompagnés au Maroc, de l'étude au montage.",
  },
  {
    icon: icons.alliance,
    pre: "",
    n: 2,
    label: "Partenaires européens",
    text: "STOW et MANORGA pour couvrir les systèmes lourds, légers et plateformes.",
  },
  {
    icon: icons.workflow,
    pre: "",
    n: 6,
    label: "Étapes maîtrisées",
    text: "Audit, relevé, conception 3D, fabrication, installation, contrôle et SAV.",
  },
];

export default function Stats() {
  return (
    <section className="relative px-[max(22px,4vw)] py-[72px] md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <Reveal>
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Chiffres clés</p>
              <h2 className="mt-4 max-w-[12ch] text-[clamp(34px,4.6vw,64px)] font-semibold leading-[.98] tracking-[-.03em] text-ink">
                Une base solide dès le départ.
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <p className="max-w-[48ch] text-[16px] font-medium leading-[1.65] text-ink2">
              Trois repères rapides avant d'entrer dans les partenaires, les solutions et la méthode OMAK.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((s, index) => (
            <Reveal key={s.label}>
              <article className="group relative min-h-[310px] overflow-hidden rounded-[30px] border border-black/10 bg-white p-7 shadow-[0_20px_70px_rgba(17,19,21,.07)]">
                <div className="pointer-events-none absolute -right-16 -top-16 h-[168px] w-[168px] rounded-full bg-orange/10 transition-transform duration-500 group-hover:scale-125" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="grid h-16 w-16 place-items-center rounded-[20px] bg-orange text-white shadow-[0_16px_34px_rgba(242,72,28,.28)]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                      aria-hidden="true"
                    >
                      {s.icon}
                    </svg>
                  </div>
                  <span className="rounded-full border border-black/10 bg-bg px-4 py-2 text-[11px] font-bold uppercase tracking-[.14em] text-ink2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative mt-10">
                  <div className="font-nb text-[clamp(56px,6vw,86px)] font-bold leading-none tracking-[-.05em] text-orange">
                    {s.pre}
                    <Counter to={s.n} />
                  </div>
                  <h3 className="mt-4 text-[13px] font-bold uppercase tracking-[.18em] text-ink">{s.label}</h3>
                  <p className="mt-5 text-[15px] font-medium leading-[1.6] text-ink2">{s.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
