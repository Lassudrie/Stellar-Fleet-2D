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
 * @param {HTMLElement} root - container where the button is added
 * @param {string} label - button label
 * @param {Function} callback - callback executed on click
 * @param {number} fontSize - initial font size in pixels
 */
export function createMenuButton(root, label, callback, fontSize = 28) {
    const button = document.createElement('button');
    button.textContent = label;
    button.style.fontFamily = 'Arial, sans-serif';
    button.style.fontSize = `${fontSize}px`;
    button.className = 'menu-btn';
    button.addEventListener('click', callback);
    root.appendChild(button);
    return button;
}
