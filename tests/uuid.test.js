import Civilisation from '../dataclasses/Civilisation.js';
import EmpireSetup from '../dataclasses/EmpireSetup.js';
import Competence from '../dataclasses/Competence.js';
import Perks from '../dataclasses/Perks.js';

// This test ensures that each dataclass instance receives a UUID by default

describe('dataclass UUIDs', () => {
  test('Civilisation has id', () => {
    const c = new Civilisation();
    expect(typeof c.id).toBe('string');
  });

  test('EmpireSetup has id', () => {
    const e = new EmpireSetup();
    expect(typeof e.id).toBe('string');
  });

  test('Competence has id', () => {
    const comp = new Competence();
    expect(typeof comp.id).toBe('string');
  });

  test('Perks has id', () => {
    const p = new Perks();
    expect(typeof p.id).toBe('string');
  });
});
