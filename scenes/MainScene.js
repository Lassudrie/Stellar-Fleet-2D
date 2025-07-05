export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    preload() {
        // Simple image to demonstrate crisp rendering
        this.load.image('logo', 'assets/main menu.png');
    }

    create(data) {
        const { width, height } = this.scale;
        this.setupData = data?.setupData;

        const title = this.setupData?.empireName
            ? `Empire: ${this.setupData.empireName}`
            : 'Game Scene';
        this.infoText = this.add
            .text(0, 0, title, {
                fontFamily: 'Orbitron',
                color: '#FFFFFF',
                stroke: '#00ffe0',
                strokeThickness: 2,
            })
            .setOrigin(0.5);

        // Centered sprite for testing high DPI rendering
        this.logo = this.add.image(width / 2, height / 2 - 100, 'logo').setOrigin(0.5);

        this.resizeUI({ width, height });

        this.scale.on('resize', this.resizeUI, this);
    }

    resizeUI(gameSize) {
        const { width, height } = gameSize;
        const size = Math.max(20, Math.min(48, height * 0.05));
        this.infoText.setFontSize(size);
        this.infoText.setPosition(width / 2, height / 2);
    }

    update() {
        // Main game update logic would go here
    }
}
