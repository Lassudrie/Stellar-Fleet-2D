/**
 * Default civilizations displayed in the setup carousel.
 * @type {{name:string, description:string, image:string}[]}
 */
import humans from '../dataclasses/Humans.js';
import zelvans from '../dataclasses/Zelvans.js';
import synthari from '../dataclasses/Synthari.js';
import orrak from '../dataclasses/Orrak.js';

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
  },
  {
    name: synthari.name,
    description: synthari.background,
    image: synthari.avatar
  },
  {
    name: orrak.name,
    description: orrak.background,
    image: orrak.avatar
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
  const nextArrow = document.createElement('button');
  nextArrow.className = 'civ-arrow';
  nextArrow.innerHTML = '&#9654;';
  nextArrow.setAttribute('aria-label', 'Next civilization');
  const hidden = document.createElement('input');
  hidden.type = 'hidden';
  hidden.id = 'civilization';
  root.appendChild(container);
  root.appendChild(hidden);
  root.appendChild(dotsWrapper);
  root.appendChild(nextArrow);

  civilizations.forEach((civ) => {
    const card = document.createElement('div');
    card.className = 'civ-card';
    card.dataset.value = civ.name;
    card.innerHTML = `
      <img src="${civ.image}" alt="${civ.name}">
      <h3>${civ.name}</h3>`;
    container.appendChild(card);
    const dot = document.createElement('span');
    dot.className = 'civ-dot';
    dotsWrapper.appendChild(dot);
  });

  const cards = container.querySelectorAll('.civ-card');
  const dots = dotsWrapper.querySelectorAll('.civ-dot');
  let currentIndex = 0;

  const updateDots = (index) => {
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  };

  const setActiveCard = (index) => {
    currentIndex = index;
    cards.forEach((c, i) => {
      c.classList.toggle('selected', i === index);
      c.classList.toggle('active', i === index);
    });
    hidden.value = cards[index].dataset.value;
    updateDots(index);
    const card = cards[index];
    const target = card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2;
    if (typeof container.scrollTo === 'function') {
      container.scrollTo({ left: target, behavior: 'smooth' });
    } else {
      container.scrollLeft = target;
    }
  };

  if (cards.length) {
    setActiveCard(0);
  }

  cards.forEach((card, idx) => {
    card.addEventListener('click', () => setActiveCard(idx));
  });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => setActiveCard(idx));
  });

  nextArrow.addEventListener('click', () => {
    const next = (currentIndex + 1) % cards.length;
    setActiveCard(next);
  });

  const updateActive = () => {
    const center = container.scrollLeft + container.clientWidth / 2;
    let activeIndex = 0;
    let min = Infinity;
    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const diff = Math.abs(center - cardCenter);
      if (diff < min) {
        min = diff;
        activeIndex = i;
      }
    });
    setActiveCard(activeIndex);
  };

  container.addEventListener('scroll', () => requestAnimationFrame(updateActive));
  updateActive();

  return hidden;
}
