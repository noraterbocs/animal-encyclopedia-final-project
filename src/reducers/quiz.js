/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
// import { updateTotalScore } from './user';
// /images/quizimgs/meat.jpg
// const questions = [
//   { id: 0,
//     questionText: 'What does this animal eat?',
//     options: [{ text: 'Carnivore:Meat', image: '' }, { text: 'Herbivore:Plants', image: '' }, { text: 'Omnivore:Everything', image: '' }] },
//   { id: 1,
//     questionText: 'Where does this animal live?',
//     options: [{ text: 'ocean', image: '' }, { text: 'trees', image: '' }, { text: 'land', image: '' }, { text: 'snow', image: '' }] },
//   { id: 2,
//     questionText: 'Does this animal have live babies or lay eggs?',
//     options: [{ text: 'eggs', image: '' }, { text: 'live babies', image: '' }] },
//   { id: 3,
//     questionText: 'Does this animal like to live alone or in groups?',
//     options: [{ text: 'Alone', image: '' }, { text: 'Groups', image: '' }] },
//   { id: 4,
//     questionText: 'How many hours per day does this animal sleep?',
//     options: [{ text: 'less than 5 hours', image: '' }, { text: '5-10 hours', image: '' }, { text: 'more than 10hours', image: '' }] },
//   { id: 5,
//     questionText: 'What is the best way for this animal to get around?',
//     options: [{ text: 'walking', image: '' }, { text: 'hopping', image: '' }, { text: 'flying', image: '' }, { text: 'swimming', image: '' }] }
// ]

const questions = [
  { id: 0,
    questionText: 'What does this animal eat?',
    options: [{ text: 'Carnivore' }, { text: 'Herbivore' }, { text: 'Omnivore' }] },
  { id: 1,
    questionText: 'Where does this animal live?',
    options: [{ text: 'Ocean' }, { text: 'Trees' }, { text: 'Land' }, { text: 'Snow' }] },
  { id: 2,
    questionText: 'Does this animal have live babies or lay eggs?',
    options: [{ text: 'Eggs' }, { text: 'Live babies' }] },
  { id: 3,
    questionText: 'Does this animal like to live alone or in groups?',
    options: [{ text: 'Alone' }, { text: 'Groups' }] },
  { id: 4,
    questionText: 'How many hours per day does this animal sleep?',
    options: [{ text: 'Less than 5 hours' }, { text: '5-10 Hours' }, { text: 'More than 10 hours' }] },
  { id: 5,
    questionText: 'What is the best way for this animal to get around?',
    options: [{ text: 'Walking' }, { text: 'Hopping' }, { text: 'Flying' }, { text: 'Swimming' }] }
]

const animalAnswers = [
  { id: 'bear', correctAnswerIndex: [3, 2, 1, 0, 2, 0], answerIndex: [] },
  { id: 'eagle', correctAnswerIndex: [0, 1, 0, 0, 0, 2], answerIndex: [] },
  { id: 'elephant', correctAnswerIndex: [1, 2, 1, 1, 0, 0], answerIndex: [] },
  { id: 'fox', correctAnswerIndex: [0, 1, 1, 0, 1, 0], answerIndex: [] },
  { id: 'lion', correctAnswerIndex: [0, 2, 1, 1, 2, 0], answerIndex: [] },
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

const userBadges = [
  { id: '1', title: 'explorer', path: '/images/badges/Explorer.png', description: 'Congratulations! You have earned the Explorer badge! As an explorer, you have taken your first steps into the exciting world of animals. You have shown curiosity and a keen interest in learning about different species. Keep exploring and discovering fascinating facts about animals from all around the world.' },
  { id: '2', title: 'apprentice', path: '/images/badges/Apprentice.png', description: 'Well done on achieving the Apprentice badge! You are now progressing beyond the beginner stage and showing dedication to expanding your animal knowledge. As an apprentice, you are developing a deeper understanding of various species and their unique characteristics. Continue to explore, ask questions, and grow your expertise in the animal kingdom.' },
  { id: '3', title: 'speciesSleuth', path: '/images/badges/SpeciesSleuth.png', description: 'Fantastic work! You have earned the Species Sleuth badge! As a species sleuth, you have proven yourself to be a skilled investigator of the animal world. You have developed an eye for detail and can identify different species based on their distinctive features. Your knowledge and observation skills are becoming more advanced, enabling you to unravel the secrets of the animal kingdom.' },
  { id: '4', title: 'juniorZoologist', path: '/images/badges/JuniorZoologist.png', description: 'Congratulations on reaching the Junior Zoologist badge! You have now become a young expert in the field of zoology. Your dedication and hard work have paid off, and you have gained a wealth of knowledge about various animal groups, their habitats, and behaviors. Your passion for animals shines through as you continue to explore and deepen your understanding of the incredible diversity of life on Earth.' },
  { id: '5', title: 'seniorZoologist', path: '/images/badges/SeniorZoologist.png', description: 'Well done! You have achieved the prestigious Senior Zoologist badge! As a senior zoologist, you have become a true authority on the subject of animals. Your extensive knowledge and experience make you a valuable resource for others seeking information about the natural world. You have demonstrated a deep understanding of complex concepts and can analyze animal behavior and ecological relationships with expertise.' },
  { id: '6', title: 'wildlifeChampion', path: '/images/badges/WildlifeChampion2.png', description: 'Congratulations! You have reached the pinnacle of animal knowledge and earned the esteemed Wildlife Champion badge! As a wildlife champion, you stand out as a true advocate for the conservation and protection of animal species. Your dedication to preserving the natural world and raising awareness about the importance of wildlife is truly inspiring. You are a role model for others,and your passion and commitment make a significant impact on the future of our planet&apos;s biodiversity.' }
]

const initialState = {
  questions,
  animalAnswers,
  answers: [],
  currentQuestionIndex: 0, // this should be somewhere in the json from the api request
  quizOver: null,
  btnColor: '',
  disabledButtons: false, // after selecting an answer
  correctAnswerIndicator: false,
  currentScore: 0,
  animalId: null,
  history: [],
  badges: userBadges
}
export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {

    submitAnswer: (state, action) => {
      const { questionId, answerIndex, animalId } = action.payload
      // identify the current question
      const question = state.questions.find((q) => q.id === questionId)
      // identify current animal
      const selectedAnimal = state.animalAnswers.find((a) => a.id === animalId)

      state.answers.push({
        questionId,
        selectedAnswerIndex: answerIndex,
        question: question.questionText,
        isCorrect: selectedAnimal.correctAnswerIndex[questionId] === answerIndex,
        correctAnswerIndex: selectedAnimal.correctAnswerIndex[questionId],
        quizName: animalId
      })
      if (selectedAnimal.correctAnswerIndex[questionId] === answerIndex) {
        state.currentScore += 1
        console.log(state.currentScore)
      }
      console.log('state.currentScore:', state.currentScore, 'corret answerindex:', selectedAnimal.correctAnswerIndex[questionId], 'answerindex:', answerIndex, 'state.answers:', state.answers)
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
    // goToPreviousQuestion: (state) => {
    //   state.disabledButtons = false;
    //   state.btnColor = ''
    //   state.correctAnswerIndicator = false
    //   if (state.currentQuestionIndex === 0) {
    //     state.currentQuestionIndex = state.questions.length - 1;
    //   } else {
    //     state.currentQuestionIndex -= 1
    //   }
    // },

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