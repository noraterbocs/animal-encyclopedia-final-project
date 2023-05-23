import React from 'react';
import Lion from './assets/animals/lion.svg';
import Bear from './assets/animals/bear.svg';
import Toucan from './assets/animals/toucan.svg';
import Penguin from './assets/animals/penguin.svg';
import Jaguar from './assets/animals/jaguar.svg';
import { BackgroundMap } from './BackgroundMap'

export const Map = () => {
  return (
    <>
      <BackgroundMap />
      <img style={{ height: '100px' }} src={Lion} alt="Lion" />
      <img style={{ height: '100px' }} src={Bear} alt="Bear" />
      <img style={{ height: '100px' }} src={Penguin} alt="Penguin" />
      <img style={{ height: '100px' }} src={Jaguar} alt="Jaguar" />
      <img style={{ height: '100px' }} src={Toucan} alt="Toucan" />
    </>
  );
};
