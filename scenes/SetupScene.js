import EmpireSetup from '../dataclasses/EmpireSetup.js';
import { defaultCivilizations } from '../logic/setupLogic.js';
import React from 'react';
import { createRoot } from 'react-dom/client';
import CivilizationSelector from '../components/CivilizationSelector.js';

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
