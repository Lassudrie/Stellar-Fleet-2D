/**
 * Dataclass representing a person in the game universe.
 *
 * @property {string} id - UUID identifying the person
 * @property {string} lastName - family name
 * @property {string} firstName - given name
 * @property {string} gender - e.g. 'masculin', 'féminin', etc.
 * @property {string} birthDate - ISO date string representing birth
 * @property {number} age - integer age computed from birthDate if provided
 * @property {string} role - role or job title
 * @property {string[]} perks - list of special traits
 * @property {Object.<string, number>} skills - map of skill name to level (1-10)
 */
export default class Person {
  constructor(
    id = (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : '',
    lastName = '',
    firstName = '',
    gender = '',
    birthDate = '',
    role = '',
    perks = [],
    skills = {}
  ) {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
    this.gender = gender;
    this.birthDate = birthDate;
    this.role = role;
    this.perks = perks;
    this.skills = skills;

    if (birthDate) {
      const diffMs = Date.now() - new Date(birthDate).getTime();
      this.age = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));
    } else {
      this.age = 0;
    }
  }
}
