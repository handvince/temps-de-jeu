# Temps de jeu handball (version hors ligne)

Application web installable (PWA) : une fois ajoutée à l'écran d'accueil de l'iPad,
elle s'ouvre et fonctionne sans aucune connexion.

## Mise en ligne sur GitHub Pages (une seule fois)

1. Sur github.com, crée un dépôt public nommé `temps-de-jeu`.
2. Dans le dépôt : « Add file » › « Upload files », puis glisse **tout le contenu** du dossier
   (index.html, sw.js, manifest.webmanifest, et les dossiers assets et icons). Valide avec « Commit changes ».
3. « Settings » › « Pages » › Source : « Deploy from a branch », branche `main`, dossier `/ (root)` › Save.
4. Après une à deux minutes, l'app est en ligne sur : https://handvince.github.io/temps-de-jeu/

## Installation sur iPad / iPad mini

1. Ouvre le lien dans **Safari** (avec une connexion, la première fois uniquement).
2. Partager › « Sur l'écran d'accueil » › Ajouter.
3. Ouvre l'app une fois depuis l'icône : elle se met en cache. Elle fonctionne ensuite hors ligne.

## Mettre à jour l'app

Remplace les fichiers modifiés sur GitHub, et change la ligne `const CACHE = 'tdj-v1.4';` dans sw.js
(par ex. `tdj-v1.1`). Au prochain lancement avec du réseau, l'app propose « Mettre à jour ».

## Données

Équipes et matchs restent sur l'appareil. Onglet Effectif › « Sauvegarder les équipes »
pour les transférer sur un autre iPad (« Restaurer depuis un fichier »).
