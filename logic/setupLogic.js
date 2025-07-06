/**
 * Default civilizations displayed in the setup carousel.
 * @type {{name:string, description:string, image:string}[]}
 */
export const defaultCivilizations = [
  {
    name: 'Terran',
    description: 'Hardy settlers from Earth.',
    image: 'assets/main menu.png'
  },
  {
    name: 'Martian',
    description: 'Colonists forged on Mars.',
    image: 'assets/main menu.png'
  },
  {
    name: 'Alien',
    description: 'Mysterious visitors from afar.',
    image: 'assets/main menu.png'
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
  const hidden = document.createElement('input');
  hidden.type = 'hidden';
  hidden.id = 'civilization';
  root.appendChild(container);
  root.appendChild(hidden);

  civilizations.forEach((civ) => {
    const card = document.createElement('div');
    card.className = 'civ-card';
    card.dataset.value = civ.name;
    card.innerHTML = `
      <img src="${civ.image}" alt="${civ.name}">
      <h3>${civ.name}</h3>
      <p>${civ.description}</p>`;
    container.appendChild(card);
  });

  const cards = container.querySelectorAll('.civ-card');
  if (cards.length) {
    cards[0].classList.add('selected');
    hidden.value = cards[0].dataset.value;
  }

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      cards.forEach((c) => c.classList.remove('selected'));
      card.classList.add('selected');
      hidden.value = card.dataset.value;
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
  };

  container.addEventListener('scroll', () => requestAnimationFrame(updateActive));
  updateActive();

  return hidden;
}
