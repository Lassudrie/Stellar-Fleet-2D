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

  // swipe scrolling behaviour
  let cardWidth = 0;
  const first = cards[0];
  if (first) {
    const style = getComputedStyle(first);
    const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    cardWidth = first.getBoundingClientRect().width + margin;
  }
  let isDown = false;
  let startX = 0;
  let scrollStart = 0;
  const getX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);
  const onDown = (e) => {
    isDown = true;
    startX = getX(e);
    scrollStart = container.scrollLeft;
  };
  const onMove = (e) => {
    if (!isDown) return;
    container.scrollLeft = scrollStart + (startX - getX(e));
    e.preventDefault();
  };
  const onUp = () => {
    if (!isDown) return;
    isDown = false;
    if (cardWidth) {
      const index = Math.round(container.scrollLeft / cardWidth);
      container.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    }
  };
  container.addEventListener('mousedown', onDown);
  container.addEventListener('touchstart', onDown);
  container.addEventListener('mousemove', onMove);
  container.addEventListener('touchmove', onMove, { passive: false });
  window.addEventListener('mouseup', onUp);
  window.addEventListener('mouseleave', onUp);
  window.addEventListener('touchend', onUp);
  window.addEventListener('touchcancel', onUp);

  return hidden;
}
