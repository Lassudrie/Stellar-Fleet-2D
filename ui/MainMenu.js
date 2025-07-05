import { createMenuButton } from '../logic/menuLogic.js';
import MainScene from '../scenes/MainScene.js';

export default class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        const { width, height } = this.scale;
        this.add.text(width / 2, height / 2 - 100, 'Stellar Fleet 2D', { fontSize: '32px', color: '#fff' }).setOrigin(0.5);

        createMenuButton(this, width / 2, height / 2, 'New Game', () => {
            this.scene.start('MainScene');
        });

        createMenuButton(this, width / 2, height / 2 + 60, 'Quit', () => {
            if (window.close) {
                window.close();
            } else {
                this.add.text(width / 2, height / 2 + 120, 'Merci d\'avoir joué!', { fontSize: '18px', color: '#fff' }).setOrigin(0.5);
            }
        });
    }
}
