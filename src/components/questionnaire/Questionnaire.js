import React from 'react';
import Question from '../question/Question';

export default function Questionnaire() {

  const handlePrevious = () => {
    return;
  };

  const handleNext = () => {
    return;
  };

  let questionToRender = <Question />;

  return (
    <>
      <h1>This is the questionnaire page</h1>
      <div>
        <h2>This is where the questions will be rendered</h2>
        {questionToRender}
      </div>
      <button onClick={handlePrevious} >Previous Question</button>
      <button onClick={handleNext} >Next Question</button>
    </>
  );
}
