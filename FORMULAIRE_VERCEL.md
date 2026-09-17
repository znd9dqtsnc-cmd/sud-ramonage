# Formulaire de contact avant publication

Le formulaire public actuel conserve le repli par e-mail afin de ne jamais afficher une confirmation sans envoi réel.

Pour recevoir les demandes directement depuis le site sur Vercel, connecter une fonction `/api/contact` à un fournisseur d’envoi e-mail choisi et configuré par le propriétaire (par exemple via une clé stockée dans les variables d’environnement Vercel). La fonction doit :

1. valider les champs côté serveur ;
2. limiter les abus (honeypot et limitation de débit) ;
3. transmettre le message à `contact@sud-ramonage.fr` ;
4. n’afficher une confirmation qu’après succès réel ;
5. documenter le sous-traitant correspondant dans la politique de confidentialité.

Cette connexion n’est volontairement pas activée sans choix de fournisseur ni clé propriétaire.
