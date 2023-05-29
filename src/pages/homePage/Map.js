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
    { path: '/images/eagle.png', top: '90px', left: '180px', id: 'eagle' },
    { path: '/images/bear.png', top: '140px', left: '220px', id: 'bear' },
    { path: '/images/hedgehog.png', top: '130px', left: '610px', id: 'hedgehog' },
    { path: '/images/lion.png', top: '240px', left: '620px', id: 'lion' },
    { path: '/images/elephant.png', top: '290px', left: '650px', id: 'elephant' },
    { path: '/images/fox.png', top: '130px', left: '690px', id: 'fox' },
    { path: '/images/jaguar.png', top: '400px', left: '380px', id: 'jaguar' },
    { path: '/images/toucan.png', top: '310px', left: '350px', id: 'toucan' },
    { path: '/images/panda.png', top: '120px', left: '930px', id: 'panda' },
    { path: '/images/tiger.png', top: '200px', left: '830px', id: 'tiger' },
    { path: '/images/kangaroo.png', top: '410px', left: '1080px', id: 'kangaroo' },
    { path: '/images/koala.png', top: '388px', left: '1000px', id: 'koala' },
    { path: '/images/seal.png', top: '555px', left: '850px', id: 'seal' },
    { path: '/images/penguin.png', top: '555px', left: '500px', id: 'penguin' }]
  return (
    <Container sx={{ position: 'relative', height: 'max-content', p: 0, m: 0, overflow: 'scroll', boxSixing: 'border-box' }}>
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
left:${(props) => props.left} 

`