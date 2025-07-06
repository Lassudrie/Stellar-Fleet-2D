import EmpireSetup from '../dataclasses/EmpireSetup.js';
import { initCivilizationCarousel } from '../logic/setupLogic.js';

export function showSetupScene(container, onStart) {
  const setupData = new EmpireSetup();

  const formHtml = `
    <div class="setup-wrapper">
      <div class="form-container">
        <h2>New Empire Setup</h2>
        <div>
          <label>Empire Name:<br><input type="text" id="empireName" /></label>
        </div>
        <div>
          <label>Civilization:<br>
            <div id="civSelector" class="civ-selector"></div>
          </label>
        </div>
        <div>
          <label>Leader Name:<br><input type="text" id="leaderName" /></label>
        </div>
        <div>
          <label>Leader Type:<br>
            <select id="leader">
              <option value="Admiral">Admiral</option>
              <option value="Overlord">Overlord</option>
              <option value="Commander">Commander</option>
            </select>
          </label>
        </div>
        <button id="startBtn">Start Game</button>
      </div>
    </div>`;

  container.innerHTML = formHtml;

  const civContainer = container.querySelector('#civSelector');
  initCivilizationCarousel(civContainer);

  const startBtn = container.querySelector('#startBtn');
  startBtn.addEventListener('click', () => {
    setupData.empireName = container.querySelector('#empireName').value;
    setupData.civilization = container.querySelector('#civilization').value;
    setupData.leaderName = container.querySelector('#leaderName').value;
    setupData.leader = container.querySelector('#leader').value;
    localStorage.setItem('lastGame', JSON.stringify(setupData));
    if (onStart) onStart(setupData);
  });
}
