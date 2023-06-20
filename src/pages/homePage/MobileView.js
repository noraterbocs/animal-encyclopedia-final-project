import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from '@mui/system';
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { quiz } from 'reducers/quiz';

const StyledImageList = styled(ImageList)`
  width: 80vw;
  height: 90%;
  align-items: center;
`;

const StyledImageListItem = styled(ImageListItem)`
  width: 70%;
  height: auto;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  border: solid black 1px;
  margin: 5px
`;
const CenteredContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const AnimalName = styled('h5')`
margin: 5px;
text-align: center;
`

export const MobileView = () => {
  // const dispatch = useDispatch();
  const itemData = [
    {
      img: '/images/eagle.png',
      title: 'Eagle',
      id: 'eagle'
    },
    {
      img: '/images/bear.png',
      title: 'Bear',
      id: 'bear'
    },
    {
      img: '/images/hedgehog.png',
      title: 'Hedgehog',
      id: 'hedgehog'
    },
    {
      img: '/images/lion.png',
      title: 'Lion',
      id: 'lion'
    },
    {
      img: '/images/elephant.png',
      title: 'Elephant',
      id: 'elephant'
    },
    {
      img: '/images/fox.png',
      title: 'Fox',
      id: 'fox'
    },
    {
      img: '/images/jaguar.png',
      title: 'Jaguar',
      id: 'jaguar'
    },
    {
      img: '/images/toucan.png',
      title: 'Toucan',
      id: 'toucan'
    },
    {
      img: '/images/panda.png',
      title: 'Panda',
      id: 'panda'
    },
    {
      img: '/images/tiger.png',
      title: 'Tiger',
      id: 'tiger'
    },
    {
      img: '/images/kangaroo.png',
      title: 'Kangaroo',
      id: 'kangaroo'
    },
    {
      img: '/images/koala.png',
      title: 'Koala',
      id: 'koala'
    },
    {
      img: '/images/seal.png',
      title: 'Seal',
      id: 'seal'
    },
    {
      img: '/images/penguin.png',
      title: 'Penguin',
      id: 'penguin'
    },
    {
      img: '/images/racoon.png',
      title: 'Racoon',
      id: 'racoon'
    },
    {
      img: '/images/giraffe.png',
      title: 'Giraffe',
      id: 'giraffe'
    }
  ];
  return (
    <CenteredContainer>
      <StyledImageList cols={2} rowHeight="auto">
        {itemData.map((item) => (
          <StyledImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy" />
            <AnimalName>{item.title}</AnimalName>
          </StyledImageListItem>
        ))}
      </StyledImageList>
    </CenteredContainer>
  );
};

// eslint-disable-next-line max-len
//  <Link to={`animal/${animal.id}`} onClick={() => dispatch(quiz.actions.saveAnimalId(animal.id))} />