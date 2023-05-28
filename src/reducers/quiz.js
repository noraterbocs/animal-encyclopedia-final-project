/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
// import { loading } from './loading';

const questions = [
  { id: 1, questionText: 'What does this animal eat?', options: ['Meat', 'Plants', 'Fish', 'Everything'], correctAnswerIndex: 1 },
  { id: 2, questionText: 'Where does this animal live?', options: ['ocean', 'trees', 'desert', 'snow'], correctAnswerIndex: 0 },
  { id: 3, questionText: 'Does this animal have live babies or lay eggs?', options: ['eggs', 'live babies'], correctAnswerIndex: 1 },
  { id: 4, questionText: 'Does this animal like to live alone or in groups?', options: ['Alone', 'Groups'], correctAnswerIndex: 2 },
  { id: 5, questionText: 'How many hours per day does this animal sleep?', options: ['less than 5 hours', '5-10 hours', 'more than 10hours'], correctAnswerIndex: 0 },
  { id: 6, questionText: 'How does this animal get around?', options: ['walk', 'crawl or slither', 'fly', 'swim'], correctAnswerIndex: 3 }
]

const initialState = {
  questions,
  answers: [],
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
      let newAnswer = question.options[answerIndex];
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
        isCorrect: question.correctAnswerIndex === answerIndex
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