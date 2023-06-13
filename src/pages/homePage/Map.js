/* eslint-disable max-len */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { quiz } from 'reducers/quiz';
import { BackgroundMap } from './BackgroundMap'

export const Map = () => {
  const dispatch = useDispatch();
  const animals = [
    { path: '/images/eagle.png', top: '30px', left: '80px', id: 'eagle' },
    { path: '/images/bear.png', top: '96px', left: '140px', id: 'bear' },
    { path: '/images/hedgehog.png', top: '80px', left: '410px', id: 'hedgehog' },
    { path: '/images/lion.png', top: '150px', left: '430px', id: 'lion' },
    { path: '/images/elephant.png', top: '220px', left: '450px', id: 'elephant' },
    { path: '/images/fox.png', top: '60px', left: '490px', id: 'fox' },
    { path: '/images/jaguar.png', top: '260px', left: '245px', id: 'jaguar' },
    { path: '/images/toucan.png', top: '200px', left: '225px', id: 'toucan' },
    { path: '/images/panda.png', top: '70px', left: '630px', id: 'panda' },
    { path: '/images/tiger.png', top: '130px', left: '550px', id: 'tiger' },
    { path: '/images/kangaroo.png', top: '225px', left: '670px', id: 'kangaroo' },
    { path: '/images/koala.png', top: '218px', left: '700px', id: 'koala' },
    { path: '/images/seal.png', top: '380px', left: '350px', id: 'seal' },
    { path: '/images/penguin.png', top: '355px', left: '500px', id: 'penguin' }]
  return (
    <Container sx={{ filter: 'drop-shadow(0 0 1rem #000)', borderRadius: '25%', bgcolor: '#108bdfeb', position: 'relative', height: 'max-content', p: 0, m: 0, overflow: 'scroll', boxSixing: 'border-box', maxWidth: '800px !important' }}>
      <BackgroundMap />
      {animals.map((animal) => {
        return (
          <Link key={animal.id} to={`animal/${animal.id}`} onClick={() => dispatch(quiz.actions.saveAnimalId(animal.id))}><AnimalImg top={animal.top} left={animal.left} src={animal.path} alt={animal.id} /></Link>
        )
      })}
    </Container>
  );
};

const AnimalImg = styled.img`
height: 80px;
position: absolute;
top:${(props) => props.top};
left:${(props) => props.left};
filter: drop-shadow(0px 3px 1px rgba(0, 0, 0, 0.632));
transition: filter 0.8s ease-in-out;
&:hover{
filter: drop-shadow(0px 0px 50px #333);
}
`