import { politicalAcumen, economicManagement, scientificExpertise, militaryCommand, diplomaticFinesse, intelligenceOperations } from '../dataclasses/LeaderCompetences.js';

describe('Leader competences', () => {
  test('politicalAcumen has expected properties', () => {
    expect(politicalAcumen.name).toBe('Political Acumen');
    expect(politicalAcumen.description.length).toBeGreaterThan(0);
    expect(politicalAcumen.effect.length).toBeGreaterThan(0);
  });

  test('all competences are exported', () => {
    const competences = [politicalAcumen, economicManagement, scientificExpertise, militaryCommand, diplomaticFinesse, intelligenceOperations];
    expect(competences.every(c => c instanceof Object)).toBe(true);
  });
});
