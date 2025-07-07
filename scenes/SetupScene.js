import EmpireSetup from '../dataclasses/EmpireSetup.js';
import { initCivilizationCarousel } from '../logic/setupLogic.js';

export function showSetupScene(container, onStart) {
  const setupData = new EmpireSetup();

  const formHtml = `
    <div class="setup-wrapper">
      <div id="civSelector" class="civ-selector"></div>
      <button id="startBtn" class="next-btn" aria-label="Suivant">&rarr;</button>
    </div>`;

  container.innerHTML = formHtml;

  const civContainer = container.querySelector('#civSelector');
  initCivilizationCarousel(civContainer);

  const startBtn = container.querySelector('#startBtn');
  startBtn.addEventListener('click', () => {
    setupData.civilization = container.querySelector('#civilization').value;
    localStorage.setItem('lastGame', JSON.stringify(setupData));
    if (onStart) onStart(setupData);
  });
}
