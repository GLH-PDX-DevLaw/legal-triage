import React from 'react';
import Question from '../question/Question';
import useQuestions from '../../hooks/useQuestions';
import ChangeQuestion from '../changeQuestion/ChangeQuestion';

export default function Questionnaire() {
  const { questionnaire, currentQuestionIndex, questionToUse, hasAnswered, setHasAnswered, handleChangeQuestion } = useQuestions();

  return (
    <>
      <h1>{`Legality surrounding ${questionnaire.label}`}</h1>
      <p>{currentQuestionIndex + 1}</p>
      <div>
        <Question setHasAnswered={setHasAnswered} questionToUse={questionToUse} /> 
      </div>

      <ChangeQuestion index={currentQuestionIndex} handleChangeQuestion={handleChangeQuestion}/>
    </>
  );
}
