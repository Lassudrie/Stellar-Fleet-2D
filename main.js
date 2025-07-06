import SetupScene from './scenes/SetupScene.js';
import MainScene from './scenes/MainScene.js';

let game;

export function startGame(parentId = 'game-container', setupData = null) {
    if (game) {
        if (setupData) {
            game.scene.stop('SetupScene');
            game.scene.start('MainScene', { setupData });
        }
        return game;
    }

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

    if (setupData) {
        game.scene.stop('SetupScene');
        game.scene.start('MainScene', { setupData });
    }

    window.addEventListener('resize', () => {
        game.scale.resize(window.innerWidth, window.innerHeight);
    });

    return game;
}

