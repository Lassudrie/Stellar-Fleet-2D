export function showMainScene(container, data = {}) {
  const title = data.setupData?.empireName
    ? `Empire: ${data.setupData.empireName}`
    : 'Game Scene';

  const info = document.createElement('h2');
  info.className = 'info-text';
  info.textContent = title;
  container.appendChild(info);

  const img = document.createElement('img');
  img.src = 'assets/main menu.png';
  img.alt = 'logo';
  img.className = 'logo-image';
  container.appendChild(img);
}
