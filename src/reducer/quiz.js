import { createSlice } from '@reduxjs/toolkit';
// import { loading } from './loading';

const initialState = {
  answers: [],
  currentQuestionIndex: 0, // this should be somewhere in the json from the api request
  quizOver: null,
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