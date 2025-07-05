import { createMenuButton, clamp } from '../logic/menuLogic.js';

// Ratios and limits for responsive layout
const TITLE_RATIO = 0.08;
const BUTTON_RATIO = 0.05;
const LOGO_RATIO = 0.2;

const MIN_TITLE = 24;
const MAX_TITLE = 64;
const MIN_BUTTON = 18;
const MAX_BUTTON = 36;
const MIN_LOGO = 80;
const MAX_LOGO = 200;

export default class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }

    preload() {
        this.load.image('menuBg', 'assets/main menu.png');
    }

    create() {
        const { width, height } = this.scale;

        // container grouping all UI elements for easy resizing
        this.uiContainer = this.add.container(0, 0);

        // background image
        this.bgImage = this.add.image(0, 0, 'menuBg').setOrigin(0).setDisplaySize(width, height);

        // placeholder logo
        this.logo = this.add
            .rectangle(0, 0, 100, 100, 0x00ffff, 0.2)
            .setStrokeStyle(2, 0x00ffff)
            .setOrigin(0.5);

        this.titleText = this.add
            .text(0, 0, 'Stellar Fleet 2D', {
                fontFamily: 'Orbitron',
                color: '#0ff',
                stroke: '#0ff',
                strokeThickness: 2,
            })
            .setOrigin(0.5);

        this.playButton = createMenuButton(this, 0, 0, 'New Game', () => {
        });

        this.quitButton = createMenuButton(this, 0, 0, 'Quit', () => {
            if (window.close) {
                window.close();
            } else {
                this.add
                    .text(width / 2, height / 2 + 120, "Merci d'avoir joué!", {
                        fontSize: '18px',
                        color: '#fff',
                    })
                    .setOrigin(0.5);
            }
        });

        this.uiContainer.add([this.bgImage, this.logo, this.titleText, this.playButton, this.quitButton]);

        // fade in effect
        this.uiContainer.setAlpha(0);
        this.tweens.add({ targets: this.uiContainer, alpha: 1, duration: 300 });

        this.resizeUI({ width, height });

        // adapt elements on window resize
        this.scale.on('resize', this.resizeUI, this);
    }

    resizeUI(gameSize) {
        const { width, height } = gameSize;
        const min = Math.min(width, height);

        this.bgImage.setDisplaySize(width, height);

        const titleSize = clamp(height * TITLE_RATIO, MIN_TITLE, MAX_TITLE);
        this.titleText.setFontSize(titleSize);
        this.titleText.setPosition(width / 2, height * 0.15);

        const logoSize = clamp(min * LOGO_RATIO, MIN_LOGO, MAX_LOGO);
        this.logo.setSize(logoSize, logoSize);
        this.logo.setPosition(width / 2, height * 0.35);

        const buttonSize = clamp(height * BUTTON_RATIO, MIN_BUTTON, MAX_BUTTON);
        this.playButton.setFontSize(buttonSize);
        this.quitButton.setFontSize(buttonSize);

        const spacing = buttonSize * 2;
        this.playButton.setPosition(width / 2, height * 0.55);
        this.quitButton.setPosition(width / 2, height * 0.55 + spacing);
    }

    shutdown() {
        this.scale.off('resize', this.resizeUI, this);
    }
}
