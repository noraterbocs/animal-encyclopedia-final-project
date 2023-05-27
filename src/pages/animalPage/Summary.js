/* eslint-disable max-len */
import React from 'react';
// import { useSelector } from 'react-redux';

export const Summary = () => {
  return (
    <div>
      <h1>Summary</h1>
    </div>
  )
}

// import React, { useEffect, useState } from 'react';

// const Results = () => {

// const answers = useSelector((store) => store.quiz.answers)
// const correctAnswers = answers.filter((item) => item.isCorrect)

//   const [scorePercent, setScorePercent] = useState(0);

//   useEffect(() => {
//     // Update scorePercent state variable
//     const newScorePercent = (correctAnswers.length * 100) / answers.length;
//     setScorePercent(newScorePercent);
//   }, [answers, correctAnswers]);
//   const quizOver = useSelector((store) => store.quiz.quizOver);
//   console.log(quizOver)

//   const grade = () => {
//     return scorePercent >= 90 ? 'You are smashing this bootcamp A!'
//       : scorePercent >= 80 ? 'Well done you got a B!'
//         : scorePercent >= 70 ? 'Such a nice middle of the curve type student its a C for you.'
//           : scorePercent >= 60 ? 'Who says guessing cant get you a passing grade? Its a D for you.'
//             : scorePercent >= 50 ? 'Sadly a chimpanzee randomly poking at a keyboard could do better'
//               : scorePercent >= 40 ? 'Unspeakable, lets pretend that didnt happen and you try again?'
//                 : <p>what? Lets give it another try shall we????</p>
//   }
//   return (
//     <ResultsParentContainer>
//       <ResultsChildContainer>
//         <ResultsH1>{grade()}</ResultsH1>
//         <ResultsH3>Score: {correctAnswers.length}/{answers.length}</ResultsH3>
//         <RestartButton />
//       </ResultsChildContainer>
//     </ResultsParentContainer>
//   )
// }

// export default Results;

// const ResultsParentContainer = styled.div`
//   display: flex;
//   width: 100vw;
//   height: 100vh;
//   flex-wrap: wrap;
//   align-content: center;
//   justify-content: center;
//   background-color: black;`

// const ResultsChildContainer = styled.div`
//   background-image: url(${matrix});
//   background-size: cover;
//   display: flex;
//   text-align: center;
//   flex-direction: column;
//   align-items: center;
//   border-radius: 20px;
//   padding-bottom: 20px;
// `
// const ResultsH1 = styled.h1`
// color:white;
// font-size:3rem;
// text-align:center;
// width: 90%;
// text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
// `
// const ResultsH3 = styled.h3`
// color:white;
// font-size:3rem;
// text-align:center;
// width: 90%;
// text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
// margin-top:0;
// `;

