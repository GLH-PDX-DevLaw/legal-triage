import React from 'react';
import Question from '../question/Question';
import { useQuestionnaire } from '../../hooks/context';

export default function Questionnaire() {
  const { questionnaire } = useQuestionnaire();
  console.log(questionnaire.areaParam);

  const handlePrevious = () => {
    return;
  };
  const handleNext = () => {
    return;
  };
  let questionToRender = <Question />;
  return (
    <>
      <h1>{`This is the ${questionnaire.label} page`}</h1>
      <div>
        <h2>This is where the questions will be rendered</h2>
        {questionToRender}
      </div>
      <button onClick={handlePrevious}>Previous Question</button>
      <button onClick={handleNext}>Next Question</button>
    </>
  );
}
