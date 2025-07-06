/**
 * Return a formatted description of the civilisation.
 * @param {Object} civilisation - civilisation dataclass
 * @returns {string} Summary of the civilisation
 */
export function describeCivilisation(civilisation) {
    const perkList = civilisation.perks.join(', ');
    return `${civilisation.name} (${civilisation.typeOfGovernment}) - Arch Enemy: ${civilisation.archEnemy}\n` +
        `${civilisation.background}\nPerks: ${perkList}`;
}

/**
 * Add a new perk to the civilisation if not already present.
 * @param {Object} civilisation - civilisation dataclass
 * @param {string} perk - perk to add
 */
export function addPerk(civilisation, perk) {
    if (perk && !civilisation.perks.includes(perk)) {
        civilisation.perks.push(perk);
    }
}
