# Audit — passage 2

## Vérifications effectuées

- `npm install` exécuté.
- `npm run build` exécuté après les modifications : build Astro réussi.
- 35 pages HTML générées ; 34 URLs indexables dans le sitemap (la 404 n’y figure pas).
- Canonique, Open Graph, sitemap et robots basculés vers `https://sud-ramonage.com`.
- Recherche effectuée sur les anciennes occurrences de domaine, « Devis gratuit », « départements des Bouches-du-Rhône » et l’ancien horaire structuré non confirmé.
- Image hero WebP de 100 Ko utilisée pour le hero principal et les fonds de page ; l’ancien PNG de référence n’est plus utilisé dans le rendu.

## Changements majeurs

- Système d’icônes SVG interne et cohérent dans la navigation, le hero, les cartes principales et les contenus enrichis.
- Pages prestations développées avec périmètre, déclencheurs, distinctions, FAQ, tarifs et maillage.
- Page Martigues renforcée comme page locale principale.
- Base éditoriale portée à 8 articles.
- Schémas `Service`, `BreadcrumbList` et `BlogPosting` ajoutés là où ils correspondent au contenu visible.
- Document d’intégration de formulaire Vercel ajouté sans prétendre à un envoi non configuré.

## À valider avant publication définitive

- Configuration DNS et redirections 301 vers `https://sud-ramonage.com` depuis les variantes `.fr`, `www` et éventuels domaines acquis.
- Prestataire d’envoi et variables d’environnement pour le formulaire Vercel.
- Adhésion effective à un médiateur de la consommation et ses coordonnées.
- Politique de conservation, paiements, annulations, frais de déplacement et suppléments.
- Coordonnées d’hébergement Vercel à confirmer dans les mentions légales.
