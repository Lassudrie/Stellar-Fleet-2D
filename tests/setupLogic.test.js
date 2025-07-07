import { JSDOM } from 'jsdom';
import { initCivilizationCarousel } from '../logic/setupLogic.js';

/**
 * Helper to create a DOM with jsdom and expose globals.
 */
function createDom() {
  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
  global.document = dom.window.document;
  global.window = dom.window;
  return dom;
}

describe('initCivilizationCarousel', () => {
  beforeEach(() => {
    createDom();
  });

  test('creates cards and hidden input', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);

    const hidden = initCivilizationCarousel(root, [
      { name: 'A', description: 'A desc', image: 'a.png' },
      { name: 'B', description: 'B desc', image: 'b.png' },
    ]);

    const cards = root.querySelectorAll('.civ-card');
    expect(cards.length).toBe(2);
    expect(hidden.id).toBe('civilization');
    expect(hidden.value).toBe('A');
    expect(cards[0].classList.contains('selected')).toBe(true);

    const dots = root.querySelectorAll('.civ-dot');
    expect(dots.length).toBe(2);
    expect(dots[0].classList.contains('active')).toBe(true);
  });

  test('clicking card updates selection', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);

    const hidden = initCivilizationCarousel(root, [
      { name: 'A', description: 'A desc', image: 'a.png' },
      { name: 'B', description: 'B desc', image: 'b.png' },
    ]);

    const cards = root.querySelectorAll('.civ-card');
    const dots = root.querySelectorAll('.civ-dot');
    cards[1].dispatchEvent(new window.Event('click'));
    expect(hidden.value).toBe('B');
    expect(cards[1].classList.contains('selected')).toBe(true);
    expect(dots[1].classList.contains('active')).toBe(true);
  });
});
