export const company = {
  name: 'SUD RAMONAGE', tagline: 'Artisan ramoneur diplômé COSTIC', owner: 'Emmanuel Ozanon — Entrepreneur individuel',
  address: '31 Chemin des Tamaris, 13500 Martigues', phone: '06 64 72 96 00', phoneHref: 'tel:+33664729600',
  email: 'contact@sud-ramonage.fr', siren: '519 363 238', siret: '519 363 238 00063', rcs: '519 363 238 R.C.S. Aix-en-Provence',
  hours: 'Interventions de 7 h à 21 h', insurance: 'Responsabilité civile professionnelle MAIF'
};

export const services = [
  {slug:'ramonage', title:'Ramonage', short:'Conduits, cheminées et appareils de chauffage.', price:'Dès 75 €', icon:'flame'},
  {slug:'poele-bois', title:'Poêle à bois', short:'Ramonage soigné de votre poêle et de son conduit.', price:'75 €', icon:'flame'},
  {slug:'poele-granules', title:'Poêle à granulés', short:'Ramonage du conduit ou entretien complet, selon le besoin.', price:'Dès 75 €', icon:'flame'},
  {slug:'insert', title:'Insert à bois', short:'Ramonage de l’insert et du conduit concerné.', price:'75 €', icon:'flame'},
  {slug:'cheminee-foyer-ouvert', title:'Cheminée à foyer ouvert', short:'Ramonage de cheminée à foyer ouvert.', price:'75 €', icon:'flame'},
  {slug:'debistrage', title:'Débistrage', short:'Élimination du bistre et des dépôts durcis.', price:'Dès 390 €', icon:'shield'},
  {slug:'inspection-camera', title:'Inspection caméra', short:'Contrôle visuel du conduit avec rapport et photos.', price:'Dès 110 €', icon:'camera'},
  {slug:'diagnostics', title:'Diagnostics', short:'Vacuité, fumigène, refoulement et remise en service.', price:'Dès 90 €', icon:'document'},
  {slug:'chaudieres', title:'Chaudières', short:'Ramonage et nettoyage selon le type de chaudière.', price:'Dès 75 €', icon:'flame'},
  {slug:'professionnels', title:'Professionnels', short:'Syndics, agences et métiers de bouche.', price:'Sur devis', icon:'document'}
];

export const priceGroups = [
  {title:'Ramonage', items:[['Ramonage de poêle à bois','75 €'],['Ramonage de poêle à granulés / pellets','75 €'],['Ramonage d’insert à bois','75 €'],['Ramonage de cheminée à foyer ouvert','75 €'],['Syndics et agences immobilières','à partir de 75 €'],['Four à bois / four professionnel','sur devis']]},
  {title:'Débistrage & nettoyage technique', items:[['Débistrage / dégoudronnage','à partir de 390 €'],['Extraction cuisines professionnelles','sur devis']]},
  {title:'Entretien & chaudières', items:[['Entretien annuel complet + ramonage poêle à granulés','190 €'],['Ramonage chaudière murale gaz','75 €'],['Ramonage + nettoyage chaudière fioul / bois','110 €']]},
  {title:'Diagnostics', items:[['Contrôle de vacuité','90 €'],['Diagnostic complet avant remise en service','190 €'],['Étude technique avant installation','350 €'],['Inspection caméra avec rapport/photos','à partir de 110 €'],['Test fumigène','90 €'],['Diagnostic de refoulement','250 €']]}
];

export const localPages = {
  martigues:{name:'Martigues', title:'Ramoneur à Martigues', intro:'Basé à Martigues, SUD RAMONAGE intervient pour le ramonage, le débistrage et les diagnostics de conduits. Un échange préalable permet de déterminer la prestation adaptée à votre installation.', places:'Martigues, Saint-Pierre, Saint-Julien-les-Martigues et La Mède.'},
  'cote-bleue':{name:'la Côte Bleue', title:'Ramoneur sur la Côte Bleue', intro:'SUD RAMONAGE intervient sur la Côte Bleue pour l’entretien des cheminées, inserts, poêles à bois et poêles à granulés. Les demandes sont étudiées selon le type d’appareil et l’accessibilité du conduit.', places:'Sausset-les-Pins, Carry-le-Rouet, Ensuès-la-Redonne, Le Rove, Niolon, La Vesse, Grand Méjean et Petit Méjean.'},
  'etang-de-berre':{name:'l’Étang de Berre', title:'Ramoneur autour de l’Étang de Berre', intro:'Pour les particuliers et professionnels autour de l’Étang de Berre, SUD RAMONAGE propose des prestations de ramonage et de diagnostic adaptées aux installations concernées.', places:'Port-de-Bouc, Fos-sur-Mer, Istres, Saint-Mitre-les-Remparts, Miramas, Marignane, Vitrolles, Rognac, Velaux et La Fare-les-Oliviers.'},
  'carry-le-rouet':{name:'Carry-le-Rouet', title:'Ramoneur à Carry-le-Rouet', intro:'SUD RAMONAGE intervient à Carry-le-Rouet pour les demandes liées aux cheminées, inserts, poêles à bois et poêles à granulés. La prestation est déterminée selon l’appareil et le conduit.', places:'Carry-le-Rouet, dans le secteur de la Côte Bleue.', focus:'Pour une demande à Carry-le-Rouet, le premier point utile est d’identifier l’équipement : cheminée à foyer ouvert, insert, poêle à bois ou poêle à granulés. Cela permet de distinguer le ramonage du conduit, l’entretien annuel complet d’un poêle à granulés et, si nécessaire, un diagnostic.'},
  'sausset-les-pins':{name:'Sausset-les-Pins', title:'Ramoneur à Sausset-les-Pins', intro:'SUD RAMONAGE dessert Sausset-les-Pins pour le ramonage et les diagnostics de conduits, après échange sur votre installation et les conditions d’accès.', places:'Sausset-les-Pins, dans le secteur de la Côte Bleue.', focus:'À Sausset-les-Pins, SUD RAMONAGE accompagne les propriétaires qui souhaitent préparer la période de chauffe, vérifier un conduit ou comprendre une différence de prestation. Un contrôle de vacuité ou une inspection caméra peut être envisagé lorsque la question ne relève pas d’un simple ramonage.'},
  istres:{name:'Istres', title:'Ramoneur à Istres', intro:'SUD RAMONAGE intervient à Istres pour les besoins de ramonage, débistrage et diagnostics, selon votre appareil et la configuration du conduit.', places:'Istres, dans le secteur de l’Étang de Berre.', focus:'À Istres, les demandes peuvent concerner un poêle à bois, un poêle à granulés, un insert, une cheminée ou une chaudière. Le tarif et le périmètre sont clarifiés avant l’engagement, notamment lorsqu’un diagnostic ou une intervention technique s’avère plus pertinent qu’un ramonage seul.'},
  marignane:{name:'Marignane', title:'Ramoneur à Marignane', intro:'SUD RAMONAGE propose à Marignane des prestations de ramonage et de diagnostic adaptées aux installations des particuliers et professionnels.', places:'Marignane, dans le secteur de l’Étang de Berre.', focus:'À Marignane, une demande peut être formulée pour un entretien de conduit, une inspection caméra ou un diagnostic de fonctionnement. Pour les poêles à granulés, le ramonage du conduit à 75 € et l’entretien annuel complet avec ramonage à 190 € sont clairement distingués.'},
  'marseille-ouest':{name:'Marseille Ouest', title:'Ramonage Marseille Ouest', intro:'SUD RAMONAGE dessert certains secteurs de Marseille Ouest, sur demande et après vérification de la zone, de l’installation et des conditions d’accès.', places:'L’Estaque et secteurs occidentaux pertinents de Marseille.'},
  aix:{name:'Aix-en-Provence et alentours', title:'Ramonage Aix-en-Provence et alentours', intro:'SUD RAMONAGE peut intervenir sur les secteurs d’Aix-en-Provence et alentours, selon la nature de la demande et les conditions d’organisation de l’intervention.', places:'Aix-en-Provence, Luynes, Les Milles, Venelles, Puyricard, Bouc-Bel-Air, Cabriès et Calas.'}
};

export const articles = [
 {slug:'quand-ramoner-poele-granules', title:'Quand faire ramoner un poêle à granulés ?', excerpt:'Les points à distinguer entre ramonage et entretien de votre appareil.', category:'Poêles à granulés'},
 {slug:'bistre-risques-et-solutions', title:'Bistre : comprendre les risques et les solutions', excerpt:'Pourquoi un dépôt goudronné doit être identifié avant toute intervention.', category:'Sécurité'},
 {slug:'controle-vacuite-conduit', title:'À quoi sert le contrôle de vacuité d’un conduit ?', excerpt:'Le contrôle utile pour vérifier le passage intérieur d’un conduit.', category:'Diagnostics'},
 {slug:'ramonage-cheminee-foyer-ouvert', title:'Ramonage d’une cheminée à foyer ouvert : les points à vérifier', excerpt:'Conduit, accès et précautions : les repères utiles avant une intervention.', category:'Cheminée & insert'},
 {slug:'signes-bistre-conduit', title:'Quels signes peuvent indiquer du bistre dans un conduit ?', excerpt:'Détecter les signes qui justifient une évaluation technique.', category:'Bistre & débistrage'},
 {slug:'tirage-refoulement-fumee', title:'Tirage insuffisant ou refoulement de fumée : que faire ?', excerpt:'Comprendre les différences entre un problème de tirage et un diagnostic de refoulement.', category:'Conduits & sécurité'},
 {slug:'monoxyde-carbone-gestes-prevention', title:'Monoxyde de carbone : gestes de prévention autour des appareils de chauffage', excerpt:'Des repères de vigilance à adopter sans se substituer à un diagnostic.', category:'Sécurité'},
 {slug:'preparer-saison-chauffe', title:'Préparer la saison de chauffe : l’essentiel à anticiper', excerpt:'Une checklist simple pour aborder la période de chauffe sereinement.', category:'Entretien saisonnier'}
];
