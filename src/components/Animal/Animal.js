import React from 'react';
import './Animal.css';

export default function Animal(animal) {
  return <div className="animal" style={{ top: animal.top, left: animal.left }}>
    <img alt={animal.name} src={`${process.env.PUBLIC_URL}/animals/${animal.type}.svg`} />
    <span className="name">{animal.name}</span>
    <span>{animal.name}</span>
  </div>;
}
