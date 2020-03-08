import React from 'react';
import Question from '../question/Question';
import useQuestions from '../../hooks/useQuestions';
import ChangeQuestion from '../changeQuestion/ChangeQuestion';

export default function Questionnaire() {
  const { questionnaire, currentQuestionIndex, handleNext, handlePrevious, questionToUse, hasAnswered, setHasAnswered, handleChangeQuestion } = useQuestions();

  return (
    <>
      <h1>{`Legality surrounding ${questionnaire.label}`}</h1>
      <p>{currentQuestionIndex + 1}</p>
      <div>
        <Question setHasAnswered={setHasAnswered} questionToUse={questionToUse} /> 
      </div>
      {/* <button onClick={() => {handleNext(currentQuestionIndex)}} >Next Question</button>
      <p>{currentQuestionIndex + 1}</p>
      <button onClick={() => {handlePrevious(currentQuestionIndex)}} >Previous Question</button> */}

      <ChangeQuestion index={currentQuestionIndex} handleChangeQuestion={handleChangeQuestion}/>
    </>
  );
}
