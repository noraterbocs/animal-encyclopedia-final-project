/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Card, CardContent } from '@mui/material';
// import { Image } from '@mui/icons-material';
import { Summary } from './Summary';

export const Quiz = () => {
  const dispatch = useDispatch();
  const { currentQuestionIndex, questions, animalId, quizOver } = useSelector((store) => store.quiz);
  const question = questions[currentQuestionIndex];
  const theme = useTheme();
  const totalSteps = questions.length;

  // useEffect(() => {
  //  dispatch(quiz.actions.restart());
  // }, [dispatch]);

  const handleOptionClick = (index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index, animalId }));
    dispatch(quiz.actions.goToNextQuestion());
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalSteps - 1) {
      dispatch(quiz.actions.goToNextQuestion());
    } else {
      dispatch(quiz.actions.finishQuiz());
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      dispatch(quiz.actions.goToPreviousQuestion());
      console.log(handleBack)
    }
  };

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
        <Card variant="outlined" sx={{ maxWidth: 500, textAlign: 'center', marginTop: 20 }}>
          <CardContent>
            <Typography variant="h3" sx={{ margin: 5 }}>{question.questionText}</Typography>
            <img src={animalImagePath} alt={animalImagePath} />
            <ButtonGroup size="large" aria-label="large button group" color="primary" variant="outlined" spacing={2} sx={{ maxWidth: '100%' }}>
              {question.options.map((singleOption, index) => (
                <Button
                  key={singleOption}
                  type="button"
                  value={index}
                  index={index}
                  isCorrectAnswer={index === question.correctAnswerIndex}
                  aria-label={`Answer option ${index + 1}: ${singleOption.text}`}
                  onClick={() => handleOptionClick(index)}>
                  <img src={singleOption.image} alt={singleOption.text} />
                  {singleOption.text}
                </Button>
              ))}
            </ButtonGroup>
            <MobileStepper
              variant="dots"
              steps={totalSteps}
              position="static"
              activeStep={currentQuestionIndex}
              sx={{ maxWidth: 400, flexGrow: 1 }}
              nextButton={
                <Button size="small" onClick={handleNext} disabled={currentQuestionIndex === totalSteps - 1}>
                Next
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack} disabled={currentQuestionIndex === 0}>
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                Back
                </Button>
              } />
          </CardContent>
        </Card>
      </Container>
    );
  }
}