import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Box, Typography } from '@mui/material';
import waiting from '../../assets/animations/waiting.json';

export const WaitingAnimation = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <Player
        loop
        autoplay
        className="loading"
        src={waiting}
        speed={1}
        style={{
          height: '100px',
          width: '100px'
        }}
        background="transparent" />
      <Typography
        variant="body1"
        style={{
        }}>
      More games are coming soon...
      </Typography>
    </Box>
  );
}
