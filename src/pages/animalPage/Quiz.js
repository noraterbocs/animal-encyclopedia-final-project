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
import { Summary } from './Summary';

const AnswerButton = () => {
  const dispatch = useDispatch();
  const { currentQuestionIndex, questions, animalId } = useSelector((store) => store.quiz);
  const question = questions[currentQuestionIndex];

  const handleOptionClick = (index) => {
    console.log('index:', index, 'questionid:', question.id)
    // setSelectedOption(index);
    // setTimeout(() => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index, animalId }));
    // setSelectedOption(undefined);
    // dispatch(quiz.actions.goToNextQuestion());
    // }, 1000);
  };

  return (
    <ButtonGroup size="large" aria-label="large button group" color="secondary" variant="contained" spacing={2}>
      {question.options.map((singleOption, index) => (
        <Button
          key={singleOption}
          type="button"
          value={index}
          index={index}
          isCorrectAnswer={index === question.correctAnswerIndex}
          aria-label={`Answer option ${index + 1}: ${singleOption}`}
          onClick={() => handleOptionClick(index)}>
          {singleOption}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export const Quiz = () => {
  const dispatch = useDispatch();
  const { currentQuestionIndex, questions } = useSelector((store) => store.quiz);
  const question = questions[currentQuestionIndex];
  const quizOver = useSelector((store) => store.quiz.quizOver);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep < 5) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      dispatch(quiz.actions.goToNextQuestion());
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      dispatch(quiz.actions.goToPreviousQuestion());
    }
  };

  if (!question) {
    return <h1>Oh no! Could not find that animal please return to the home page</h1>
  }
  if (quizOver === true) {
    return <Summary />
  } else {
    return (
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card variant="outlined" sx={{ maxWidth: 500, textAlign: 'center', marginTop: 20 }}>
          <CardContent>
            <Typography variant="h3" sx={{ margin: 5 }}>{question.questionText}</Typography>
            <AnswerButton />
            <MobileStepper
              variant="dots"
              steps={6}
              position="static"
              activeStep={activeStep}
              sx={{ maxWidth: 400, flexGrow: 1 }}
              nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
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
    )
  }
};