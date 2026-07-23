// Structural service catalog. Translatable text lives in messages under
// `catalog.services.<slug>.*` and is read with next-intl (t / t.raw).
export type Service = {
  slug: string;
  image: string;
};

export const services: Service[] = [
  { slug: "etude-conception", image: "/img/cta-etude-clean.png" },
  { slug: "installation-montage", image: "/img/realisation-palettier-clean.png" },
  { slug: "controle-installations", image: "/img/prod-protection-clean.png" },
  { slug: "service-apres-vente", image: "/img/about-team-clean.png" },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
