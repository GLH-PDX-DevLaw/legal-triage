import React from 'react';
import PropTypes from 'prop-types';

export default function Question({ questionToUse, hasAnswered, setHasAnswered }) {

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

  const makeElement = () => {
    if(questionToUse.answerDisplay === 'select') {
      return (
        <select onChange={handleChange}>
          {optionsElements}
        </select>
      );
    }
  };

  return (
    <>
      <p>{questionToUse.question}</p>
      {makeElement()}
    </>
  );
}

Question.propTypes = {
  questionToUse: PropTypes.object.isRequired, 
  setHasAnswered: PropTypes.func.isRequired, 
  hasAnswered: PropTypes.bool.isRequired
};
