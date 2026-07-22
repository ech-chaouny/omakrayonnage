import Reveal from "./Reveal";

const points = [
  ["01", "Process suivi", "Une méthode claire du besoin jusqu'au contrôle final."],
  ["02", "Qualité constante", "Des étapes documentées pour garder le même niveau d'exigence."],
  ["03", "Confiance client", "Une base sérieuse pour des installations durables et sûres."],
];

export default function IsoCertification() {
  return (
    <section className="px-[max(22px,4vw)] pb-18 md:pb-24">
      <Reveal>
        <div className="mx-auto max-w-[1240px] rounded-[34px] border border-black/10 bg-white p-5 shadow-[0_22px_76px_rgba(17,19,21,.08)]">
          <div className="relative overflow-hidden rounded-[28px] bg-[#07101f] px-7 py-9 text-white md:px-10 md:py-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(35,101,184,.22),transparent_34%),radial-gradient(circle_at_85%_18%,rgba(242,72,28,.14),transparent_36%),linear-gradient(135deg,rgba(255,255,255,.045)_0_1px,transparent_1px_78px)]" />

            <div className="relative grid gap-8 lg:grid-cols-[260px_1fr] lg:items-center">
              <div className="mx-auto grid h-[230px] w-[230px] place-items-center rounded-[34px] bg-white shadow-[0_24px_70px_rgba(0,0,0,.28)] lg:mx-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/iso-9001.png" alt="Certification ISO 9001:2015" className="h-[180px] w-[180px] object-cover" />
              </div>

              <div>
                <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Certification qualité</p>
                <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <h2 className="font-nb text-[clamp(44px,5.2vw,72px)] font-bold leading-none tracking-[-.045em]">
                    ISO 9001:2015
                  </h2>
                  <span className="w-fit rounded-full border border-white/14 bg-white/[.07] px-5 py-3 text-[11px] font-bold uppercase tracking-[.16em] text-white/72">
                    Organisation contrôlée
                  </span>
                </div>
                <p className="mt-5 max-w-[72ch] text-[16px] font-medium leading-[1.65] text-white/64">
                  Cette certification montre qu'OMAK travaille avec un système qualité structuré: les besoins sont
                  cadrés, les étapes sont suivies, et les installations sont contrôlées avant livraison.
                </p>

                <div className="mt-8 grid gap-3 md:grid-cols-3">
                  {points.map(([n, title, text]) => (
                    <div key={title} className="rounded-[22px] border border-white/10 bg-white/[.065] p-5">
                      <div className="font-nb text-[24px] font-bold leading-none text-orange">{n}</div>
                      <h3 className="mt-4 text-[17px] font-bold tracking-[-.02em] text-white">{title}</h3>
                      <p className="mt-2 text-[13px] font-medium leading-[1.5] text-white/56">{text}</p>
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
