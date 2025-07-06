import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

describe('index.html UI', () => {
  let document;

  beforeAll(() => {
    const html = fs.readFileSync(path.resolve('index.html'), 'utf8');
    const dom = new JSDOM(html);
    document = dom.window.document;
  });

  test('contains main menu buttons', () => {
    const newGame = document.getElementById('newGameBtn');
    const loadGame = document.getElementById('loadGameBtn');
    const codex = document.getElementById('codexBtn');
    const credits = document.getElementById('creditsBtn');
    expect(newGame).not.toBeNull();
    expect(loadGame).not.toBeNull();
    expect(codex).not.toBeNull();
    expect(credits).not.toBeNull();
  });
});
