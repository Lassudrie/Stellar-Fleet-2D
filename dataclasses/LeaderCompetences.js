import Competence from './Competence.js';

export const politicalAcumen = new Competence(
  'Political Acumen',
  'Ability to navigate power structures, influence policy, and maintain internal stability.',
  'Boosts internal loyalty, control over factions, and resistance to civil unrest.'
);

export const economicManagement = new Competence(
  'Economic Management',
  'Expertise in resource allocation, production chains, and economic planning.',
  'Improves resource output, trade efficiency, and infrastructure development.'
);

export const scientificExpertise = new Competence(
  'Scientific Expertise',
  'Knowledge of research processes, innovation, and technological advancement.',
  'Accelerates research speed, unlocks special projects, improves tech reliability.'
);

export const militaryCommand = new Competence(
  'Military Command',
  'Tactical and strategic skill in leading fleets and managing logistics.',
  'Enhances fleet effectiveness, initiative in battles, and operational readiness.'
);

export const diplomaticFinesse = new Competence(
  'Diplomatic Finesse',
  'Skill in negotiation, alliance-building, and managing foreign relations.',
  'Increases treaty success, reduces tensions, and opens diplomatic opportunities.'
);

export const intelligenceOperations = new Competence(
  'Intelligence Operations',
  'Mastery of espionage, counter-intelligence, and covert operations.',
  'Enables sabotage, information warfare, and resistance to enemy infiltration.'
);

export default [
  politicalAcumen,
  economicManagement,
  scientificExpertise,
  militaryCommand,
  diplomaticFinesse,
  intelligenceOperations
];
