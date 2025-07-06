import { showSetupScene } from './SetupScene.js';
import { showMainScene } from './MainScene.js';

export function startGame(parent = 'game-container', setupData = null) {
  const container = typeof parent === 'string' ? document.getElementById(parent) : parent;
  if (!container) return;
  container.innerHTML = '';

  if (setupData) {
    showMainScene(container, { setupData });
  } else {
    showSetupScene(container, (data) => {
      showMainScene(container, { setupData: data });
    });
  }
}
