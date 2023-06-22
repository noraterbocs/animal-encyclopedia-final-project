import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Animation } from 'components/Animation';

export const NotFound = () => {
  return (
    <Container>
      <Link to="/"><HomeIcon fontSize="large" /></Link>
      <Animation top="50%" size="300px" src="https://assets9.lottiefiles.com/packages/lf20_2yGF95txco.json" />
    </Container>
  )
}