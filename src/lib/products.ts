// Structural product catalog. Translatable text lives in messages under
// `catalog.products.<slug>.*` and is read with next-intl (t / t.raw).
export type Product = {
  slug: string;
  anchor: string;
  image: string;
  /** Brand / manufacturer — not translated. */
  partner: string;
};

export const products: Product[] = [
  { slug: "rayonnage-lourd", anchor: "produit-rayonnage-lourd", image: "/img/prod-lourd-clean.png", partner: "STOW / MANORGA" },
  { slug: "semi-lourd-leger", anchor: "produit-semi-lourd-leger", image: "/img/prod-leger-clean.png", partner: "MANORGA" },
  { slug: "cantilever", anchor: "produit-cantilever", image: "/img/prod-cantilever-clean.png", partner: "STOW" },
  { slug: "plateformes-stockage", anchor: "produit-plateformes", image: "/img/prod-plateforme-clean.png", partner: "STOW / MANORGA" },
  { slug: "protection-securite", anchor: "produit-protection-securite", image: "/img/prod-protection-clean.png", partner: "MANORGA" },
  { slug: "accessoires-manutention", anchor: "produit-accessoires-manutention", image: "/img/prod-accessoires-clean.png", partner: "MANORGA" },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
