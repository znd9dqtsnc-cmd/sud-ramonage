export type TypeIntervention = 'ramonage' | 'debistrage' | 'entretien-poele' | 'securite' | 'extraction';

export interface Realisation {
  slug: string;
  titre: string;
  villeSlug: string;
  nomVille: string;
  codePostal: string;
  zone: string;
  type: TypeIntervention;
  typeLabel: string;
  serviceHref: string;
  date: string;
  ref: string;
  duree: string;
  appareil: string;
  conduit: string;
  materiel: string[];
  constatInitial: string;
  interventionRealisee: string;
  resultat: string;
  certificat: boolean;
  excerpt: string;
}

export const typeConfig: Record<TypeIntervention, { label: string; color: string; bg: string; border: string }> = {
  'ramonage':       { label: 'Ramonage',         color: 'text-[#B5694A]', bg: 'bg-[#FFF3E0]', border: 'border-[#B5694A]' },
  'debistrage':     { label: 'Débistrage',        color: 'text-amber-700', bg: 'bg-amber-50',  border: 'border-amber-500' },
  'entretien-poele':{ label: 'Entretien Poêle',   color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-500' },
  'securite':       { label: 'Mise en Sécurité',  color: 'text-red-700',   bg: 'bg-red-50',    border: 'border-red-500' },
  'extraction':     { label: 'Extraction',         color: 'text-blue-700',  bg: 'bg-blue-50',   border: 'border-blue-500' },
};

export const realisations: Realisation[] = [
  {
    slug: 'ramonage-insert-bois-sausset-les-pins',
    titre: "Ramonage d'un insert à bois à Sausset-les-Pins",
    villeSlug: 'sausset-les-pins',
    nomVille: 'Sausset-les-Pins',
    codePostal: '13960',
    zone: 'Côte Bleue',
    type: 'ramonage',
    typeLabel: 'Ramonage',
    serviceHref: '/ramonage',
    date: '2025-04-05',
    ref: 'SR-2025-041',
    duree: '1h20',
    appareil: 'Insert à bois — foyer fermé grande capacité',
    conduit: 'Conduit inox Ø180mm, longueur 7,5 m',
    materiel: ['Hérisson acier Ø180mm', 'Aspirateur professionnel 2400W', 'Bâches de protection', 'Caméra endoscopique'],
    constatInitial: "Conduit présentant une accumulation dense de suie noire sur l'ensemble du linéaire. Détection d'un début de formation de bistre sur les 2 premiers mètres au-dessus de la buse de sortie de l'insert. Le propriétaire signale une odeur légèrement âcre lors des feux vifs et une fumée visible à l'allumage. Le tirage thermique est réduit d'environ 30 % par rapport aux valeurs normales pour ce type de conduit.",
    interventionRealisee: "Protection intégrale du foyer et du sol (bâche étanche + joint mousse). Ramonage mécanique ascendant et descendant avec hérisson acier Ø180mm adapté au conduit inox. Traitement préventif anti-bistre sur les zones présentant des dépôts goudronneuses. Aspiration professionnelle complète des suies. Test de vacuité post-ramonage avec caméra endoscopique. Contrôle du tirage thermique par mesure différentielle. Vérification de l'état général du conduit : absence de fissure, raccords étanches, chapeau en bon état.",
    resultat: "Conduit totalement propre, absence de dépôts résiduels confirmée par inspection caméra. Tirage thermique rétabli à valeur nominale (–6 Pa). Certificat de ramonage conforme RSD 13 remis immédiatement. Conseil donné au propriétaire : utiliser du bois avec un taux d'humidité inférieur à 20 % pour éviter la formation de bistre.",
    certificat: true,
    excerpt: "Ramonage mécanique complet d'un insert à bois avec conduit inox Ø180mm. Détection et traitement préventif de début de bistre. Tirage thermique rétabli. Certificat RSD 13 remis.",
  },
  {
    slug: 'debistrage-cheminee-martigues',
    titre: "Débistrage mécanique d'une cheminée à Martigues",
    villeSlug: 'martigues',
    nomVille: 'Martigues',
    codePostal: '13500',
    zone: 'Bassin de Martigues',
    type: 'debistrage',
    typeLabel: 'Débistrage',
    serviceHref: '/debistrage',
    date: '2025-03-22',
    ref: 'SR-2025-032',
    duree: '2h45',
    appareil: 'Cheminée à foyer ouvert — tradition provençale, hotte large format',
    conduit: 'Conduit maçonné section 28×28 cm, longueur 9 m',
    materiel: ['Agent dissolvant bistre professionnel Antidépôt Pro+', 'Hérisson acier grande section', 'Aspirateur centralisé 3200W', 'Caméra endoscopique 12m', 'Brosses métalliques rotatives'],
    constatInitial: "Conduit maçonné présentant des dépôts importants de bistre sur 60 à 70 % de la surface intérieure. Épaisseur estimée des dépôts : 4 à 8 mm selon les zones. Présence de coulures brunes caractéristiques sur les parois de la hotte, odeur forte de goudron à froid. Le propriétaire indique que des ramonages ont été réalisés les années précédentes mais sans effet sur ces dépôts, et signale des flammes anormalement hautes lors des feux vifs — signe de combustion partielle du bistre.",
    interventionRealisee: "Phase 1 — Traitement chimique : application à la brosse de l'agent dissolvant bistre sur l'ensemble des parois accessibles. Allumage d'un feu de faible intensité pour activer thermiquement le produit et ramollir les dépôts. Temps d'action : 45 minutes. Phase 2 — Débistrage mécanique : ramonage intensif ascendant avec hérisson grande section et brosses rotatives. Trois passages complets. Aspiration continue des résidus décollés avec aspirateur industriel. Phase 3 — Rinçage et vérification : rinçage à sec des parois, inspection caméra endoscopique complète sur 9 mètres.",
    resultat: "Conduit entièrement débarrassé du bistre. Inspection caméra confirme des parois propres sur l'ensemble du linéaire. Tirage thermique mesuré : conforme. Une légère trace de bistre résiduelle détectée au niveau du coude à 6 mètres : deuxième traitement chimique préventif appliqué sur zone. Certificat de débistrage et de ramonage conforme RSD 13 remis. Recommandation : ramonage de suivi dans 4 mois, bois sec uniquement (taux d'humidité ≤ 18 %).",
    certificat: true,
    excerpt: "Débistrage chimique + mécanique d'un conduit maçonné fortement encrassé (60-70 % de surface couverte). Deux phases de traitement. Conduit entièrement assaini. Certificat remis immédiatement.",
  },
  {
    slug: 'entretien-poele-granules-istres',
    titre: "Entretien annuel de poêle à granulés à Istres",
    villeSlug: 'istres',
    nomVille: 'Istres',
    codePostal: '13800',
    zone: "Étang de Berre",
    type: 'entretien-poele',
    typeLabel: 'Entretien Poêle',
    serviceHref: '/entretien-poele',
    date: '2025-03-10',
    ref: 'SR-2025-028',
    duree: '1h50',
    appareil: 'Poêle à granulés Palazzetti Ecofire Idro 15 kW',
    conduit: 'Tubage inox double paroi Ø80mm, longueur 5,8 m, sortie toiture',
    materiel: ['Hérisson flexible Ø80mm', 'Aspirateur industriel HEPA', 'Brosse brûleur inox', 'Spray nettoyant vitre', 'Multimètre pour test sonde'],
    constatInitial: "Poêle présentant des dysfonctionnements progressifs depuis 6 semaines : allumage difficile (2 à 3 tentatives nécessaires), temps de montée en température allongé de 40 %, code erreur E3 (défaut de tirage) apparu 4 fois en 3 semaines. Inspection visuelle initiale : brûleur recouvert d'une couche de calcin de 3 mm d'épaisseur, cendrier saturé, ventilateur de combustion présentant une accumulation de cendres fines sur les pales réduisant son débit de 35 % estimé. Conduit d'évacuation : suie légère mais pressostat avec tube de connexion partiellement obstrué.",
    interventionRealisee: "Entretien complet en 6 étapes : (1) Ramonage mécanique du conduit tubage inox avec hérisson flexible Ø80mm, aspiration professionnelle. (2) Démontage et nettoyage intégral du brûleur — élimination mécanique du calcin, rinçage et inspection des orifices d'air. (3) Nettoyage complet du ventilateur de combustion : démontage des pales, aspiration, soufflage. (4) Débouchage et nettoyage du tube de connexion du pressostat. (5) Nettoyage de la sonde de température et de la cellule de flamme. (6) Nettoyage de l'échangeur interne et des passes de fumée.",
    resultat: "Remise en service complète : allumage au premier essai, montée en température nominale en 12 minutes (normale pour ce modèle), aucun code erreur. Débit ventilateur rétabli. Test de vacuité conduit : RAS. Tirage thermique mesuré : –8 Pa (valeur nominale constructeur). Certificat d'entretien annuel conforme RSD 13 remis. Économie estimée : consommation réduite de 12 à 15 % sur la saison grâce à la combustion optimisée.",
    certificat: true,
    excerpt: "Entretien complet d'un poêle à granulés Palazzetti 15 kW avec erreurs répétées E3. Nettoyage brûleur, ventilateur, sonde, pressostat. Ramonage conduit inox. Remise en service totale.",
  },
  {
    slug: 'securite-conduit-chaudiere-fos-sur-mer',
    titre: "Mise en sécurité d'un conduit de chaudière à Fos-sur-Mer",
    villeSlug: 'fos-sur-mer',
    nomVille: 'Fos-sur-Mer',
    codePostal: '13270',
    zone: "Rives ouest de l'Étang de Berre",
    type: 'securite',
    typeLabel: 'Mise en Sécurité',
    serviceHref: '/ramonage',
    date: '2025-02-18',
    ref: 'SR-2025-019',
    duree: '2h10',
    appareil: 'Chaudière gaz condensation + conduit de raccordement acier galvanisé',
    conduit: 'Conduit collectif maçonné + raccordement acier Ø130mm, 3,5 m',
    materiel: ['Détecteur CO portatif', 'Caméra endoscopique', 'Conduit de raccordement neuf Ø130mm', 'Aspirateur professionnel', 'Hérisson acier Ø130mm'],
    constatInitial: "Intervention suite à signalement d'un légèrement CO à l'intérieur du logement par l'occupant (détecteur CO domestique déclenché deux fois en une semaine). Inspection initiale au détecteur CO portatif : mesure de 28 ppm en air ambiant — seuil de préoccupation. Examen visuel du conduit de raccordement : fissure longitudinale de 14 cm sur le coude à 90° — rupture du joint de scellement. Inspection caméra du conduit collectif : accumulation de calcin obstruant 25 à 30 % de la section sur les 2 premiers mètres.",
    interventionRealisee: "Arrêt immédiat de la chaudière. Démontage et mise au rebut du conduit de raccordement fissuré. Pose d'un conduit de raccordement neuf Ø130mm en acier galvanisé double épaisseur avec joint silicone haute température. Ramonage mécanique du conduit collectif maçonné avec hérisson Ø130mm. Aspiration complète du calcin évacué. Test d'étanchéité du nouveau raccordement à froid et en conditions de fonctionnement. Remise en service de la chaudière + mesure CO post-intervention.",
    resultat: "Mesure CO post-intervention : 0 ppm. Conduit de raccordement étanche, tirage thermique vérifié. Conduit collectif libre (test de vacuité conforme). La fissure du coude était la cause directe du refoulement de CO. Rapport d'intervention remis au propriétaire avec recommandation de contrôle annuel systématique. Alerte transmise au gestionnaire de l'immeuble pour inspection du conduit collectif complet. Certificat de mise en sécurité remis.",
    certificat: true,
    excerpt: "Intervention urgente suite à déclenchement détecteur CO. Diagnostic : fissure conduit raccordement + calcin conduit collectif. Remplacement conduit, ramonage, mesure CO = 0 ppm. Mise en sécurité complète.",
  },
  {
    slug: 'extraction-nid-oiseaux-carry-le-rouet',
    titre: "Extraction d'un nid d'oiseaux à Carry-le-Rouet",
    villeSlug: 'carry-le-rouet',
    nomVille: 'Carry-le-Rouet',
    codePostal: '13620',
    zone: 'Côte Bleue',
    type: 'extraction',
    typeLabel: 'Extraction',
    serviceHref: '/ramonage',
    date: '2025-03-28',
    ref: 'SR-2025-036',
    duree: '1h35',
    appareil: 'Cheminée à foyer ouvert — maison de village ancienne (construction 1930)',
    conduit: 'Conduit maçonné section 20×20 cm, longueur 11 m, pierres de taille',
    materiel: ['Caméra endoscopique 12m', 'Crochet extraction flexible', 'Hérisson acier', 'Aspirateur professionnel', 'Chapeau anti-nid inox Ø200mm'],
    constatInitial: "Appel du propriétaire pour refoulement total de fumée dans la pièce à vivre à chaque tentative d'allumage depuis le début du printemps. Inspection caméra depuis le foyer : obstruction totale du conduit à 4,2 mètres du sol par un nid d'étourneau compact de grande taille (estimé à 35-40 cm de hauteur). Le nid occupe 100 % de la section utile du conduit. Dépôts de suie importants dans le conduit au-dessus et en-dessous du nid — le conduit n'avait pas été ramoné depuis plusieurs années.",
    interventionRealisee: "Phase 1 — Extraction du nid : introduction du crochet flexible depuis la cheminée en toiture. Dislocation progressive du nid avec rotation et traction. Extraction des matériaux par le bas du conduit (foyer) en plusieurs passages. Aspiration continue. Durée : 45 minutes. Le nid contenait principalement de la paille, des mousses, des débris végétaux et des plumes — masse totale extraite : environ 2,8 kg. Phase 2 — Ramonage : hérisson acier sur l'intégralité du linéaire (11 m), aspiration complète des suies. Phase 3 — Protection : pose d'un chapeau anti-nid inox Ø200mm en toiture, fixé sur le couronnement du conduit.",
    resultat: "Conduit totalement libre, test de vacuité conforme. Ramonage effectué sur l'ensemble du conduit (suie dense mais pas de bistre). Tirage thermique rétabli à valeur nominale. Chapeau anti-nid posé : protection durable contre les nidifications futures tout en maintenant le tirage. Certificat de ramonage et d'extraction remis. Conseil : prochain ramonage avant la saison de chauffe suivante (septembre).",
    certificat: true,
    excerpt: "Extraction d'un nid d'étourneau obstruant 100 % du conduit (4,2 m de hauteur, 2,8 kg). Ramonage complet conduit 11 m. Pose chapeau anti-nid inox. Tirage rétabli. Certificat remis.",
  },
];

export const realisationsMap = Object.fromEntries(realisations.map(r => [r.slug, r]));

export function getRealisationsByVille(villeSlug: string): Realisation[] {
  return realisations.filter(r => r.villeSlug === villeSlug);
}
