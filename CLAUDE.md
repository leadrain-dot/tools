# Caisse à outils

Site statique qui regroupe des petits outils web, publié par GitHub Pages depuis la branche `main` (racine du repo) : https://leadrain-dot.github.io/tools/

## Conventions

- Aucun build, aucune dépendance npm : du HTML, du CSS et du JS à la main.
- Un outil = un dossier `<slug>/index.html` (plus ses propres fichiers si besoin, comme `passphrase/mots.js`).
- Liens toujours relatifs (`../assets/site.css`, `../`) : le site est servi sous `/tools/`.
- `assets/site.css` porte les styles partagés : tokens clair/sombre, en-tête, titres fins (Atkinson Hyperlegible Next en 300/400), boutons, contrôle segmenté `.seg`, étiquette `.tape`, tableaux `.table-wrap` + `.data-table`. Les styles propres à un outil restent dans sa page.
- Design volontairement sobre : pas de bandeau décoratif, pas de capitales forcées dans les titres. Le jaune ne sert qu'au bouton principal.
- Chaque nouvel outil s'ajoute dans la liste `#drawers` de `index.html` (étiquette de catégorie, nom, une phrase) et dans le tableau du `README.md`.
- Tout se calcule côté client. Pas de requête réseau en dehors de Google Fonts, pas d'envoi de données.
- Aléatoire : `crypto.getRandomValues` avec tirage par rejet, jamais `Math.random`.
- Textes en français, tutoiement.

## Tester

`python3 -m http.server 8000` à la racine, puis http://localhost:8000. Le fichier ouvert directement (`file://`) ne charge pas les ressources relatives dans tous les navigateurs.
