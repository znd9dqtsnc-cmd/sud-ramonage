# Guide de Contenu — Sud Ramonage
## Instructions pour la Génération d'Articles (IA + Relecture Humaine)

> **Règle d'or** : L'IA génère le brouillon en 2 minutes. Un œil humain relit et ajoute une phrase personnelle (observation terrain, anecdote de chantier récent, photo). Ce "grain de sel" humain est ce qui différencie un article utile d'un spam de contenu.

---

## 1. Où poser les fichiers

Chaque nouvel article est un fichier Markdown dans :
```
src/content/blog/mon-titre-en-kebab-case.md
```

Une fois le fichier posé, l'article est accessible sur :
```
https://www.sud-ramonage.fr/conseils/mon-titre-en-kebab-case
```

Le sitemap et l'index `/conseils` se mettent à jour automatiquement au prochain déploiement.

---

## 2. Frontmatter obligatoire (à copier-coller)

```yaml
---
title: "Titre principal — accrocheur, avec un bénéfice concret (max 70 caractères)"
description: "Résumé SEO de 150-160 caractères. Doit contenir au moins un mot-clé principal et une promesse. Ex: 'Comment éviter le refoulement de fumée par mistral à Martigues — causes, solutions et conseils d'artisan certifié COSTIC.'"
category: "Technique"  # Réglementation | Technique | Diagnostic | Sécurité | Actualité | Conseil
readTime: "5 min"
datePublished: "2026-05-05"  # Format YYYY-MM-DD
tags: ["Mistral", "Refoulement", "Tirage", "Martigues"]  # 3 à 6 tags
relatedService:
  href: "/ramonage"  # /ramonage | /debistrage | /inspection-camera | /entretien-poele | /tubage | /normes
  label: "Ramonage certifié RSD 13"
keywords: "mots clés longue traîne séparés par virgule"
draft: false  # true = non publié
---
```

---

## 3. Structure de l'article (template standard)

```markdown
[Accroche — 2-3 phrases maximum. Le problème concret du client, immédiatement.]

## [Titre H2 — Contexte ou cause principale]

[Paragraphe explicatif. Écriture directe, sans conditionnel. "Le bistre s'enflamme à 200 °C" pas "Le bistre pourrait s'enflammer".]

## [Titre H2 — Les N causes / étapes / solutions]

### 1. [Titre H3]
[Contenu. Peut contenir des blockquotes pour des citations terrain :]
> *« Observation d'artisan sur le chantier... »*

### 2. [Titre H3]
[...]

## Ce que vous pouvez faire immédiatement

[Liste courte de 3-5 actions concrètes :]
- Action immédiate 1
- Action immédiate 2
- Action immédiate 3

## Quand appeler un professionnel

[Critères clairs. Mention de Sud Ramonage avec le numéro. Lien vers le service concerné.]

---
*Artisan certifié COSTIC · Qualibat 6521 · 31 chemin des tamaris, 13500 Martigues · 06 64 72 96 00*
```

---

## 4. Ton et style

| ✅ À faire | ❌ À éviter |
|-----------|------------|
| Ton d'expert de terrain, direct | Jargon incompréhensible sans explication |
| Phrases courtes (15-20 mots max) | Phrases à rallonge |
| Chiffres concrets ("200 °C", "3 mm de bistre") | Formulations vagues ("très chaud", "beaucoup") |
| Termes techniques + explication immédiate | Termes techniques non définis |
| "Je", "nous" pour les observations terrain | Style corporatif distant |
| Ancrage local (Martigues, Côte Bleue, RSD 13) | Généralités valables partout en France |
| Appel à l'action vers le 06 64 72 96 00 | Article sans conversion |

---

## 5. Mots-clés obligatoires (densité naturelle, pas de sur-optimisation)

**Termes autorité à placer dans chaque article :**
- `Sud Ramonage` — au moins 2 fois (dans l'intro et la conclusion)
- `RSD 13` ou `Règlement Sanitaire Départemental` — au moins 1 fois
- `certifié COSTIC` — au moins 1 fois
- `NF DTU 24.1` — si l'article est technique

**Ancrage géographique (au moins 1 de ces termes) :**
- Martigues, Côte Bleue, Bouches-du-Rhône, Étang de Berre, Fos-sur-Mer, Istres, Sausset-les-Pins

**Termes techniques haute valeur (selon le sujet) :**
- Bistre, calcin, vacuité, tubage, tirage, point de rosée, condensation
- Monoxyde de carbone (CO), refoulement, débistrage
- Certificat de ramonage, inspection caméra, test fumigène

---

## 6. Sujets prioritaires (pipeline hebdomadaire suggéré)

### Type A — "Météo & Tirage" (actualité locale)
Déclencheur : alerte météo, épisode de mistral, début/fin de saison.

**Exemples :**
- "Alerte Mistral 80 km/h à Martigues : Nos conseils pour éviter les refoulements de fumée cette semaine."
- "Fin de saison : faut-il ramoner avant ou après l'hiver ?"
- "Gel et condensation : pourquoi votre conduit souffre en janvier"

### Type B — "Chiffre de la Semaine" (données terrain)
Déclencheur : observation récente sur un chantier.

**Format :** "Cette semaine, [X] conduits [problème] à [zone] : pourquoi [explication]."
- "Cette semaine, 4 conduits débistrés à Istres : le bistre de l'étang de Berre expliqué"
- "3 poêles à granulés en panne à Sausset : les dépôts de sel dans les conduits inox"

### Type C — "Lexique Expert" (pédagogie)
Déclencheur : terme technique demandé par un client.

**Format :** "C'est quoi [terme] ? L'explication de votre artisan."
- "C'est quoi le test de vacuité ? — L'explication de votre artisan ramoneur"
- "Qu'est-ce que le point de rosée d'un conduit ?"
- "Différence entre bistre et calcin — tout ce qu'il faut savoir"

### Type D — "Réglementation locale" (obligations)
Déclencheur : changement de norme, saison (automne = rappel obligatoire).

**Exemples :**
- "RSD 13 : ce qui change pour les locataires en 2026"
- "Vente immobilière à Martigues : quels documents sur le conduit ?"
- "Copropriété et ramonage : qui paie, qui choisit l'artisan ?"

---

## 7. Prompt IA recommandé

Copiez-collez ce prompt dans Claude ou ChatGPT en remplaçant les [crochets] :

```
Tu es un artisan ramoneur certifié COSTIC basé à Martigues (13500), Bouches-du-Rhône.
Tu écris pour ton site professionnel sud-ramonage.fr.

Écris un article de blog de 500-700 mots sur le sujet : [SUJET]

Contraintes :
- Ton : expert de terrain, direct, rassurant, ancré localement (Martigues, Côte Bleue, RSD 13)
- Structure : intro percutante (problème client), 2-3 sections H2, liste d'actions immédiates, conclusion avec appel à l'action vers le 06 64 72 96 00
- Mentionne "Sud Ramonage" au moins 2 fois, "RSD 13" au moins une fois, "certifié COSTIC" au moins une fois
- Si applicable, cite la norme NF DTU 24.1 avec son numéro d'article
- Termine par la signature : *Artisan certifié COSTIC · Qualibat 6521 · 31 chemin des tamaris, 13500 Martigues · 06 64 72 96 00*
- Écris en Markdown valide (titres ##, listes -, blockquotes >, séparateur ---)

Contexte additionnel : [OBSERVATION TERRAIN OU ACTUALITÉ DU MOMENT]
```

---

## 8. Checklist avant publication

- [ ] Frontmatter complet (title, description, category, readTime, datePublished, tags, relatedService)
- [ ] Titre < 70 caractères, description 150-160 caractères
- [ ] "Sud Ramonage" apparaît 2+ fois dans le texte
- [ ] Ancrage géographique présent (ville + département)
- [ ] Au moins un terme légal (RSD 13, NF DTU 24.1, COSTIC)
- [ ] Appel à l'action vers le 06 64 72 96 00 en conclusion
- [ ] **Ajout humain** : une phrase personnelle, une observation de chantier, ou une photo récente
- [ ] `draft: false` pour publier

---

## 9. Fréquence recommandée

| Cadence | Effet SEO attendu |
|---------|------------------|
| 1 article / semaine | Freshness boost — Google recrawle 52× / an |
| 1 article / 2 semaines | Minimum viable pour le signal de fraîcheur |
| Moins | Pas de signal de fraîcheur — site perçu comme statique |

**Conseil** : Planifiez les Type A (météo) en avance de phase (mistral prévu = article la veille). Les Types B/C/D peuvent être stockés en `draft: true` et publiés à la demande.

---

*Document Sud Ramonage — usage interne · Mis à jour : 2026*
