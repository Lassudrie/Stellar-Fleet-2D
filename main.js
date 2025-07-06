import SetupScene from './scenes/SetupScene.js';
import MainScene from './scenes/MainScene.js';

let game;

export function startGame(parentId = 'game-container') {
    if (game) return game;

    const config = {
        type: Phaser.AUTO,
        parent: parentId,
        width: window.innerWidth,
        height: window.innerHeight,
        resolution: window.devicePixelRatio || 1,
        pixelArt: true,
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        dom: {
            createContainer: true,
        },
        scene: [SetupScene, MainScene],
    };

    game = new Phaser.Game(config);

    window.addEventListener('resize', () => {
        game.scale.resize(window.innerWidth, window.innerHeight);
    });

    return game;
}

