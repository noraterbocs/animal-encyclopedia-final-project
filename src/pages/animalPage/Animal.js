import { Container } from '@mui/material';
import React from 'react';
import { ChatBot } from './ChatBot';
import { Quiz } from './Quiz';

export const Animal = () => {
  return (
    <Container>
      <h1>Animal</h1>
      <Quiz />
      <ChatBot />
    </Container>
  )
}