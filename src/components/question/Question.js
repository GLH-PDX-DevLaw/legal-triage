import React from 'react';
import PropTypes from 'prop-types';

export default function Question({ questionToUse, setHasAnswered }) {

  const handleChange = ({ target }) => {
    setHasAnswered(true);
  };

  const optionsElements = questionToUse.answers.map(answer => {
    return (
      <option key={answer} value={answer}>
        {answer}
      </option>
    );
  });

  const radioElements = questionToUse.answers.map(answer => {
    return (
      <>
        <input type='radio' id={answer} name='letMakeSureThisActuallyWorksTomorrow' key={answer} value={answer} />
        <label htmlFor={answer}>{answer}</label>
      </>
    );
  });

  let makeElement = '';

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
