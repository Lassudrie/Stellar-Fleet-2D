export default class Civilisation {
    constructor(
        name = '',
        avatar = '',
        perks = [],
        background = '',
        typeOfGovernment = '',
        archEnemy = '',
        id = (typeof crypto !== 'undefined' && crypto.randomUUID)
            ? crypto.randomUUID()
            : ''
    ) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.perks = perks;
        this.background = background;
        this.typeOfGovernment = typeOfGovernment;
        this.archEnemy = archEnemy;
    }
}
