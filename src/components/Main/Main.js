import React from 'react';
import './Main.css';
import Animal from '../Animal/Animal.js';
import background from '../../background.png';
import { animals } from '../../data.js';

export default function Main() {
  return <main style={{ backgroundImage: `url(${background})` }}>
    {animals.map((animal) => { 
      return <Animal key={animal.name} {...animal}/>;
    })}
  </main>;
}
