Tu es un assistant expert en développement de jeux en temps réel. Génère un projet Phaser 3 structuré pour un **wargame 2D en temps réel**, avec une architecture modulaire et propre, selon les règles suivantes :

1. 🎮 Concept :
   - Le jeu est un **wargame spatial 2D en temps réel**.
   - Une **carte 2D en grille carrée** (ex. 20x20 cases).
   - Chaque case peut contenir des **unités appartenant à différentes factions**.
   - Les unités se déplacent automatiquement vers des objectifs définis.
   - Des combats se déclenchent quand des unités ennemies se rencontrent.
   - Le joueur peut **sélectionner une unité** et **lui donner un ordre de déplacement** en cliquant sur une case.

2. 🧱 Structure orientée objet stricte :
   - Tous les objets sont des **dataclasses pures** (aucune méthode), définies dans `dataclasses/`.
     - Exemples : `Unit.js`, `Tile.js`, `Faction.js`, `GameState.js`.
     - Chaque classe contient uniquement des **données** : position, vie, faction, état, etc.
   - Toute la logique est définie dans des fichiers `logic/` avec des **fonctions pures** :
     - Exemples : `updateUnit(unit, gameState)`, `resolveCombat(unitA, unitB)`, `moveUnitToward(unit, targetTile)`.

3. 📁 Arborescence du projet :
   - `index.html` : point d’entrée HTML.
   - `main.js` : initialisation Phaser.
   - `scenes/MainScene.js` : scène principale qui contient la boucle de jeu.
   - `dataclasses/Unit.js`, `Tile.js`, `GameState.js`, etc.
   - `logic/unitLogic.js`, `combatLogic.js`, `movementLogic.js`, `inputLogic.js`, etc.
   - `assets/` : sprites (unités, fond de carte).
   - Utilise **ES6 Modules** (avec `export/import`).

4. 🔁 Boucle de jeu (Phaser) :
   - La méthode `update()` dans `MainScene` :
     - Parcourt les unités et applique `updateUnit(unit, gameState)`.
     - Met à jour les positions, déclenche les combats si besoin.
     - Les effets graphiques (mouvement, disparition) sont synchronisés à partir des données.
   - Les clics sont gérés par `handleClick(x, y, gameState)` → définit un objectif de déplacement.

5. 🧠 Séparation stricte :
   - Aucune logique dans les dataclasses.
   - La scène Phaser ne contient **aucune règle métier**, elle délègue tout aux fonctions.
   - Exemple : `unitLogic.js` contient la fonction `tickUnit(unit, gameState)` qui détermine les actions à effectuer.

6. 🎨 UX minimale :
   - Chaque unité a une couleur différente selon sa faction.
   - Une flèche ou ligne montre l’objectif de déplacement.
   - Optionnel : un mini-compteur de points de vie au-dessus de l’unité.

7. ✅ Génére un **prototype fonctionnel**, avec :
   - Une scène jouable.
   - Une unité par faction.
   - Possibilité de donner un ordre de déplacement.
   - Collision simple entre unités : la plus faible en PV est détruite.

8. 💬 Code bien commenté pour pouvoir ajouter facilement :
   - Plusieurs types d’unités.
   - Priorités de cible.
   - Capture de territoire.
   - IA pour les autres factions.
