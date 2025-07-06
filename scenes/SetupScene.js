import EmpireSetup from '../dataclasses/EmpireSetup.js';
import { initCivilizationCarousel } from '../logic/setupLogic.js';

export default class SetupScene extends Phaser.Scene {
    constructor() {
        super('SetupScene');
    }

    preload() {
        this.load.image('menuBg', 'assets/main menu.png');
    }

    create() {
        const { width, height } = this.scale;

        this.bg = this.add.image(0, 0, 'menuBg').setOrigin(0).setDisplaySize(width, height);

        this.setupData = new EmpireSetup();

        const formHtml = `
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
            </div>`;

        this.form = this.add.dom(width / 2, height / 2).createFromHTML(formHtml);

        const civContainer = this.form.getChildByID('civSelector');
        initCivilizationCarousel(civContainer);

        const startBtn = this.form.getChildByID('startBtn');
        startBtn.addEventListener('click', () => {
            this.setupData.empireName = this.form.getChildByID('empireName').value;
            this.setupData.civilization = this.form.getChildByID('civilization').value;
            this.setupData.leaderName = this.form.getChildByID('leaderName').value;
            this.setupData.leader = this.form.getChildByID('leader').value;
            localStorage.setItem('lastGame', JSON.stringify(this.setupData));
            this.scene.start('MainScene', { setupData: this.setupData });
        });

        this.scale.on('resize', this.resizeUI, this);
    }

    resizeUI(gameSize) {
        const { width, height } = gameSize;
        if (this.bg) {
            this.bg.setDisplaySize(width, height);
        }
        if (this.form) {
            this.form.setPosition(width / 2, height / 2);
        }
    }

    shutdown() {
        this.scale.off('resize', this.resizeUI, this);
    }
}
