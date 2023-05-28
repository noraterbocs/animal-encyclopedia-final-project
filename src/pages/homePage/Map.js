/* eslint-disable max-len */
import React from 'react';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { BackgroundMap } from './BackgroundMap'

export const Map = () => {
  const animals = [
    { path: '/images/eagle.png', top: '90px', left: '180px', id: 'eagle' },
    { path: '/images/bear.png', top: '140px', left: '220px', id: 'bear' },
    { path: '/images/hedgehog.png', top: '100px', left: '550px', id: 'hedgehog' },
    { path: '/images/lion.png', top: '200px', left: '520px', id: 'lion' },
    { path: '/images/elephant.png', top: '250px', left: '550px', id: 'elephant' },
    { path: '/images/fox.png', top: '90px', left: '620px', id: 'fox' },
    { path: '/images/jaguar.png', top: '250px', left: '300px', id: 'jaguar' },
    { path: '/images/toucan.png', top: '310px', left: '320px', id: 'toucan' },
    { path: '/images/panda.png', top: '120px', left: '770px', id: 'panda' },
    { path: '/images/tiger.png', top: '160px', left: '710px', id: 'tiger' },
    { path: '/images/kangaroo.png', top: '320px', left: '840px', id: 'kangaroo' },
    { path: '/images/koala.png', top: '300px', left: '860px', id: 'koala' }]
  return (
    <Container sx={{ position: 'relative', height: 'max-content', padding: '0px', overflow: 'scroll' }}>
      <BackgroundMap />
      {animals.map((animal) => {
        return (
          <Link key={animal.id} to={`animal/${animal.id}`}><img style={{ height: '80px', position: 'absolute', top: `${animal.top}`, left: `${animal.left}` }} src={animal.path} alt={animal.id} /></Link>
        )
      })}
    </Container>
  );
};