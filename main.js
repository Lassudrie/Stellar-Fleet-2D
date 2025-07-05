import MainMenu from './ui/MainMenu.js';
import MainScene from './scenes/MainScene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [MainMenu, MainScene]
};

new Phaser.Game(config);
