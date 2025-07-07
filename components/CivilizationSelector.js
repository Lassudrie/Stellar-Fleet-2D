import React, { useState, useEffect } from 'react';
import './CivilizationSelector.css';

/**
 * Simple carousel showing civilization cards.
 * @param {{image:string, name:string, description:string}[]} civilizations
 * @param {(civ:Object) => void} onSelect
 */
export default function CivilizationSelector({ civilizations = [], onSelect }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (onSelect && civilizations[index]) onSelect(civilizations[index]);
  }, [index, civilizations, onSelect]);

  const next = () => setIndex((index + 1) % civilizations.length);
  const prev = () =>
    setIndex((index - 1 + civilizations.length) % civilizations.length);

  const trackStyle = {
    transform: `translateX(-${index * 100}%)`,
    width: `${civilizations.length * 100}%`,
  };

  return React.createElement(
    'div',
    { className: 'civ-selector' },
    React.createElement(
      'div',
      { className: 'civ-track', style: trackStyle },
      civilizations.map((civ, idx) =>
        React.createElement(
          'div',
          { className: 'civ-card', key: idx },
          React.createElement('img', { src: civ.image, alt: civ.name }),
          React.createElement('h3', null, civ.name),
          React.createElement('p', null, civ.description),
          React.createElement(
            'button',
            { onClick: () => onSelect && onSelect(civ) },
            'Choisir cette civilisation'
          )
        )
      )
    ),
    React.createElement(
      'button',
      { className: 'civ-prev', onClick: prev, 'aria-label': 'Previous' },
      '‹'
    ),
    React.createElement(
      'button',
      { className: 'civ-next', onClick: next, 'aria-label': 'Next' },
      '›'
    )
  );
}
