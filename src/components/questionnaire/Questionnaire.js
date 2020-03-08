import React from 'react';
import Question from '../question/Question';
import useQuestions from '../../hooks/useQuestionnaire';

export default function Questionnaire() {
  const { questionnaire, currentQuestionIndex, handleNext, handlePrevious, questionToUse, hasAnswered, setHasAnswered } = useQuestions();

  return (
    <>
      <h1>{`Legality surrounding ${questionnaire.label}`}</h1>
      <div>
        <Question setHasAnswered={setHasAnswered} hasAnswered={hasAnswered} questionToUse={questionToUse} /> 
      </div>

      <button onClick={handleNext} >Next Question</button>
      <p>{currentQuestionIndex + 1}</p>
      <button onClick={handlePrevious} >Previous Question</button>

    </>
  );
}
