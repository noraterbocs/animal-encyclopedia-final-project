/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Card, CardContent, ThemeProvider } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { createTheme } from '@mui/material/styles';
import { Summary } from './Summary';

export const Quiz = () => {
  const dispatch = useDispatch();
  const { currentQuestionIndex, questions, animalId, quizOver } = useSelector((store) => store.quiz);
  const question = questions[currentQuestionIndex];
  const totalSteps = questions.length;

  const handleOptionClick = (index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index, animalId }));
    dispatch(quiz.actions.goToNextQuestion());
  };

  const theme = createTheme({ Typography: { fontSize: 12 } })

  // const handleNext = () => {
  //   if (currentQuestionIndex < totalSteps - 1) {
  //     dispatch(quiz.actions.goToNextQuestion());
  //   } else {
  //     dispatch(quiz.actions.finishQuiz());
  //   }
  // };

  // const handleBack = () => {
  //   if (currentQuestionIndex > 0) {
  //     dispatch(quiz.actions.goToPreviousQuestion(currentQuestionIndex - 1));
  //     console.log(handleBack)
  //   }
  // };

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

  const animalImagePath = animalImg.find((animal) => animal.id === animalId).path
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
                  isCorrectAnswer={index === question.correctAnswerIndex}
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
                sx={{ maxWidth: 400 }}
              // nextButton={
              //   <IconButton size="small" onClick={handleNext} disabled={currentQuestionIndex === totalSteps - 1}>
              //     <ArrowForwardIcon fontSize="large" />
              //   </IconButton>
              // }
              // backButton={
              //   <IconButton size="small" onClick={handleBack} disabled={currentQuestionIndex === 0}>
              //     <ArrowBackIcon fontSize="large" />
              //   </IconButton>
              // }
              />
            </ThemeProvider>
          </CardContent>
        </Card>
      </Container>
    );
  }
}

//  <img src={singleOption.image} alt={singleOption.text} />