export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  image: string;
  eyebrow: string;
  caption: string;
  headline: string;
  intro: string;
  stats: Array<[string, string]>;
  deliverables: string[];
  advantages: string[];
  process: Array<[string, string]>;
};

export const services: Service[] = [
  {
    slug: "etude-conception",
    title: "Étude & conception",
    navTitle: "Étude et conception",
    image: "/img/cta-etude-clean.png",
    eyebrow: "Bureau d'études",
    caption: "Analyse du besoin, implantation et choix technique.",
    headline: "Une conception claire avant chaque installation.",
    intro:
      "OMAK cadre votre besoin dès le départ: dimensions, charges, flux, contraintes bâtiment et objectifs d'exploitation. L'étude permet de choisir la bonne structure avant de lancer le montage.",
    stats: [
      ["Entrée", "Besoin client"],
      ["Sortie", "Solution cadrée"],
      ["Objectif", "Budget maîtrisé"],
    ],
    deliverables: [
      "Analyse des dimensions, charges et hauteurs utiles",
      "Recommandation du type de rayonnage adapté",
      "Plan d'implantation et logique de circulation",
      "Chiffrage clair avec options utiles",
    ],
    advantages: [
      "Évite le surdimensionnement ou le mauvais choix de structure",
      "Permet une lecture claire du projet avant validation",
      "Optimise la capacité sans bloquer les flux de manutention",
      "Prépare un montage plus rapide et plus propre",
    ],
    process: [
      ["Relevé", "Collecte des contraintes terrain, photos, surfaces et flux."],
      ["Conception", "Choix technique, niveaux, allées, accès et sécurité."],
      ["Validation", "Devis, plan et variantes possibles selon budget."],
    ],
  },
  {
    slug: "installation-montage",
    title: "Installation & montage",
    navTitle: "Installation et montage",
    image: "/img/realisation-palettier-clean.png",
    eyebrow: "Exécution terrain",
    caption: "Montage, alignement, ancrage et mise en service.",
    headline: "Un montage propre, lisible et sécurisé.",
    intro:
      "Nos équipes organisent le montage sur site avec une méthode claire: réception du matériel, implantation, assemblage, alignement, ancrage et vérification avant exploitation.",
    stats: [
      ["Terrain", "Équipe OMAK"],
      ["Contrôle", "Alignement"],
      ["Fin", "Mise en service"],
    ],
    deliverables: [
      "Organisation de l'intervention et zones de montage",
      "Assemblage des montants, lisses, tablettes ou plateformes",
      "Ancrage, réglages et contrôle visuel",
      "Livraison d'une installation prête à exploiter",
    ],
    advantages: [
      "Réduit les erreurs de pose et les reprises chantier",
      "Garantit une installation cohérente avec le plan validé",
      "Améliore la sécurité dès le premier jour d'utilisation",
      "Limite l'impact sur l'activité du client",
    ],
    process: [
      ["Préparation", "Planning, réception matériel et repérage des zones."],
      ["Montage", "Assemblage par étapes avec contrôle des niveaux."],
      ["Réception", "Vérification, nettoyage visuel et mise en service."],
    ],
  },
  {
    slug: "controle-installations",
    title: "Contrôle des installations",
    navTitle: "Contrôle des installations",
    image: "/img/prod-protection-clean.png",
    eyebrow: "Sécurité & conformité",
    caption: "Inspection, points de risque et recommandations.",
    headline: "Contrôler pour exploiter avec confiance.",
    intro:
      "Le contrôle permet d'identifier les risques visibles: impacts, déformations, protections manquantes, ancrages, lisibilité des allées et état général des structures.",
    stats: [
      ["Objectif", "Prévention"],
      ["Focus", "Sécurité"],
      ["Résultat", "Plan d'action"],
    ],
    deliverables: [
      "Inspection visuelle des structures et protections",
      "Identification des zones sensibles ou endommagées",
      "Recommandations de réparation ou renforcement",
      "Priorisation des actions selon le risque",
    ],
    advantages: [
      "Réduit les interruptions liées aux incidents de stockage",
      "Aide à maintenir une installation propre et exploitable",
      "Protège les équipes, les charges et le matériel",
      "Donne une vision claire des actions à prévoir",
    ],
    process: [
      ["Visite", "Parcours des zones, allées, montants et protections."],
      ["Diagnostic", "Repérage des anomalies et priorisation."],
      ["Action", "Proposition de correction, remplacement ou ajout."],
    ],
  },
  {
    slug: "service-apres-vente",
    title: "Service après-vente",
    navTitle: "Service après vente",
    image: "/img/about-team-clean.png",
    eyebrow: "Accompagnement",
    caption: "Maintenance, pièces, ajustements et évolution.",
    headline: "Un suivi utile après la mise en service.",
    intro:
      "Après l'installation, OMAK accompagne l'évolution de votre stockage: ajout de niveaux, remplacement de pièces, protections, adaptation aux nouveaux flux et interventions correctives.",
    stats: [
      ["Support", "Local"],
      ["Besoin", "Pièces & suivi"],
      ["Durée", "Relation long terme"],
    ],
    deliverables: [
      "Ajout ou remplacement d'accessoires de rayonnage",
      "Intervention sur éléments endommagés",
      "Adaptation de l'installation aux nouveaux besoins",
      "Conseil technique pour extensions futures",
    ],
    advantages: [
      "Prolonge la durée de vie des installations",
      "Permet d'adapter le stockage sans repartir de zéro",
      "Assure un interlocuteur local pour les besoins urgents",
      "Facilite la maintenance et la continuité d'activité",
    ],
    process: [
      ["Demande", "Identification du besoin ou du problème rencontré."],
      ["Solution", "Choix des pièces, accessoires ou correction adaptée."],
      ["Suivi", "Intervention, contrôle et conseil pour la suite."],
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
