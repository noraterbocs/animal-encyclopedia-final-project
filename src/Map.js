import React from 'react';
import Lion from './assets/animals/lion.svg';
import Bear from './assets/animals/bear.svg';
import Toucan from './assets/animals/toucan.svg';
import Penguin from './assets/animals/penguin.svg';
import Jaguar from './assets/animals/jaguar.svg';
import Eagle from './assets/animals/eagle.svg';
import elephant from './assets/animals/elephant.svg';
import Kangaroo from './assets/animals/kangaroo.svg';
import Racoon from './assets/animals/racoon.svg';
import Fox from './assets/animals/fox.svg';
import Seal from './assets/animals/seal.svg';
import Tiger from './assets/animals/tiger.svg';
import Koala from './assets/animals/koala.svg';
import Panda from './assets/animals/panda.svg';
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
      <img style={{ height: '100px' }} src={Koala} alt="Koala" />
      <img style={{ height: '100px' }} src={Kangaroo} alt="Kangaroo" />
      <img style={{ height: '100px' }} src={Seal} alt="Seal" />
      <img style={{ height: '100px' }} src={elephant} alt="elephant" />
      <img style={{ height: '100px' }} src={Racoon} alt="Racoon" />
      <img style={{ height: '100px' }} src={Tiger} alt="Tiger" />
      <img style={{ height: '100px' }} src={Fox} alt="Fox" />
      <img style={{ height: '100px' }} src={Eagle} alt="Eagle" />
      <img style={{ height: '100px' }} src={Panda} alt="Panda" />
    </>
  );
};
