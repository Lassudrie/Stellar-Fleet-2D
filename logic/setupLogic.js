/**
 * Default civilizations displayed in the setup carousel.
 * @type {{name:string, description:string, image:string}[]}
 */
import humans from '../dataclasses/Humans.js';
import zelvans from '../dataclasses/Zelvans.js';

export const defaultCivilizations = [
  {
    name: humans.name,
    description: humans.background,
    image: humans.avatar
  },
  {
    name: zelvans.name,
    description: zelvans.background,
    image: zelvans.avatar
  }
];

/**
 * Initialise a swipeable civilization carousel into the given root element.
 *
 * @param {HTMLElement} root - container element to populate
 * @param {{name:string, description:string, image:string}[]} civilizations
 * @returns {HTMLInputElement} hidden input storing the selected value
 */
export function initCivilizationCarousel(root, civilizations = defaultCivilizations) {
  const container = document.createElement('div');
  container.className = 'civ-container';
  const dotsWrapper = document.createElement('div');
  dotsWrapper.className = 'civ-dots';
  const hidden = document.createElement('input');
  hidden.type = 'hidden';
  hidden.id = 'civilization';
  root.appendChild(container);
  root.appendChild(hidden);
  root.appendChild(dotsWrapper);

  civilizations.forEach((civ) => {
    const card = document.createElement('div');
    card.className = 'civ-card';
    card.dataset.value = civ.name;
    card.innerHTML = `
      <img src="${civ.image}" alt="${civ.name}">
      <h3>${civ.name}</h3>
      <p>${civ.description}</p>`;
    container.appendChild(card);
    const dot = document.createElement('span');
    dot.className = 'civ-dot';
    dotsWrapper.appendChild(dot);
  });

  const cards = container.querySelectorAll('.civ-card');
  const dots = dotsWrapper.querySelectorAll('.civ-dot');
  if (cards.length) {
    cards[0].classList.add('selected');
    hidden.value = cards[0].dataset.value;
    dots[0].classList.add('active');
  }

  const updateDots = (index) => {
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  };

  cards.forEach((card, idx) => {
    card.addEventListener('click', () => {
      cards.forEach((c) => c.classList.remove('selected'));
      card.classList.add('selected');
      hidden.value = card.dataset.value;
      updateDots(idx);
    });
  });

  const updateActive = () => {
    const center = container.scrollLeft + container.clientWidth / 2;
    let active = null;
    let min = Infinity;
    cards.forEach((card) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const diff = Math.abs(center - cardCenter);
      if (diff < min) {
        min = diff;
        active = card;
      }
    });
    cards.forEach((c) => c.classList.toggle('active', c === active));
    const index = Array.from(cards).indexOf(active);
    if (index >= 0) updateDots(index);
  };

  container.addEventListener('scroll', () => requestAnimationFrame(updateActive));
  updateActive();

  return hidden;
}
