import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Typography } from '@mui/material';
import tigerAnimation from '../assets/animations/tigerAnimation.json';

export const Loading = () => {
  return (
    <div>
      <div>
        <Typography
          variant="h1"
          style={{
            position: 'absolute',
            top: '20%',
            left: '0',
            right: '0',
            margin: 'auto',
            transform: 'translateY(-50%)',
            width: '80vw'
          }}>
      Welcome to Animal Quest!
        </Typography>
      </div>
      <div>
        <Player
          loop
          autoplay
          className="loading"
          src={tigerAnimation}
          speed={1}
          style={{
            position: 'absolute',
            zIndex: '10',
            height: '300px',
            width: '300px',
            top: '50%',
            left: '0',
            right: '0',
            margin: 'auto',
            transform: 'translateY(-50%)'
          }}
          background="transparent" />
      </div>
    </div>
  );
}
