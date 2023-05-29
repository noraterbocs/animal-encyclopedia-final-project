/* eslint-disable max-len */
import React, { useSelector, useDispatch } from 'react-redux';
// import React, { useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';
import styled from 'styled-components';
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
    dispatch(quiz.actions.goToNextQuestion());
    // }, 1000);
  };

  return (
    <BtnsWrapper>
      {question.options.map((singleOption, index) => (
        <Btn
          key={singleOption}
          type="button"
          value={index}
          index={index}
          isCorrectAnswer={index === question.correctAnswerIndex}
          aria-label={`Answer option ${index + 1}: ${singleOption}`}
          onClick={() => handleOptionClick(index)}>
          {singleOption}
        </Btn>
      ))}
    </BtnsWrapper>
  );
};

export const Quiz = () => {
  const question = useSelector((store) => store.quiz.questions[store.quiz.currentQuestionIndex]);
  const quizOver = useSelector((store) => store.quiz.quizOver);

  if (!question) {
    return <h1>Oh no! Could not find that animal please return to the home page</h1>
  }
  if (quizOver === true) {
    return <Summary />
  } else {
    return (
      <QuizWrapper>
        <QuestionH1>{question.questionText}</QuestionH1>
        <AnswerButton />
      </QuizWrapper>
    )
  }
}

const QuizWrapper = styled.section``;

const Btn = styled.button`
  border-style: double;
  border-color: black;
  padding: 25px 10px;
  color: blue;
  border-radius: 10px;
  margin-top: 6px;
  font-size: 16px;
  font-weight: 600;
  border: solid 2px black;
  width: 133px;
  background-color: #3d85c6;

  &:hover {
    transform: scale(1.2);
  }
`;

const BtnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  gap:40px;
`;
const QuestionH1 = styled.h1`
color:#3d85c6;
width: 65%;
`