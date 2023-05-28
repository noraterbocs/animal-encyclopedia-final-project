/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
// import { loading } from './loading';

const questions = [
  { id: 1, questionText: 'What does this animal eat?', options: ['Meat', 'Plants', 'Fish', 'Everything'] },
  { id: 2, questionText: 'Where does this animal live?', options: ['ocean', 'trees', 'land', 'snow'] },
  { id: 3, questionText: 'Does this animal have live babies or lay eggs?', options: ['eggs', 'live babies'] },
  { id: 4, questionText: 'Does this animal like to live alone or in groups?', options: ['Alone', 'Groups'] },
  { id: 5, questionText: 'How many hours per day does this animal sleep?', options: ['less than 5 hours', '5-10 hours', 'more than 10hours'] },
  { id: 6, questionText: 'What is the best way for this animal to get around?', options: ['walking', 'hopping', 'flying', 'swimming'] }
]

const animalAnswers = [
  { id: 1, animal: 'Bear', correctAnswerIndex: [3, 2, 1, 0, 2, 0] },
  { id: 2, animal: 'Eagle', correctAnswerIndex: [0, 1, 0, 0, 0, 2] },
  { id: 3, animal: 'Elephant', correctAnswerIndex: [1, 2, 1, 1, 0, 0] },
  { id: 4, animal: 'Fox', correctAnswerIndex: [0, 1, 1, 0, 1, 0] },
  { id: 5, animal: 'Giraffe', correctAnswerIndex: [1, 2, 1, 1, 0, 0] },
  { id: 6, animal: 'Hedgehog', correctAnswerIndex: [1, 2, 1, 0, 2, 0] },
  { id: 7, animal: 'Jaguar', correctAnswerIndex: [0, 2, 1, 0, 2, 0] },
  { id: 8, animal: 'Kangaroo', correctAnswerIndex: [1, 2, 1, 1, 1, 1] },
  { id: 9, animal: 'Koala', correctAnswerIndex: [1, 1, 1, 0, 2, 0] },
  { id: 10, animal: 'Panda', correctAnswerIndex: [1, 2, 1, 0, 2, 0] },
  { id: 11, animal: 'Penguin', correctAnswerIndex: [2, 2, 0, 1, 0, 3] },
  { id: 12, animal: 'Racoon', correctAnswerIndex: [3, 1, 1, 0, 2, 0] },
  { id: 13, animal: 'Seal', correctAnswerIndex: [2, 0, 1, 0, 0, 3] },
  { id: 14, animal: 'Tiger', correctAnswerIndex: [0, 2, 1, 0, 2, 0] },
  { id: 15, animal: 'Toucan', correctAnswerIndex: [1, 1, 0, 1, 2, 2] }
]

const initialState = {
  questions,
  animalAnswers: [],
  currentQuestionIndex: 0, // this should be somewhere in the json from the api request
  quizOver: false,
  btnColor: '',
  disabledButtons: false, // after selecting an answer
  correctAnswerIndicator: false
}
export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {

    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload
      const question = state.questions.find((q) => q.id === questionId)

      const selectedQuestion = state.questions.find((q) => q.id === questionId);
      const selectedAnimalAnswer = state.animalAnswers.find((a) => a.animal === selectedQuestion.animal);

      let newAnswer = question.options[animalAnswers];
      state.correctAnswerIndicator = true
      state.disabledButtons = true

      if (newAnswer === undefined || newAnswer === null) {
        newAnswer = 'Nothing selected';
      }

      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.correctAnswerIndex) {
        state.btnColor = '#56ab2f'
      }
      if (question.correctAnswerIndex === answerIndex) {
        console.log('correct index', question.correctAnswerIndex, 'selectedIndex', answerIndex)
        state.btnColor = '#56ab2f'
      } else {
        console.log('correct index', question.correctAnswerIndex, 'wrongselectedIndex', answerIndex)
        state.btnColor = '#FF416C';
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: newAnswer,
        isCorrect: question.correctAnswerIndex === answerIndex,
        animalAnswers: selectedAnimalAnswer
      })
    },

    goToNextQuestion: (state) => {
      state.disabledButtons = false;
      state.btnColor = ''
      state.correctAnswerIndicator = false
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuestionIndex += 1
      }
    },

    startQuiz: (state) => {
      if (state.quizOver === null) {
        state.quizOver = false
        state.startTime = new Date().getTime()
      }
    },

    restart: () => {
      return initialState
    }

  }
})