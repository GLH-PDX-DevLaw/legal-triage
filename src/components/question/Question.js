import React from 'react';
import PropTypes from 'prop-types';

export default function Question({ questionToUse, setHasAnswered }) {

  const handleChange = ({ target }) => {
    setHasAnswered(true);
  };

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
        <input type='radio' id={answer} name='letMakeSureThisActuallyWorksTomorrow' key={answer + i} value={answer} />
        <label htmlFor={answer}>{answer}</label>
      </>
    );
  });

  const checkboxElements = questionToUse.answers.map((answer, i) => {
    return (
      <>
        <input type='checkbox' id={answer} name='letMakeSureThisActuallyWorksTomorrow' key={answer + i} value={answer} />
        <label htmlFor={answer}>{answer}</label>
      </>
    );
  });

  let makeElement = null;

  if(questionToUse.answerDisplay === 'select') {
    makeElement = (
      <select onChange={handleChange}>
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
