export function createMenuButton(scene, x, y, label, callback) {
    const button = scene.add.text(x, y, label, { fontSize: '24px', backgroundColor: '#222', color: '#fff', padding: { x: 10, y: 5 } })
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', callback)
        .on('pointerover', () => button.setStyle({ backgroundColor: '#555' }))
        .on('pointerout', () => button.setStyle({ backgroundColor: '#222' }));
    button.setOrigin(0.5);
    return button;
}
