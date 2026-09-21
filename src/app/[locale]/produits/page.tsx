import { redirect } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

// L'ancienne page « Produits » faisait doublon avec la section produits de
// l'accueil. L'onglet redirige désormais vers cette section (#produits).
export default async function ProduitsPage({ params }: Props) {
  const { locale } = await params;
  redirect({ href: "/#produits", locale: locale as Locale });
}
