import EmpireSetup from '../dataclasses/EmpireSetup.js';
import { defaultCivilizations } from '../logic/setupLogic.js';
import CivilizationSelector from '../components/CivilizationSelector.js';

// Use global React/ReactDOM loaded via CDN instead of ESM imports so
// the module works when opened directly in the browser. If those
// globals are missing (e.g. offline), show a helpful error message.
let React = window.React;
let createRoot = window.ReactDOM && window.ReactDOM.createRoot;

export function showSetupScene(container, onStart) {
  if (!React || !createRoot) {
    container.innerHTML =
      '<p class="error">React n\'a pas pu \u00eatre charg\u00e9. ' +
      'V\u00e9rifiez votre connexion internet.</p>';
    return;
  }
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
