export default class Civilisation {
    constructor(name, avatar, perks = [], background = '', typeOfGovernment = '', archEnemy = '') {
        this.name = name;
        this.avatar = avatar;
        this.perks = perks;
        this.background = background;
        this.typeOfGovernment = typeOfGovernment;
        this.archEnemy = archEnemy;
    }

    /**
     * Returns a formatted description of the civilisation.
     * @returns {string} Summary of the civilisation
     */
    describe() {
        const perkList = this.perks.join(', ');
        return `${this.name} (${this.typeOfGovernment}) - Arch Enemy: ${this.archEnemy}\n` +
            `${this.background}\nPerks: ${perkList}`;
    }

    /**
     * Adds a new perk to this civilisation.
     * @param {string} perk - perk to add
     */
    addPerk(perk) {
        if (perk && !this.perks.includes(perk)) {
            this.perks.push(perk);
        }
    }
}

// Example usage
const exampleCivilisation = new Civilisation(
    'Neo Terrans',
    'assets/avatars/neo_terran.png',
    ['Advanced AI', 'Efficient Mining'],
    'Descendants of Earth settlers who embraced cybernetic augmentation.',
    'Technocracy',
    'The Void Raiders'
);

console.log(exampleCivilisation.describe());
