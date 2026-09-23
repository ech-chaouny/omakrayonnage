// Point d'entrée "/" : le site vit sous /fr, /en, /ar. Comme l'export est
// statique (pas de serveur pour faire un 301), on redirige côté navigateur.
export default function RootPage() {
  return (
    <html lang="fr">
      <head>
        <meta httpEquiv="refresh" content="0; url=/fr/" />
        <link rel="canonical" href="https://omakrayonnage.com/fr/" />
        <title>OMAK RAYONNAGE — Solutions de stockage industriel</title>
      </head>
      <body style={{ margin: 0, background: "#08080e", color: "#fff", fontFamily: "system-ui, sans-serif" }}>
        <p style={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
          <a href="/fr/" style={{ color: "#f2481c" }}>omakrayonnage.com/fr</a>
        </p>
      </body>
    </html>
  );
}
