import fs from "node:fs";
import path from "node:path";
import type { CSSProperties } from "react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

type ClientLogo = {
  src: string;
  alt: string;
};

type RingMeta = {
  title: string;
  text: string;
};

function getClientFiles(): string[] {
  const clientsDir = path.join(process.cwd(), "public", "clients");

  if (!fs.existsSync(clientsDir)) {
    return [];
  }

  return fs
    .readdirSync(clientsDir)
    .filter((file) => /\.(webp|png|jpe?g|svg|avif)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

function orbitNodeStyle(index: number, total: number): CSSProperties {
  const angle = (360 / total) * index;

  return {
    "--angle": `${angle}deg`,
    "--counter-angle": `${-angle}deg`,
  } as CSSProperties;
}

export default function Clients() {
  const t = useTranslations("clients");
  const ringMeta = t.raw("rings") as RingMeta[];

  const logos: ClientLogo[] = getClientFiles().map((file, index) => ({
    src: `/clients/${encodeURIComponent(file)}`,
    alt: t("logoAlt", { index: index + 1 }),
  }));

  const chunkSize = Math.ceil(logos.length / ringMeta.length);
  const rings = ringMeta
    .map((meta, index) => ({
      ...meta,
      logos: logos.slice(index * chunkSize, (index + 1) * chunkSize),
    }))
    .filter((ring) => ring.logos.length > 0);

  const totalClients = rings.reduce((total, ring) => total + ring.logos.length, 0);

  if (!totalClients) return null;

  return (
    <section id="clients" className="px-[max(16px,4vw)] py-12 md:px-[max(22px,4vw)] md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-7 md:gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-orange md:text-[12px] md:tracking-[.24em]">{t("eyebrow")}</p>
              <h2 className="mt-3 max-w-[11ch] text-[32px] font-semibold leading-[1] tracking-[-.03em] text-ink md:mt-5 md:text-[clamp(36px,5vw,72px)] md:leading-[.98] md:tracking-[-.035em]">
                {t("title")}
              </h2>
              <p className="mt-4 max-w-[34ch] text-[14px] font-medium leading-[1.6] text-ink2 md:mt-6 md:text-[16px] md:leading-[1.7]">{t("intro")}</p>
            </div>
          </Reveal>

          <Reveal className="client-orbit-board">
            <div className="client-orbit-rings">
              {rings.map((ring, ringIndex) => (
                <div
                  key={ring.title}
                  className="client-logo-orbit"
                  style={
                    {
                      "--ring-speed": `${38 + ringIndex * 5}s`,
                    } as CSSProperties
                  }
                >
                  <div className="client-logo-orbit__spin" aria-hidden="true">
                    {ring.logos.map((logo, logoIndex) => (
                      <span
                        key={logo.src}
                        className="client-logo-node"
                        style={orbitNodeStyle(logoIndex, ring.logos.length)}
                      >
                        <span className="client-logo-chip">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={logo.src} alt="" loading="lazy" />
                        </span>
                      </span>
                    ))}
                  </div>

                  <div className="client-logo-orbit__center">
                    <span>{String(ringIndex + 1).padStart(2, "0")}</span>
                    <strong>{ring.title}</strong>
                    <small>{ring.text}</small>
                  </div>

                  <div className="sr-only">
                    {ring.logos.map((logo) => (
                      <span key={logo.src}>{logo.alt}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
