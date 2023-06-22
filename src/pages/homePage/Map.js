/* eslint-disable max-len */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, useMediaQuery } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { quiz } from 'reducers/quiz';
import { BackgroundMap } from './BackgroundMap'

const defaultTheme = createTheme();
const { breakpoints } = defaultTheme;
export const animals = [
  { path: '/images/eagle.png', bottom: '75%', left: '20%', transform: 'translate(-75%, 20%)', id: 'eagle' },
  { path: '/images/bear.png', bottom: '65%', left: '25%', transform: 'translate(-65%, 25%)', id: 'bear' },
  { path: '/images/hedgehog.png', bottom: '80%', left: '50%', transform: 'translate(-50%, 80%)', id: 'hedgehog' },
  { path: '/images/lion.png', bottom: '60%', left: '50%', transform: 'translate(-50%, 60%)', id: 'lion' },
  { path: '/images/elephant.png', bottom: '50%', left: '57%', transform: 'translate(-50%, 57%)', id: 'elephant' },
  { path: '/images/fox.png', bottom: '85%', left: '65%', transform: 'translate(-65%, 85%)', id: 'fox' },
  { path: '/images/jaguar.png', bottom: '50%', left: '30%', transform: 'translate(-30%, 50%)', id: 'jaguar' },
  { path: '/images/toucan.png', bottom: '40%', left: '35%', transform: 'translate(-35%, 40%)', id: 'toucan' },
  { path: '/images/panda.png', bottom: '85%', left: '80%', transform: 'translate(-80%, 85%)', id: 'panda' },
  { path: '/images/tiger.png', bottom: '70%', left: '72%', transform: 'translate(-72%, 70%)', id: 'tiger' },
  { path: '/images/kangaroo.png', bottom: '35%', left: '97%', transform: 'translate(-97%, 35%)', id: 'kangaroo' },
  { path: '/images/koala.png', bottom: '37%', left: '85%', transform: 'translate(-85%, 37%)', id: 'koala' },
  { path: '/images/seal.png', bottom: '2%', left: '60%', transform: 'translate(-40%, 2%)', id: 'seal' },
  { path: '/images/penguin.png', bottom: '2%', left: '50%', transform: 'translate(-50%, 2%)', id: 'penguin' },
  { path: '/images/giraffe.png', bottom: '65%', left: '60%', transform: 'translate(-60%, 65%)', id: 'giraffe' },
  { path: '/images/racoon.png', bottom: '90%', left: '8%', transform: 'translate(-8%, 90%)', id: 'racoon' }]

export const Map = () => {
  const dispatch = useDispatch();
  const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Container sx={{ borderRadius: '25%', filter: 'drop-shadow(0 0 1rem #000)', bgcolor: '#108bdfeb', position: 'relative', height: 'max-content', p: '0px !important', m: '0px !important', overflow: 'scroll', boxSixing: 'border-box', width: '100%' }}>
      <BackgroundMap />
      {animals.map((animal) => {
        return (
          <Link key={animal.id} to={`animal/${animal.id}`} onClick={() => dispatch(quiz.actions.saveAnimalId(animal.id))}>
            <AnimalImg
              xs={isMobileView ? '50px' : '80px'}
              sm={isMobileView ? '70px' : '80px'}
              md={isMobileView ? '90px' : '100px'}
              lg={isMobileView ? '100px' : '120px'}
              xl={isMobileView ? '120px' : '150px'}
              top={animal.top}
              bottom={animal.bottom}
              left={animal.left}
              transform={animal.transform}
              src={animal.path}
              alt={animal.id} />
          </Link>
        )
      })}
    </Container>
  );
};

const AnimalImg = styled.img`
height: ${(props) => props.xs};
@media (min-width: ${breakpoints.values.sm}px) {
    height: ${(props) => props.sm};
  }
  
  @media (min-width: ${breakpoints.values.md}px) {
    height: ${(props) => props.md};
  }
  
  @media (min-width: ${breakpoints.values.lg}px) {
    height: ${(props) => props.lg};
  }
  
  @media (min-width: ${breakpoints.values.xl}px) {
    height: ${(props) => props.xl};
  }
position: absolute;
top:${(props) => props.top};
bottom:${(props) => props.bottom};
left:${(props) => props.left};
transform:${(props) => props.transform};
filter: drop-shadow(0px 3px 1px rgba(0, 0, 0, 0.632));
transition: filter 0.8s ease-in-out;
&:hover{
filter: drop-shadow(0px 0px 50px #333);
}
`