import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { quiz } from 'reducers/quiz';
import { Container, Typography } from '@mui/material';
import { animals } from './Map';

export const MobileView = () => {
  const dispatch = useDispatch();

  return (
    <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', height: '100%', gap: '1rem', margin: '2rem' }}>
      <Typography variant="h4" sx={{ color: '#04211F', textAlign: 'center' }}>Select an animal and collect points!</Typography>
      {animals.map((animal) => {
        return (
          <ImageListItem
            key={animal.id}
            sx={{
              width: '160px',
              background: 'radial-gradient(circle, rgba(243,249,245,1) 0%, rgba(174,198,191,1) 100%)',
              borderRadius: '15px',
              padding: '5px',
              boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px'
            }}>
            <Link
              to={`animal/${animal.id}`}
              onClick={() => dispatch(quiz.actions.saveAnimalId(animal.id))}
              style={{ textDecoration: 'none',
                margin: '0',
                color: '#04211F',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column' }}>
              <img
                src={animal.path}
                alt={animal.id}
                style={{ width: '100px', height: '120px' }} />
              <Typography variant="h5" sx={{ textAlign: 'center', margin: '5px' }}>{animal.id}</Typography>
            </Link>
          </ImageListItem>
        )
      })}
    </Container>
  );
};
