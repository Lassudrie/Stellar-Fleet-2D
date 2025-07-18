# Stellar-Fleet-2D

Prototype Phaser 3 project structured as a **single page application**.

Open `index.html` to access the HTML main menu. Clicking **New Game** now starts the Phaser game directly on the empire setup form without leaving the page.

## Progressive Web App

The project now includes a `manifest.json` and a service worker so it can be installed and run offline like a standard PWA.

## Main Scene

As the game launches, players are greeted by a sleek, animated main menu interface set against a backdrop of a distant galaxy — stars glimmer, planets rotate slowly, and distant fleets glide silently across the void. The application works as a **one-page site**: clicking a menu item simply reveals a different section. The main navigation panel includes the following options:

- New Game – Start a fresh campaign. Players can choose a faction, configure galaxy settings (number of systems, AI difficulty, etc.), and name their empire.

- Load Game – Browse and load from a list of previous save files.

- Codex – Access a rich in-universe encyclopedia containing lore, faction profiles, ship classes, and gameplay mechanics.

- Credits – View the team behind the game.

- Exit – Close the game and return to the desktop.

Hovering over each option triggers subtle UI animations and ambient sounds, reinforcing the futuristic and tactical atmosphere of the game.

## Setup Scene

The setup form gathers the initial empire information. When the player starts a game this data is stored in `localStorage` so it can be loaded later from the **Load Game** menu.

## Load Game

Selecting **Load Game** displays a simple page showing the last saved empire if one exists. Clicking **Load Last Game** immediately starts the main scene with that saved configuration.

## Animated Background

The main menu now includes a lightweight CSS starfield that scrolls slowly across the screen, providing a subtle sense of motion behind the static galaxy image.

