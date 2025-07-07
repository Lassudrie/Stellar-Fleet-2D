import Perks from '../dataclasses/Perks.js';

describe('Perks dataclass', () => {
  test('initializes with provided values', () => {
    const bonus = { attack: 5 };
    const malus = { speed: -2 };
    const p = new Perks('Warrior Spirit', bonus, malus, 'Boosts attack', 'character');
    expect(p.name).toBe('Warrior Spirit');
    expect(p.bonus).toBe(bonus);
    expect(p.malus).toBe(malus);
    expect(p.description).toBe('Boosts attack');
    expect(p.appliesTo).toBe('character');
  });

  test('uses defaults when no args given', () => {
    const p = new Perks();
    expect(p.name).toBe('');
    expect(p.bonus).toEqual({});
    expect(p.malus).toEqual({});
    expect(p.description).toBe('');
    expect(p.appliesTo).toBe('faction');
  });
});
