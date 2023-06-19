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
import { createTheme, styled } from '@mui/material/styles';
import { updateHistory } from 'reducers/user';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BackgroundImage } from 'components/BackgroundImage';
import { Summary } from './Summary';
import Jungle from '../../assets/background/jungle2.jpg';

const cardStyle = { width: '70vw',
  padding: '0 !important',
  textAlign: 'center',
  background: 'radial-gradient(circle, rgba(243,249,245,0.9) 0%, rgba(174,198,191,0.8) 100%)',
  borderRadius: 16,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  margin: 'auto',
  marginTop: 'auto',
  flexGrow: 1 };

const CustomMobileStepper = styled(MobileStepper)({
  '& .MuiMobileStepper-dots': {
    '& .MuiMobileStepper-dot': {
      width: 20,
      height: 20
    }
  }
});

export const Quiz = () => {
  const dispatch = useDispatch();
  const { currentQuestionIndex, questions, animalId, quizOver, currentScore } = useSelector((store) => store.quiz);
  const question = questions[currentQuestionIndex];
  const totalSteps = questions.length;

  const handleOptionClick = (index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index, animalId }));
    dispatch(quiz.actions.goToNextQuestion());
  };
  useEffect(() => {
    if (quizOver) {
      const history = {
        quizname: animalId, score: currentScore, timestamp: new Date()
      }
      dispatch(updateHistory(history))
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

  const isSmallScreen = useMediaQuery('(max-width: 900px)');

  if (!question) {
    return <h1>Oh no! Could not find that animal. Please return to the home page.</h1>;
  }

  if (quizOver) {
    return <Summary />;
  } else {
    return (
      <Container sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <BackgroundImage src={Jungle} />
        <Card variant="outlined" sx={cardStyle}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography sx={{ margin: '0.5em', color: '#04211F', fontFamily: 'Quicksand', fontWeight: 'bold', fontSize: isSmallScreen ? '2em' : '3em' }}>{question.questionText}</Typography>
            <img src={animalImagePath} alt={animalImagePath} style={{ height: isSmallScreen ? '10em' : '30%' }} />
            <Stack spacing={2} direction={isSmallScreen ? 'column' : 'row'}>
              {question.options.map((singleOption, index) => (
                <Button
                  key={singleOption.text}
                  type="button"
                  variant="contained"
                  color="primary"
                  size="large"
                  value={index}
                  index={index}
                  aria-label={`Answer option ${index + 1}: ${singleOption.text}`}
                  onClick={() => handleOptionClick(index)}
                  sx={{ flex: 1, backgroundColor: '#04211F', color: '#F3F9F5', fontFamily: '"Fredoka One", cursive', fontSize: '1em', padding: '12px 24px' }}>
                  {singleOption.text}
                </Button>
              ))}
            </Stack>

            <ThemeProvider theme={theme}>
              <CustomMobileStepper
                variant="dots"
                steps={totalSteps}
                position="static"
                activeStep={currentQuestionIndex}
                sx={{ backgroundColor: 'transparent', marginTop: 3 }}
              />
            </ThemeProvider>
          </CardContent>
        </Card>
      </Container>
    );
  }
};