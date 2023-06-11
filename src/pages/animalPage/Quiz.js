/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Card, CardContent, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { updateTotalScore } from 'reducers/user';
import { Summary } from './Summary';

export const Quiz = () => {
  const dispatch = useDispatch();
  const { currentQuestionIndex, questions, animalId, quizOver, answers } = useSelector((store) => store.quiz);
  const question = questions[currentQuestionIndex];
  const totalSteps = questions.length;

  const updateUserTotalScore = (currentScore) => {
    console.log('updateTotalScore')
    const correctAnswers = answers.filter((item) => item.isCorrect);
    const sum = correctAnswers.length + currentScore;
    dispatch(updateTotalScore(sum))
  };

  const handleOptionClick = (index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index, animalId }));
    dispatch(quiz.actions.goToNextQuestion());
    // console.log(quizOver)
    // if (index === questions.length - 1) updateUserTotalScore()
  };

  const currentScore = useSelector((store) => store.user.totalScore);
  useEffect(() => {
    if (quizOver) {
      updateUserTotalScore(currentScore)
    }
  });

  const theme = createTheme({ Typography: { fontSize: 50 } })

  const animalImg = [
    { path: '/images/eagle.png', id: 'eagle' },
    { path: '/images/bear.png', id: 'bear' },
    { path: '/images/hedgehog.png', id: 'hedgehog' },
    { path: '/images/lion.png', id: 'lion' },
    { path: '/images/elephant.png', id: 'elephant' },
    { path: '/images/fox.png', id: 'fox' },
    { path: '/images/jaguar.png', id: 'jaguar' },
    { path: '/images/toucan.png', id: 'toucan' },
    { path: '/images/panda.png', id: 'panda' },
    { path: '/images/tiger.png', id: 'tiger' },
    { path: '/images/kangaroo.png', id: 'kangaroo' },
    { path: '/images/koala.png', id: 'koala' },
    { path: '/images/seal.png', id: 'seal' },
    { path: '/images/penguin.png', id: 'penguin' }]

  const animalObject = animalImg.find((animal) => animal.id === animalId);
  const animalImagePath = animalObject ? animalObject.path : '';

  console.log(animalImagePath)
  console.log(animalId)

  if (!question) {
    return <h1>Oh no! Could not find that animal. Please return to the home page.</h1>;
  }

  if (quizOver) {
    return <Summary />;
  } else {
    return (
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card variant="outlined" sx={{ maxWidth: 700, textAlign: 'center', marginTop: 20 }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h3" sx={{ margin: 5 }}>{question.questionText}</Typography>
            <img src={animalImagePath} alt={animalImagePath} />

            <Stack spacing={2} direction="row">
              {question.options.map((singleOption, index) => (
                <Button
                  key={singleOption.text}
                  type="button"
                  variant="outlined"
                  color="primary"
                  size="large"
                  value={index}
                  index={index}
                  //                isCorrectAnswer={index === question.correctAnswerIndex}
                  aria-label={`Answer option ${index + 1}: ${singleOption.text}`}
                  onClick={() => handleOptionClick(index)}>
                  {singleOption.text}
                  <img src={singleOption.image} alt={singleOption.text} style={{ height: '20px' }} />
                </Button>
              ))}
            </Stack>

            <ThemeProvider theme={theme}>
              <MobileStepper
                variant="dots"
                steps={totalSteps}
                position="static"
                activeStep={currentQuestionIndex}
                sx={{ maxWidth: 400, fontSize: 12 }}
              />
            </ThemeProvider>
          </CardContent>
        </Card>
      </Container>
    );
  }
}