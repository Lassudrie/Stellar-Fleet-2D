export default class Perks {
    constructor(name = '', bonus = {}, malus = {}, description = '', appliesTo = 'faction') {
        this.name = name;
        this.bonus = bonus;
        this.malus = malus;
        this.description = description;
        this.appliesTo = appliesTo; // 'faction' or 'character'
    }
}
