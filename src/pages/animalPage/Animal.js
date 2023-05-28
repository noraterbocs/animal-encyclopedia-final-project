import { Container } from '@mui/material';
import React from 'react';
import { Chatbot } from './ChatBot';
import { Quiz } from './Quiz';
import { Summary } from './Summary';

export const Animal = () => {
  return (
    <Container>
      <Quiz />
      <Summary />
      <Chatbot />
    </Container>
  )
}