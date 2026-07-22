import Reveal from "./Reveal";

const partners = [
  {
    name: "STOW",
    role: "Partenaire systèmes lourds",
    origin: "Belgique",
    logo: "/partners/stow.svg",
    text:
      "Leader européen du stockage et du rayonnage pour les systèmes lourds: palettiers, drive-in, stockage dynamique, navette pallet shuttle, mobile, AS/RS, silo, cantilever et mezzanines.",
    items: ["Palettiers", "Grande hauteur", "Normes EN/FEM"],
  },
  {
    name: "MANORGA",
    role: "Distributeur exclusif",
    origin: "France",
    logo: "/partners/manorga-black.png",
    text:
      "Fabricant français depuis plus de 50 ans pour les rayonnages léger, mi-lourd et lourd, les plateformes, les cloisons industrielles, la manutention et la sécurité.",
    items: ["Made in France", "Sur mesure", "Co-conception"],
  },
];

const strengths = [
  ["01", "Systèmes lourds", "STOW pour les installations à forte charge, grande hauteur et flux intensifs."],
  ["02", "Rayonnage complet", "MANORGA pour les besoins léger, mi-lourd, plateformes et zones techniques."],
  ["03", "Intégration locale", "OMAK assure l'étude, la fabrication, le montage, le contrôle et le SAV au Maroc."],
];

function BrandMark({ name, logo }: { name: string; logo?: string }) {
  if (name === "STOW" && logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={logo} alt="STOW logo" className="h-[82px] w-auto max-w-[300px] object-contain" />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={logo} alt="MANORGA logo" className="h-[122px] w-auto max-w-[330px] object-contain" />
  );
}

export default function Partners() {
  return (
    <section id="partenaires" className="px-[max(22px,4vw)] pb-24 pt-30 md:pb-34 md:pt-36">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-8 md:grid-cols-[.85fr_1.15fr] md:items-end">
          <Reveal>
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Partenaires</p>
              <h2 className="mt-5 max-w-[12ch] text-[clamp(36px,5vw,72px)] font-semibold leading-[.98] tracking-[-.03em] text-ink">
                Deux références européennes.
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <p className="max-w-[62ch] text-[17px] font-medium leading-[1.65] text-ink2 md:justify-self-end">
              OMAK MAROC associe sa proximité terrain à Casablanca au savoir-faire de fabricants européens certifiés:
              la bonne marque, le bon système, et une installation maîtrisée de bout en bout.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-14 overflow-hidden rounded-[38px] bg-[#08090d] p-4 shadow-[0_28px_100px_rgba(17,19,21,.18)] ring-1 ring-black/10 md:p-6">
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_78%_18%,rgba(242,72,28,.18),transparent_34%),linear-gradient(135deg,rgba(255,255,255,.055)_0_1px,transparent_1px_72px)] px-5 py-6 md:px-8 md:py-8">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[.24em] text-orange">Alliance européenne</p>
                  <p className="mt-2 text-[14px] font-semibold text-white/58">Deux fabricants, une exécution locale.</p>
                </div>
                <div className="rounded-full border border-white/12 bg-white/[.06] px-4 py-2 text-[11px] font-bold uppercase tracking-[.16em] text-white/70">
                  Sélection OMAK MAROC
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-[1fr_86px_1fr] lg:items-stretch">
                {partners.map((partner, index) => (
                  <div key={partner.name} className="contents">
                    <article className="rounded-[28px] bg-white p-4 shadow-[0_18px_54px_rgba(0,0,0,.22)]">
                      <div className="grid min-h-[190px] place-items-center rounded-[24px] border border-black/8 bg-bg px-5 py-8">
                        <BrandMark name={partner.name} logo={partner.logo} />
                      </div>

                      <div className="px-2 pb-2 pt-7">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-orange px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.14em] text-white">
                            {partner.origin}
                          </span>
                          <span className="rounded-full border border-black/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[.14em] text-ink2">
                            {partner.role}
                          </span>
                        </div>
                        <h3 className="mt-6 font-nb text-[clamp(34px,4.3vw,58px)] font-bold leading-none tracking-[-.045em] text-ink">
                          {partner.name}
                        </h3>
                        <p className="mt-5 text-[16px] font-medium leading-[1.68] text-ink2">{partner.text}</p>
                        <div className="mt-7 flex flex-wrap gap-2">
                          {partner.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-black/10 bg-bg px-4 py-2 text-[12px] font-bold uppercase tracking-[.08em] text-ink"
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
                ))}
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {strengths.map(([n, title, text]) => (
                  <div key={title} className="rounded-[22px] border border-white/10 bg-white/[.06] p-5 text-white">
                    <div className="font-nb text-[26px] font-bold leading-none text-orange">{n}</div>
                    <h4 className="mt-4 text-[18px] font-bold tracking-[-.02em]">{title}</h4>
                    <p className="mt-2 text-[13px] font-medium leading-[1.55] text-white/58">{text}</p>
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
