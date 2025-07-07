export default class Perks {
    constructor(
        name = '',
        bonus = {},
        malus = {},
        description = '',
        appliesTo = 'faction',
        id = (typeof crypto !== 'undefined' && crypto.randomUUID)
            ? crypto.randomUUID()
            : ''
    ) {
        this.id = id;
        this.name = name;
        this.bonus = bonus;
        this.malus = malus;
        this.description = description;
        this.appliesTo = appliesTo; // 'faction' or 'character'
    }
}
