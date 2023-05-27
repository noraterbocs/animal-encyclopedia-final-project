import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@mui/material';
import { Player } from '@lottiefiles/react-lottie-player';
import HomeIcon from '@mui/icons-material/Home';
import notFoundAnimation from '../assets/animations/notFoundAnimation.json';

export const NotFound = () => {
  return (
    <Container>
      <Link to="/"><HomeIcon fontSize="large" /></Link>
      <Player
        loop
        autoplay
        className="loading"
        src={notFoundAnimation}
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
    </Container>
  )
}