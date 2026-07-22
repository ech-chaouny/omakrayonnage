import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="omak-dark-pattern px-[max(22px,4vw)] py-20">
      <div className="mx-auto max-w-[1040px] rounded-[34px] bg-white px-[max(28px,5vw)] py-[clamp(56px,8vw,104px)] text-center shadow-[0_24px_90px_rgba(0,0,0,.28)]">
        <Reveal>
          <p className="text-[12px] font-bold uppercase tracking-[.24em] text-orange">Projet</p>
        </Reveal>
        <Reveal>
          <h2 className="font-nb mx-auto mt-5 max-w-[17ch] text-[clamp(34px,5vw,72px)] font-semibold leading-[1] tracking-[-.03em] text-ink">
            Optimisons votre <span className="text-orange">entrepôt</span>.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mx-auto mt-6 max-w-[48ch] text-[18px] font-medium leading-[1.55] text-ink2">
            De l&apos;étude au service après-vente — une seule équipe, responsable de bout en bout.
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-orange px-8 py-4 text-[16px] font-semibold text-white shadow-[0_12px_36px_rgba(242,72,28,.4)] transition-colors hover:bg-orangedark"
            >
              Demander un devis →
            </a>
            <a
              href="tel:+212662500231"
              className="rounded-full border border-black/15 px-8 py-4 text-[16px] font-semibold text-ink transition-colors hover:border-black/40"
            >
              06 62 50 02 31
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
