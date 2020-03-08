import React from 'react';
import Question from '../question/Question';
import { useQuestionnaire } from '../../hooks/context';

export default function Questionnaire() {
  const { questionnaire } = useQuestionnaire();
console.log({ questionnaire });

  const handlePrevious = () => {
    return;
  };
  const handleNext = () => {
    return;
  };
  let questionToRender = <Question />;
  return (
    <>
      <h1>{`Legality surrounding ${questionnaire.label}`}</h1>
      <div>
        {questionToRender}
      </div>

      <button onClick={handlePrevious} >Previous Question</button>
      <button onClick={handleNext} >Next Question</button>
    </>
  );
}
