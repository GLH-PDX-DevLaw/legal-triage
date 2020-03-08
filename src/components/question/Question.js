import React from 'react';
import PropTypes from 'prop-types';
import { useUpdateAnswers, useAnswers } from '../../hooks/context';

export default function Question({ questionToUse, setHasAnswered }) {
  const { updateAnswers } = useUpdateAnswers();
  const { answers } = useAnswers();
  // console.log(answers, 'right after destructuring');


  const handleOptionOrRadioSelection = ({ target }) => {
    setHasAnswered(true);
    updateAnswers({ ...answers, [questionToUse.name]: target.value });
  };
  
  const handleCheckboxSelections = ({ target }) => {
    //TO DO: handle unchecking and updating state
    //TO DO: handle logic for if user has unchecked all boxes --> button should disable? only if user NEEDS to answer the question
    setHasAnswered(true);
    updateAnswers(oldAnswers => ({ ...oldAnswers, [questionToUse.name]: [...(oldAnswers[questionToUse.name] || []), target.value] }));
  };

  //for dropdown
  const optionsElements = questionToUse.answers.map((answer, i) => {
    return (
      <option key={answer + i} value={answer}>
        {answer}
      </option>
    );
  });

  const radioElements = questionToUse.answers.map((answer, i) => {
    return (
      <>
        <input type='radio' id={answer} name='letMakeSureThisActuallyWorksTomorrow' key={answer + i} value={answer} onChange={handleOptionOrRadioSelection} />
        <label htmlFor={answer}>{answer}</label>
      </>
    );
  });

  const checkboxElements = questionToUse.answers.map((answer, i) => {
    return (
      <>
        <input type='checkbox' id={answer} name='letMakeSureThisActuallyWorksTomorrow' key={answer + i} value={answer} onChange={handleCheckboxSelections} />
        <label htmlFor={answer}>{answer}</label>
      </>
    );
  });

  let makeElement = null;

  if(questionToUse.answerDisplay === 'select') {
    makeElement = (
      <select onChange={handleOptionOrRadioSelection}>
        {optionsElements}
      </select>
    );
  } else if(questionToUse.answerDisplay === 'radio') {
    makeElement = (
      <>
        {radioElements}
      </>
    );
  } else if(questionToUse.answerDisplay === 'checkbox') {
    makeElement = (
      <>
        {checkboxElements}
      </>
    );
  }

  return (
    <>
      <p>{questionToUse.question}</p>
      {makeElement}
    </>
  );
}

Question.propTypes = {
  questionToUse: PropTypes.object.isRequired, 
  setHasAnswered: PropTypes.func.isRequired,
};
