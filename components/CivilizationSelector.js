import React, { useRef, useState, useEffect } from 'react';
import './CivilizationSelector.css';

/**
 * Horizontal swipeable selector for civilizations.
 * @param {{image:string, name:string, description:string}[]} civilizations
 * @param {(civ:Object) => void} onSelect
 */
export default function CivilizationSelector({ civilizations = [], onSelect }) {
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  useEffect(() => {
    const first = containerRef.current?.querySelector('.civ-card');
    if (first) {
      const style = getComputedStyle(first);
      const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      setCardWidth(first.getBoundingClientRect().width + margin);
    }
  }, [civilizations]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const getX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);
    const onDown = (e) => {
      isDown.current = true;
      startX.current = getX(e);
      scrollStart.current = container.scrollLeft;
    };
    const onMove = (e) => {
      if (!isDown.current) return;
      container.scrollLeft = scrollStart.current + (startX.current - getX(e));
      e.preventDefault();
    };
    const onUp = () => {
      if (!isDown.current) return;
      isDown.current = false;
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
    return () => {
      container.removeEventListener('mousedown', onDown);
      container.removeEventListener('touchstart', onDown);
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mouseleave', onUp);
      window.removeEventListener('touchend', onUp);
      window.removeEventListener('touchcancel', onUp);
    };
  }, [cardWidth]);

  return (
    <div className="civ-selector">
      <div className="civ-container" ref={containerRef}>
        {civilizations.map((civ, idx) => (
          <div className="civ-card" key={idx}>
            <img src={civ.image} alt={civ.name} />
            <h3>{civ.name}</h3>
            <p>{civ.description}</p>
            <button onClick={() => onSelect && onSelect(civ)}>
              Choisir cette civilisation
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
