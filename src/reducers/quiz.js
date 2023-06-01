/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

// /images/quizimgs/meat.jpg
/* const questions = [
  { id: 0,
    questionText: 'What does this animal eat?',
    options: [{ text: 'Carnivore:Meat', image: '' }, { text: 'Herbivore:Plants', image: '' }, { text: 'Omnivore:Everything', image: '' }] },
  { id: 1,
    questionText: 'Where does this animal live?',
    options: [{ text: 'ocean', image: '' }, { text: 'trees', image: '' }, { text: 'land', image: '' }, { text: 'snow', image: '' }] },
  { id: 2,
    questionText: 'Does this animal have live babies or lay eggs?',
    options: [{ text: 'eggs', image: '' }, { text: 'live babies', image: '' }] },
  { id: 3,
    questionText: 'Does this animal like to live alone or in groups?',
    options: [{ text: 'Alone', image: '' }, { text: 'Groups', image: '' }] },
  { id: 4,
    questionText: 'How many hours per day does this animal sleep?',
    options: [{ text: 'less than 5 hours', image: '' }, { text: '5-10 hours', image: '' }, { text: 'more than 10hours', image: '' }] },
  { id: 5,
    questionText: 'What is the best way for this animal to get around?',
    options: [{ text: 'walking', image: '' }, { text: 'hopping', image: '' }, { text: 'flying', image: '' }, { text: 'swimming', image: '' }] }
] */

const questions = [
  { id: 0,
    questionText: 'What does this animal eat?',
    options: ['Carnivore 🥩', 'Herbivore🍓🥦', 'Omnivore🥩🍓🥦'] },
  { id: 1,
    questionText: 'Where does this animal live?',
    options: ['ocean🌊', 'trees🌲', 'land🌄', 'snow☃️'] },
  { id: 2,
    questionText: 'Does this animal have live babies or lay eggs?',
    options: ['eggs🥚', 'live babies👶'] },
  { id: 3,
    questionText: 'Does this animal like to live alone or in groups?',
    options: ['Alone', 'Groups'] },
  { id: 4,
    questionText: 'How many hours per day does this animal sleep?',
    options: ['less than 5 hours', '5-10 hours', 'more than 10 hours'] },
  { id: 5,
    questionText: 'What is the best way for this animal to get around?',
    options: ['walking', 'hopping', 'flying', 'swimming'] }
]

const animalAnswers = [
  { id: 'bear', correctAnswerIndex: [3, 2, 1, 0, 2, 0], answerIndex: [] },
  { id: 'eagle', correctAnswerIndex: [0, 1, 0, 0, 0, 2], answerIndex: [] },
  { id: 'elephant', correctAnswerIndex: [1, 2, 1, 1, 0, 0], answerIndex: [] },
  { id: 'fox', correctAnswerIndex: [0, 1, 1, 0, 1, 0], answerIndex: [] },
  { id: 'giraffe', correctAnswerIndex: [1, 2, 1, 1, 0, 0], answerIndex: [] },
  { id: 'hedgehog', correctAnswerIndex: [1, 2, 1, 0, 2, 0], answerIndex: [] },
  { id: 'jaguar', correctAnswerIndex: [0, 2, 1, 0, 2, 0], answerIndex: [] },
  { id: 'kangaroo', correctAnswerIndex: [1, 2, 1, 1, 1, 1], answerIndex: [] },
  { id: 'koala', correctAnswerIndex: [1, 1, 1, 0, 2, 0], answerIndex: [] },
  { id: 'panda', correctAnswerIndex: [1, 2, 1, 0, 2, 0], answerIndex: [] },
  { id: 'penguin', correctAnswerIndex: [0, 2, 0, 1, 0, 3], answerIndex: [] },
  { id: 'racoon', correctAnswerIndex: [3, 1, 1, 0, 2, 0], answerIndex: [] },
  { id: 'seal', correctAnswerIndex: [0, 0, 1, 0, 0, 3], answerIndex: [] },
  { id: 'tiger', correctAnswerIndex: [0, 2, 1, 0, 2, 0], answerIndex: [] },
  { id: 'toucan', correctAnswerIndex: [1, 1, 0, 1, 2, 2], answerIndex: [] }
]

const initialState = {
  questions,
  animalAnswers,
  answers: [],
  currentQuestionIndex: 0, // this should be somewhere in the json from the api request
  quizOver: false,
  btnColor: '',
  disabledButtons: false, // after selecting an answer
  correctAnswerIndicator: false,
  animalId: null
}
export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {

    submitAnswer: (state, action) => {
      const { questionId, answerIndex, animalId } = action.payload
      // identify the current question eg:
      // { id: 0, questionText: 'What does this animal eat?',
      // options: ['Meat', 'Plants', 'Fish', 'Everything'] },
      const question = state.questions.find((q) => q.id === questionId)
      // identify current animal
      const selectedAnimal = state.animalAnswers.find((q) => q.id === animalId)

      // let newAnswer = question.options[animalAnswers];
      // state.correctAnswerIndicator = true
      // state.disabledButtons = true

      // if (newAnswer === undefined || newAnswer === null) {
      //   newAnswer = 'Nothing selected';
      // }

      // if (!question) {
      //   throw new Error('Could not find question!
      // Check to make sure you are passing the question id correctly.')
      // }

      // if (question.correctAnswerIndex) {
      //   state.btnColor = '#56ab2f'
      // }
      // if (question.correctAnswerIndex === answerIndex) {
      //   console.log('correct index', question.correctAnswerIndex, 'selectedIndex', answerIndex)
      //   state.btnColor = '#56ab2f'
      // } else {
      //   console.log('correct index',
      // question.correctAnswerIndex, 'wrongselectedIndex', answerIndex)
      //   state.btnColor = '#FF416C';
      // }

      state.answers.push({
        questionId,
        selectedAnswerIndex: answerIndex,
        question: question.questionText,
        isCorrect: selectedAnimal.correctAnswerIndex[questionId] === answerIndex,
        correctAnswerIndex: selectedAnimal.correctAnswerIndex[questionId]
      })
    },

    saveAnimalId: (state, action) => {
      state.animalId = action.payload
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
    goToPreviousQuestion: (state) => {
      state.disabledButtons = false;
      state.btnColor = ''
      state.correctAnswerIndicator = false
      if (state.currentQuestionIndex === 0) {
        state.currentQuestionIndex = state.questions.length - 1;
      } else {
        state.currentQuestionIndex -= 1
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