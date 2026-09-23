// Point d'entrée "/" : le site vit sous /fr, /en, /ar. L'export étant statique
// (pas de serveur pour renvoyer un 301), la redirection se fait dans le
// navigateur. La page ne doit rien afficher : le script s'exécute avant le
// rendu et remplace l'entrée d'historique, donc aucun flash de contenu.
export default function RootPage() {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <title>OMAK RAYONNAGE</title>
        <link rel="canonical" href="https://omakrayonnage.com/fr/" />
        <script
          dangerouslySetInnerHTML={{
            __html: `location.replace("/fr/"+location.search+location.hash)`,
          }}
        />
        {/* Filet de sécurité si JavaScript est désactivé */}
        <noscript>
          <meta httpEquiv="refresh" content="0; url=/fr/" />
        </noscript>
      </head>
      <body style={{ margin: 0, background: "#08080e" }} />
    </html>
  );
}
