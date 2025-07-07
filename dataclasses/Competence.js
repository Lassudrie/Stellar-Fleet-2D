export default class Competence {
  constructor(
    name = '',
    description = '',
    effect = '',
    id = (typeof crypto !== 'undefined' && crypto.randomUUID)
      ? crypto.randomUUID()
      : ''
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.effect = effect;
  }
}
