/**
 * Clamp a value between a minimum and maximum.
 * @param {number} value - value to clamp
 * @param {number} min - minimum value
 * @param {number} max - maximum value
 */
export function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

/**
 * Utility creating a menu button. Font size can be adjusted after creation
 * to react to screen resizing.
 *
 * @param {Phaser.Scene} scene - scene where the button is created
 * @param {number} x - horizontal position
 * @param {number} y - vertical position
 * @param {string} label - button label
 * @param {Function} callback - callback executed on click
 * @param {number} fontSize - initial font size in pixels
 */
export function createMenuButton(scene, x, y, label, callback, fontSize = 28) {
    const style = {
        fontFamily: 'Orbitron',
        fontSize: `${fontSize}px`,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#0ff',
        padding: { x: 20, y: 10 },
        stroke: '#0ff',
        strokeThickness: 2
    };

    const button = scene.add
        .text(x, y, label, style)
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', callback)
        .on('pointerover', () =>
            button.setStyle({ backgroundColor: 'rgba(0, 255, 255, 0.3)' })
        )
        .on('pointerout', () =>
            button.setStyle({ backgroundColor: 'rgba(0, 0, 0, 0.5)' })
        );

    button.setOrigin(0.5);

    return button;
}
