import { Container } from '@mui/material';
import React from 'react';
// import { useSelector } from 'react-redux';
import { Quiz } from './Quiz';
// import { Summary } from './Summary';

export const Animal = () => {
  /// const quizOver = useSelector((store) => store.quiz.quizOver);
  return (
    <Container>
      <Quiz />
    </Container>
  )
}

// {quizOver ? <Summary /> : ''}