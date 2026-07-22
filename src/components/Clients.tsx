import Reveal from "./Reveal";

const clients = [
  "COPRALIM",
  "YAZAKI",
  "AMANYS PHARMA",
  "WIRIZ INDUSTRIE",
  "FUJIKURA",
  "PLASTIC OMNIUM",
  "TIMAR",
  "SO.CO.PO",
  "PETROM",
  "IKEA",
  "MONDELEZ",
  "ARAMEX",
  "SAHAM PHARMA",
  "EAUX MINÉRALES D'OULMES",
];

export default function Clients() {
  return (
    <section className="px-[max(22px,4vw)] py-20">
      <div className="mx-auto max-w-[1120px] border-y border-black/10 py-14">
        <div className="grid items-center gap-10 md:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Confiance</p>
              <h2 className="mt-4 text-[clamp(28px,3.8vw,48px)] font-semibold leading-[1.04] tracking-[-.03em] text-ink">
                +90 entreprises accompagnées.
              </h2>
            </div>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {clients.map((c) => (
              <Reveal key={c}>
                <div className="rounded-full border border-black/10 bg-white px-5 py-3 text-[13px] font-semibold text-ink2">
                  {c}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
