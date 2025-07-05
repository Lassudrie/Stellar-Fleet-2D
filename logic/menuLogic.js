export function createMenuButton(scene, x, y, label, callback) {
    const style = {
        fontFamily: 'Orbitron',
        fontSize: '28px',
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
        .on('pointerover', () => button.setStyle({ backgroundColor: 'rgba(0, 255, 255, 0.3)' }))
        .on('pointerout', () => button.setStyle({ backgroundColor: 'rgba(0, 0, 0, 0.5)' }));
    button.setOrigin(0.5);
    return button;
}
