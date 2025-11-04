import React, { useState } from 'react';
import Button from '@mui/material/Button';

import drage from '../images/drage.jpg';
import fekting from '../images/fekting.jpg';
import halvor1 from '../images/halvor1.jpg';
import halvor2 from '../images/halvor2.jpg';
import halvor3 from '../images/halvor3.jpg';
import halvor4 from '../images/halvor4.jpg';
import halvor5 from '../images/halvor5.jpg';
import halvor6 from '../images/halvor6.jpg';
import halvor7 from '../images/halvor7.jpg';
import halvor8 from '../images/halvor8.jpg';
import halvor9 from '../images/halvor9.jpg';
import halvor10 from '../images/halvor10.jpg';
import surf from '../images/surf.jpg';

const images = [
  drage,
  fekting,
  halvor1,
  halvor2,
  halvor3,
  halvor4,
  halvor5,
  halvor6,
  halvor7,
  halvor8,
  halvor9,
  halvor10,
  surf,
];

const RandomImageGame = () => {
  const [current, setCurrent] = useState(null);

  const showRandomImage = () => {
    if (images.length === 0) return;
    const idx = Math.floor(Math.random() * images.length);
    setCurrent(images[idx]);
  };

  return (
    <div className="App-body">
      <h1>Random Image Game</h1>
      <Button variant="contained" size="large" onClick={showRandomImage}>
        Show Random Image
      </Button>

      {current && (
        <div style={{ marginTop: 20, textAlign: 'center' }}>
          <img
            src={current}
            alt="random"
            style={{ maxWidth: '100%', height: 'auto', borderRadius: 8 }}
          />
        </div>
      )}
    </div>
  );
};

export default RandomImageGame;
