export type Product = {
  slug: string;
  anchor: string;
  title: string;
  navTitle: string;
  partner: string;
  image: string;
  caption: string;
  eyebrow: string;
  headline: string;
  intro: string;
  stats: Array<[string, string]>;
  uses: string[];
  advantages: string[];
  specs: Array<[string, string]>;
  steps: Array<[string, string]>;
};

export const products: Product[] = [
  {
    slug: "rayonnage-lourd",
    anchor: "produit-rayonnage-lourd",
    title: "Rayonnage lourd",
    navTitle: "Rayonnage lourd",
    partner: "STOW / MANORGA",
    image: "/img/prod-lourd-clean.png",
    caption: "Palettiers, grande hauteur, charges lourdes.",
    eyebrow: "Stockage palettes",
    headline: "La structure pensée pour les charges lourdes.",
    intro:
      "Une solution robuste pour organiser les palettes, sécuriser les allées et exploiter la hauteur disponible dans les entrepôts industriels.",
    stats: [
      ["Usage", "Palettes"],
      ["Structure", "Acier certifié"],
      ["Projet", "Sur mesure"],
    ],
    uses: [
      "Entrepôts logistiques et plateformes de distribution",
      "Zones de stockage grande hauteur",
      "Réserves industrielles avec flux régulier",
      "Stockage de palettes homogènes ou multi-références",
    ],
    advantages: [
      "Lecture claire des emplacements et accès direct aux palettes",
      "Structure dimensionnée selon les charges et la hauteur utile",
      "Compatible avec protections, grilles, sabots et accessoires de sécurité",
      "Montage contrôlé pour une exploitation durable",
    ],
    specs: [
      ["Type", "Palettier lourd"],
      ["Marques", "STOW / MANORGA"],
      ["Adapté à", "Charges importantes"],
      ["Options", "Protections, supports, signalétique"],
    ],
    steps: [
      ["Relevé technique", "Dimensions, hauteur libre, charges et flux de chariots."],
      ["Dimensionnement", "Choix des montants, lisses, niveaux et protections."],
      ["Installation", "Montage, alignement, contrôle et mise en service."],
    ],
  },
  {
    slug: "semi-lourd-leger",
    anchor: "produit-semi-lourd-leger",
    title: "Rayonnage semi-lourd & léger",
    navTitle: "Semi-lourd / léger",
    partner: "MANORGA",
    image: "/img/prod-leger-clean.png",
    caption: "Cartons, bacs, picking et archives.",
    eyebrow: "Picking & réserve",
    headline: "Une organisation fluide pour les petites et moyennes charges.",
    intro:
      "Idéal pour les cartons, bacs, pièces détachées, archives et zones de préparation où la lisibilité compte autant que la capacité.",
    stats: [
      ["Usage", "Picking"],
      ["Charge", "Légère à moyenne"],
      ["Montage", "Évolutif"],
    ],
    uses: [
      "Magasins de pièces détachées",
      "Archives, réserves et ateliers",
      "Préparation de commandes manuelle",
      "Stockage de cartons et bacs plastiques",
    ],
    advantages: [
      "Niveaux réglables pour s'adapter aux références",
      "Accès simple sans engin lourd",
      "Extension facile selon l'évolution du stock",
      "Finition propre pour zones techniques ou commerciales",
    ],
    specs: [
      ["Type", "Rayonnage léger / semi-lourd"],
      ["Marque", "MANORGA"],
      ["Adapté à", "Cartons, bacs, accessoires"],
      ["Options", "Tablettes, séparateurs, fonds, portes"],
    ],
    steps: [
      ["Classification", "Analyse des références, volumes et rotations."],
      ["Implantation", "Définition des allées, hauteurs et niveaux."],
      ["Mise en place", "Montage propre, repérage et ajustement des tablettes."],
    ],
  },
  {
    slug: "cantilever",
    anchor: "produit-cantilever",
    title: "Cantilever",
    navTitle: "Cantilever",
    partner: "STOW",
    image: "/img/prod-cantilever-clean.png",
    caption: "Tubes, profilés, panneaux et charges longues.",
    eyebrow: "Charges longues",
    headline: "Stocker les longueurs sans perdre en sécurité.",
    intro:
      "Le cantilever libère l'accès frontal pour les charges longues ou volumineuses: tubes, bois, panneaux, profilés, barres et matériaux industriels.",
    stats: [
      ["Usage", "Longueurs"],
      ["Accès", "Frontal"],
      ["Config.", "Simple ou double face"],
    ],
    uses: [
      "Tubes, profilés métalliques et barres longues",
      "Panneaux bois, tôles et matériaux plats",
      "Dépôts matériaux et ateliers de production",
      "Zones extérieures ou couvertes selon besoin",
    ],
    advantages: [
      "Bras adaptés à la longueur et au poids des charges",
      "Accès rapide pour chariot ou manutention adaptée",
      "Stockage verticalement lisible et sécurisé",
      "Configurations évolutives par niveaux et travées",
    ],
    specs: [
      ["Type", "Cantilever industriel"],
      ["Marque", "STOW"],
      ["Adapté à", "Charges longues"],
      ["Options", "Butées, bras, protections, couverture"],
    ],
    steps: [
      ["Analyse charge", "Longueur, poids, mode de dépose et rotation."],
      ["Calcul structure", "Choix des colonnes, bras et entraxes."],
      ["Pose contrôlée", "Ancrage, alignement et contrôle de stabilité."],
    ],
  },
  {
    slug: "plateformes-stockage",
    anchor: "produit-plateformes",
    title: "Plateformes de stockage",
    navTitle: "Plateformes de stockage",
    partner: "STOW / MANORGA",
    image: "/img/prod-plateforme-clean.png",
    caption: "Mezzanines et surfaces additionnelles.",
    eyebrow: "Gain de surface",
    headline: "Créer de la surface utile sans déménager.",
    intro:
      "Les plateformes et mezzanines transforment la hauteur disponible en surface exploitable pour stocker, préparer, circuler ou aménager une zone technique.",
    stats: [
      ["Objectif", "Surface +"],
      ["Usage", "Stockage / atelier"],
      ["Étude", "Charge & circulation"],
    ],
    uses: [
      "Création d'un niveau de stockage supplémentaire",
      "Zones de picking, atelier ou réserve",
      "Mezzanines industrielles avec escaliers et garde-corps",
      "Optimisation d'entrepôts saturés",
    ],
    advantages: [
      "Exploite la hauteur disponible sans gros travaux bâtiment",
      "Structure conçue selon les charges d'exploitation",
      "Intégration des escaliers, garde-corps et accès palettes",
      "Possibilité de phaser le projet selon le budget",
    ],
    specs: [
      ["Type", "Plateforme / mezzanine"],
      ["Marques", "STOW / MANORGA"],
      ["Adapté à", "Gain de surface"],
      ["Options", "Escaliers, garde-corps, planchers, sas"],
    ],
    steps: [
      ["Relevé site", "Hauteur, poteaux, accès, circulation et contraintes."],
      ["Conception", "Plan d'implantation, charges et sécurité d'accès."],
      ["Montage", "Structure, plancher, garde-corps et réception."],
    ],
  },
  {
    slug: "protection-securite",
    anchor: "produit-protection-securite",
    title: "Protection & sécurité",
    navTitle: "Protection & sécurité",
    partner: "MANORGA",
    image: "/img/prod-protection-clean.png",
    caption: "Protections de racks, poteaux et allées.",
    eyebrow: "Sécurisation",
    headline: "Protéger les installations avant l'incident.",
    intro:
      "Une installation fiable passe aussi par les protections: sabots, protections montants, barrières, butées, signalétique et éléments de séparation.",
    stats: [
      ["Rôle", "Prévention"],
      ["Zones", "Allées & pieds"],
      ["Impact", "Moins d'arrêts"],
    ],
    uses: [
      "Protection des montants de rayonnage",
      "Séparation des zones piétons et chariots",
      "Sécurisation des angles, allées et zones sensibles",
      "Remise à niveau d'installations existantes",
    ],
    advantages: [
      "Réduit les risques liés aux impacts de manutention",
      "Rend les zones de circulation plus lisibles",
      "Protège l'investissement rayonnage dans la durée",
      "S'intègre aux installations neuves ou existantes",
    ],
    specs: [
      ["Type", "Protection rack & circulation"],
      ["Marque", "MANORGA"],
      ["Adapté à", "Sécurité d'exploitation"],
      ["Options", "Sabots, barrières, butées, marquage"],
    ],
    steps: [
      ["Diagnostic", "Repérage des zones à risque et flux chariots."],
      ["Sélection", "Choix des protections selon impact et usage."],
      ["Pose", "Fixation, alignement et contrôle visuel final."],
    ],
  },
  {
    slug: "accessoires-manutention",
    anchor: "produit-accessoires-manutention",
    title: "Accessoires & manutention",
    navTitle: "Accessoires & manutention",
    partner: "MANORGA",
    image: "/img/prod-accessoires-clean.png",
    caption: "Supports, grilles, séparateurs et pièces.",
    eyebrow: "Compléments",
    headline: "Les bons accessoires rendent le stockage plus lisible.",
    intro:
      "Supports, grilles, platelages, séparateurs, bacs, tablettes et pièces de finition complètent le rayonnage pour l'adapter au terrain réel.",
    stats: [
      ["Rôle", "Adapter"],
      ["Usage", "Finition"],
      ["Service", "SAV & pièces"],
    ],
    uses: [
      "Adaptation d'un rayonnage à des palettes ou colis spécifiques",
      "Séparation de références et maintien des charges",
      "Compléments de sécurité et de finition",
      "Remplacement ou ajout de pièces sur installations existantes",
    ],
    advantages: [
      "Améliore l'ordre et la lecture des emplacements",
      "Permet d'adapter une structure sans tout remplacer",
      "Facilite l'exploitation quotidienne des équipes",
      "Disponible pour projets neufs ou maintenance",
    ],
    specs: [
      ["Type", "Accessoires de rayonnage"],
      ["Marque", "MANORGA"],
      ["Adapté à", "Optimisation & maintenance"],
      ["Options", "Grilles, supports, séparateurs, tablettes"],
    ],
    steps: [
      ["Besoin", "Identifier les références, formats et contraintes."],
      ["Compatibilité", "Vérifier dimensions, charges et structure existante."],
      ["Intégration", "Ajout des accessoires et contrôle d'usage."],
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
