// Layout racine minimal : le vrai <html>/<body> est rendu par app/[locale]/layout.tsx
// (une langue est toujours présente dans l'URL). Ce fichier existe uniquement
// pour autoriser la page d'entrée `app/page.tsx` à la racine du site.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
