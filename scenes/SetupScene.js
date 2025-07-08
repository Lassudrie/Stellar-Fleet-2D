import EmpireSetup from '../dataclasses/EmpireSetup.js';
import { defaultCivilizations } from '../logic/setupLogic.js';
import CivilizationSelector from '../components/CivilizationSelector.js';

// Use global React/ReactDOM loaded via CDN instead of ESM imports so
// the module works when opened directly in the browser.
const React = window.React;
const { createRoot } = window.ReactDOM;

export function showSetupScene(container, onStart) {
  const setupData = new EmpireSetup();

  const formHtml = `
    <div class="setup-wrapper">
      <div id="civSelector" class="civ-selector"></div>
      <button id="startBtn" class="next-btn" aria-label="Suivant">&rarr;</button>
    </div>`;

  container.innerHTML = formHtml;

  const civContainer = container.querySelector('#civSelector');
  let selected = defaultCivilizations[0];
  const root = createRoot(civContainer);
  root.render(
    React.createElement(CivilizationSelector, {
      civilizations: defaultCivilizations,
      onSelect: (c) => (selected = c),
    })
  );

  const startBtn = container.querySelector('#startBtn');
  startBtn.addEventListener('click', () => {
    setupData.civilization = selected ? selected.name : '';
    localStorage.setItem('lastGame', JSON.stringify(setupData));
    if (onStart) onStart(setupData);
  });
}
