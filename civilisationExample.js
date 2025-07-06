import humans from './dataclasses/Humans.js';
import zelvans from './dataclasses/Zelvans.js';
import { describeCivilisation } from './logic/civilisationLogic.js';

console.log(describeCivilisation(humans));
console.log(describeCivilisation(zelvans));
