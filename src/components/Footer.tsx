import Logo from "./Logo";

const cols = [
  { h: "Solutions", items: ["Rayonnage lourd", "Semi-lourd & léger", "Cantilever", "Plateformes", "Protection & sécurité"] },
  { h: "Services", items: ["Étude & conception", "Installation & montage", "Contrôle des installations", "Service après-vente"] },
  {
    h: "Contact",
    items: [
      "Bd Attaka, Casablanca 22580",
      "Direction : 06 61 51 27 58",
      "Administration : 06 61 91 43 24",
      "Commercial : 06 62 50 02 31",
      "omakrayonnage.com",
    ],
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="omak-dark-pattern px-[max(22px,4vw)] pb-10 pt-20 text-[14px] leading-[1.6] text-white/62"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 gap-10 border-b border-white/12 pb-12 md:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
          <div>
            <Logo light />
            <p className="mt-6 max-w-[300px] text-white/58">
              L&apos;ingénierie du stockage — de l&apos;étude au service après-vente, partout au Maroc.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h5 className="mb-4 text-[12px] font-semibold uppercase tracking-[.16em] text-white">{c.h}</h5>
              <ul>
                {c.items.map((it) => (
                  <li key={it} className="py-[6px] transition-colors hover:text-orange">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 text-[13px] text-white/45">Copyright © 2026 OMAK RAYONNAGE. Tous droits réservés.</div>
      </div>
    </footer>
  );
}
