import React from 'react';
import Question from '../question/Question';
import useQuestions from '../../hooks/useQuestions';

export default function Questionnaire() {
  const { questionnaire, currentQuestionIndex, handleNext, handlePrevious, questionToUse, hasAnswered, setHasAnswered } = useQuestions();

  return (
    <>
      <h1>{`Legality surrounding ${questionnaire.label}`}</h1>
      <div>
        <Question setHasAnswered={setHasAnswered} questionToUse={questionToUse} /> 
      </div>

      <button onClick={() => {handleNext(currentQuestionIndex)}} >Next Question</button>
      <p>{currentQuestionIndex + 1}</p>
      <button onClick={() => {handlePrevious(currentQuestionIndex)}} >Previous Question</button>

    </>
  );
}
