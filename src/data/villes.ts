export interface VilleData {
  slug: string;
  nom: string;
  codePostal: string;
  surnom: string;
  zone: string;
  distance: string;
  tempsIntervention: string;
  intro: string;
  contexteLocal: string;
  specificiteConduits: string;
  rsdContexte: string;
  temoignage: { auteur: string; texte: string };
  metaTitle: string;
  metaDescription: string;
}

export const villes: VilleData[] = [
  {
    slug: 'martigues',
    nom: 'Martigues',
    codePostal: '13500',
    surnom: 'la Venise Provençale',
    zone: 'bassin de Martigues',
    distance: 'basé sur place',
    tempsIntervention: 'moins de 30 minutes',
    intro: "Artisan ramoneur basé à Martigues, j'interviens au cœur même de la Venise Provençale — des maisons de pêcheurs du Miroir aux Oiseaux aux villas modernes des hauteurs. Je connais chaque quartier et chaque type d'installation : cheminées à foyer ouvert dans les maisons de caractère du centre historique, inserts et poêles à granulés dans les constructions récentes.",
    contexteLocal: "Martigues réunit des architectures très diverses — du bâti ancien avec des foyers ouverts traditionnels aux lotissements modernes équipés de poêles à bois ou à granulés. Cette diversité exige une expertise adaptée à chaque type de conduit.",
    specificiteConduits: "Les maisons du bord de l'étang et du centre ancien présentent souvent des conduits de grande section, parfois partiellement obstrués par des nids ou des dépôts anciens. Les constructions récentes du quartier Saint-Julien et Jonquières utilisent majoritairement des conduits en inox pour poêles à granulés.",
    rsdContexte: "À Martigues, le Règlement Sanitaire Départemental des Bouches-du-Rhône (RSD 13) impose un ramonage obligatoire au moins une fois par an pour tout conduit de fumée en service. Cette obligation s'applique à l'ensemble des foyers — cheminées à foyer ouvert, inserts, poêles à bois et poêles à granulés — qu'il s'agisse d'une résidence principale ou secondaire.",
    temoignage: {
      auteur: 'Michel R., propriétaire à Jonquières',
      texte: "Ponctuel, propre et très professionnel. Le certificat m'a été remis immédiatement à la fin de l'intervention. Je recommande sans hésiter pour tout le secteur de Martigues.",
    },
    metaTitle: 'Ramonage Certifié à Martigues (13500) — Sud Ramonage',
    metaDescription: "Artisan ramoneur certifié à Martigues (13500). Ramonage cheminée, insert, poêle à bois et granulés. Certificat conforme RSD 13 remis immédiatement. Devis gratuit 24h.",
  },
  {
    slug: 'istres',
    nom: 'Istres',
    codePostal: '13800',
    surnom: 'la ville des lacs',
    zone: "secteur de l'Étang de Berre",
    distance: 'à 20 km de Martigues',
    tempsIntervention: 'moins de 30 minutes',
    intro: "Ramoneur certifié intervenant à Istres, je couvre l'ensemble des quartiers de la ville des lacs — des zones pavillonnaires de Trigance aux maisons individuelles du bord de l'Étang de Berre. Le secteur d'Istres est caractérisé par une forte concentration de poêles à granulés et d'inserts dans les constructions des années 1990 à aujourd'hui.",
    contexteLocal: "Istres présente une majorité de pavillons construits entre 1980 et 2010, équipés d'inserts ou de poêles à bois en second chauffage. L'humidité liée à la proximité de l'Étang de Berre favorise la formation de condensation dans les conduits, accélérant l'encrassement.",
    specificiteConduits: "Les conduits des maisons pavillonnaires d'Istres sont souvent en tuile ou en inox flexible, nécessitant un ramonage adapté. La proximité de l'étang crée un taux d'humidité élevé qui favorise l'accumulation de suies collantes et de dépôts de bistre.",
    rsdContexte: "À Istres, comme dans l'ensemble des Bouches-du-Rhône, le RSD 13 impose le ramonage annuel obligatoire de tout conduit de fumée en service. Cette réglementation est particulièrement importante dans les zones pavillonnaires denses de la ville, où un incendie de conduit peut rapidement se propager.",
    temoignage: {
      auteur: 'Sophie L., propriétaire à Trigance',
      texte: "J'avais un poêle à granulés qui tirait mal depuis un an. Sud Ramonage est intervenu rapidement, a trouvé une obstruction partielle et m'a remis le certificat le jour même. Excellent travail.",
    },
    metaTitle: 'Ramonage à Istres (13800) — Artisan Certifié Sud Ramonage',
    metaDescription: "Ramonage de cheminée et poêle à Istres (13800). Artisan certifié, intervention rapide depuis Martigues. Certificat RSD 13 remis sur place. Devis gratuit.",
  },
  {
    slug: 'fos-sur-mer',
    nom: 'Fos-sur-Mer',
    codePostal: '13270',
    surnom: 'la cité portuaire',
    zone: "rives ouest de l'Étang de Berre",
    distance: 'à 15 km de Martigues',
    tempsIntervention: 'moins de 30 minutes',
    intro: "Ramoneur certifié sur le secteur de Fos-sur-Mer, j'interviens dans les quartiers résidentiels de la cité portuaire — du centre-ville aux lotissements de La Fossette et des Caïres. Derrière l'image industrielle de Fos se trouvent de nombreuses maisons individuelles équipées de poêles à bois et de cheminées traditionnelles qui nécessitent un entretien annuel rigoureux.",
    contexteLocal: "Fos-sur-Mer combine un secteur industriel de grande envergure et des quartiers résidentiels avec de nombreuses maisons individuelles. Les vents forts (mistral) de la région accélèrent le refroidissement des conduits et favorisent la création de condensats et de dépôts.",
    specificiteConduits: "À Fos-sur-Mer, le mistral puissant crée des variations de tirage importantes. Les conduits exposés aux vents dominants se refroidissent rapidement, générant de la condensation qui, combinée aux suies, forme des dépôts de bistre tenaces. Un débistrage préventif est souvent recommandé.",
    rsdContexte: "Le RSD 13 s'applique intégralement à Fos-sur-Mer. Tout occupant d'un logement équipé d'un appareil à combustion — cheminée, insert, poêle à bois ou à granulés — est tenu de faire ramoner son conduit au minimum une fois par an. Cette obligation est une condition de validité de votre contrat d'assurance habitation.",
    temoignage: {
      auteur: 'Jean-Pierre M., propriétaire aux Caïres',
      texte: "Service au top. Intervenu le lendemain de mon appel, conduit nettoyé en profondeur, certificat fourni. Le prix est honnête pour une prestation complète.",
    },
    metaTitle: 'Ramonage Cheminée à Fos-sur-Mer (13270) — Sud Ramonage',
    metaDescription: "Ramonage certifié à Fos-sur-Mer (13270). Cheminée, insert, poêle à bois. Intervention rapide depuis Martigues, certificat RSD 13 immédiat. Devis gratuit sous 24h.",
  },
  {
    slug: 'sausset-les-pins',
    nom: 'Sausset-les-Pins',
    codePostal: '13960',
    surnom: 'le fleuron de la Côte Bleue',
    zone: 'Côte Bleue',
    distance: 'à 25 km de Martigues',
    tempsIntervention: 'moins de 40 minutes',
    intro: "Ramoneur certifié sur la Côte Bleue, j'interviens à Sausset-les-Pins pour l'entretien des installations de chauffage des résidences principales et secondaires. Le fleuron de la Côte Bleue allie maisons de village provençal et villas en bord de mer — chaque type d'habitat présente ses propres spécificités en matière de conduits et d'entretien.",
    contexteLocal: "À Sausset-les-Pins, l'air marin chargé en sel est l'ennemi numéro un des conduits et des appareils de chauffage. La corrosion des pièces métalliques et la dégradation des joints s'accélèrent en bord de mer, rendant le contrôle technique annuel encore plus important qu'ailleurs.",
    specificiteConduits: "L'air salin de la Côte Bleue attaque les conduits en inox et les pièces métalliques des poêles. Les dépôts créés par la combustion de bois humide ou de mauvaise qualité sont particulièrement tenaces dans les maisons proches du littoral, où l'humidité ambiante reste élevée.",
    rsdContexte: "À Sausset-les-Pins, le RSD des Bouches-du-Rhône impose le ramonage annuel de tout conduit de fumée actif. Pour les résidences secondaires, souvent chauffées seulement quelques semaines par an, le ramonage reste obligatoire dès lors que l'installation est utilisée — même occasionnellement.",
    temoignage: {
      auteur: 'Isabelle C., propriétaire d\'une villa face à la mer',
      texte: "Je pensais que mon poêle était en panne. En réalité, le conduit était obstrué par du sel et de la corrosion. Après l'intervention de Sud Ramonage, le tirage est parfait. Merci pour le diagnostic précis.",
    },
    metaTitle: 'Ramonage à Sausset-les-Pins (13960) — Côte Bleue — Sud Ramonage',
    metaDescription: "Ramonage certifié à Sausset-les-Pins (13960), Côte Bleue. Spécialiste conduits en milieu marin. Intervention rapide, certificat RSD 13. Devis gratuit.",
  },
  {
    slug: 'carry-le-rouet',
    nom: 'Carry-le-Rouet',
    codePostal: '13620',
    surnom: 'la perle de la Côte Bleue',
    zone: 'Côte Bleue',
    distance: 'à 30 km de Martigues',
    tempsIntervention: 'moins de 45 minutes',
    intro: "Ramoneur certifié intervenant à Carry-le-Rouet, je propose mes services d'entretien de cheminées et de poêles dans la perle de la Côte Bleue. Les maisons provençales et les villas nichées dans les calanques de Carry réclament une attention particulière : conduits souvent anciens, exposition au vent marin et présence fréquente de nids en début de saison.",
    contexteLocal: "Carry-le-Rouet est une commune très résidentielle où se mélangent maisons de village centenaires et villas modernes avec vue sur mer. Les vieilles bâtisses du village possèdent souvent des cheminées à foyer ouvert d'origine, avec des conduits en pierre ou en brique qui nécessitent une attention particulière.",
    specificiteConduits: "Les conduits anciens des maisons de Carry-le-Rouet présentent souvent des irrégularités de section et des zones d'accumulation de suies difficiles d'accès. La proximité des calanques expose les conduits aux embruns et aux algues microscopiques qui dégradent les matériaux sur le long terme.",
    rsdContexte: "Le Règlement Sanitaire Départemental des Bouches-du-Rhône s'applique à Carry-le-Rouet comme dans l'ensemble du département. Le ramonage annuel est obligatoire pour toute installation en service. À noter que les mairies de la Côte Bleue sont particulièrement vigilantes sur ce point lors des contrôles d'assurance après sinistre.",
    temoignage: {
      auteur: 'François B., propriétaire au vieux village',
      texte: "Ma cheminée ancienne n'avait pas été ramonée depuis des années. L'artisan a fait preuve de beaucoup de professionnalisme et de pédagogie. Il m'a expliqué l'état du conduit et les travaux à prévoir. Très satisfait.",
    },
    metaTitle: 'Ramonage Cheminée à Carry-le-Rouet (13620) — Sud Ramonage',
    metaDescription: "Ramonage certifié à Carry-le-Rouet (13620), Côte Bleue. Cheminées anciennes et poêles modernes. Artisan local, certificat RSD 13. Devis gratuit sous 24h.",
  },
  {
    slug: 'chateauneuf-les-martigues',
    nom: 'Châteauneuf-les-Martigues',
    codePostal: '13220',
    surnom: 'le versant Sud',
    zone: 'versant Sud du bassin de Martigues',
    distance: 'à 10 km de Martigues',
    tempsIntervention: 'moins de 20 minutes',
    intro: "Ramoneur certifié sur le secteur de Châteauneuf-les-Martigues, j'interviens rapidement sur l'ensemble de la commune — des habitations traditionnelles du vieux bourg aux lotissements récents du versant Sud. Proche de Martigues, Châteauneuf offre un cadre résidentiel paisible avec de nombreuses maisons individuelles dotées de cheminées ou de poêles en second chauffage.",
    contexteLocal: "Châteauneuf-les-Martigues présente une architecture mixte : maisons de caractère en pierres du vieux bourg avec des cheminées à foyer ouvert, et pavillons modernes des quartiers résidentiels équipés d'inserts ou de poêles à granulés. Cette diversité requiert une connaissance fine des différents types d'installations.",
    specificiteConduits: "Dans les habitations traditionnelles de Châteauneuf, les conduits en maçonnerie sont souvent de grande section et peuvent présenter des fissures ou des dégradations dues à l'âge. Les constructions récentes disposent quant à elles de conduits en inox adaptés aux poêles à haute performance.",
    rsdContexte: "À Châteauneuf-les-Martigues, comme dans toutes les communes des Bouches-du-Rhône, le RSD 13 impose le ramonage annuel obligatoire. Cette obligation s'applique particulièrement aux cheminées à foyer ouvert des maisons de caractère qui, utilisées régulièrement en hiver, accumulent rapidement des dépôts de suie et de bistre.",
    temoignage: {
      auteur: 'Martine P., propriétaire dans le vieux bourg',
      texte: "Notre vieille cheminée provençale avait besoin d'une attention particulière. L'artisan a su adapter sa technique aux spécificités du conduit en pierre. Travail soigné et certificat fourni. Je recommande chaudement.",
    },
    metaTitle: 'Ramonage à Châteauneuf-les-Martigues (13220) — Sud Ramonage',
    metaDescription: "Ramonage certifié à Châteauneuf-les-Martigues (13220). Cheminées traditionnelles et poêles modernes. Intervention rapide depuis Martigues, certificat RSD 13. Devis gratuit.",
  },
  {
    slug: 'gignac-la-nerthe',
    nom: 'Gignac-la-Nerthe',
    codePostal: '13180',
    surnom: 'la commune du massif de la Nerthe',
    zone: 'massif de la Nerthe',
    distance: 'à 25 km de Martigues',
    tempsIntervention: 'moins de 40 minutes',
    intro: "Ramoneur certifié intervenant à Gignac-la-Nerthe, je propose mes prestations d'entretien de cheminées et de conduits dans cette commune résidentielle du massif de la Nerthe. Entre Martigues et Marseille, Gignac combine maisons de village et lotissements pavillonnaires où le chauffage au bois reste très répandu.",
    contexteLocal: "Gignac-la-Nerthe est une commune en développement, avec une mixité de bâti ancien et de constructions récentes. Les collines du massif de la Nerthe créent un microclimat avec des vents fréquents qui influencent le tirage des conduits et accélèrent leur encrassement.",
    specificiteConduits: "Les maisons perchées sur les hauteurs du massif de la Nerthe sont exposées à des vents violents qui peuvent provoquer des refoulements de fumée et une combustion incomplète, favorisant le dépôt de suies et de goudron dans les conduits. Un entretien annuel rigoureux est indispensable.",
    rsdContexte: "À Gignac-la-Nerthe, le RSD des Bouches-du-Rhône s'applique pleinement. Le ramonage annuel est une obligation légale pour tout conduit de fumée actif. Au-delà de l'obligation réglementaire, l'exposition aux vents du massif rend cet entretien particulièrement critique pour la sécurité des habitants.",
    temoignage: {
      auteur: 'Robert V., propriétaire sur les hauteurs de Gignac',
      texte: "Depuis que nous faisons appel à Sud Ramonage chaque automne, notre poêle à bois fonctionne parfaitement et nous avons la tranquillité d'esprit pour l'hiver. Sérieux et professionnel.",
    },
    metaTitle: 'Ramonage à Gignac-la-Nerthe (13180) — Sud Ramonage',
    metaDescription: "Ramonage certifié à Gignac-la-Nerthe (13180). Cheminées et poêles sur le massif de la Nerthe. Artisan local, certificat RSD 13. Intervention rapide. Devis gratuit.",
  },
];

export const villesMap = Object.fromEntries(villes.map(v => [v.slug, v]));
