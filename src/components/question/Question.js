import React from 'react';
import PropTypes from 'prop-types';
import styles from './Question.css';

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
        <div className={styles.radioDiv}>
          <input
            type='radio'
            id={answer}
            name='letMakeSureThisActuallyWorksTomorrow'
            key={answer + i}
            value={answer}
          />
          <label className={styles.label} htmlFor={answer}>
            {answer}
          </label>
        </div>
      </>
    );
  });

  const checkboxElements = questionToUse.answers.map((answer, i) => {
    return (
      <>
        <div className={styles.checkboxDiv}>
          <input
            type='checkbox'
            id={answer}
            name='letMakeSureThisActuallyWorksTomorrow'
            key={answer + i}
            value={answer}
          />
          <label className={styles.label2} htmlFor={answer}>{answer}</label>
        </div>
      </>
    );
  });

  let makeElement = null;

  if (questionToUse.answerDisplay === 'select') {
    makeElement = (
      <div className={styles.selectDiv}>
        <select onChange={handleChange} className={styles.select}>
          {optionsElements}
        </select>
      </div>
    );
  } else if (questionToUse.answerDisplay === 'radio') {
    makeElement = <>{radioElements}</>;
  } else if (questionToUse.answerDisplay === 'checkbox') {
    makeElement = <>{checkboxElements}</>;
  }

  return (
    <>
      <p className={styles.questionText}>{questionToUse.question}</p>
      {makeElement}
    </>
  );
}

Question.propTypes = {
  questionToUse: PropTypes.object.isRequired,
  setHasAnswered: PropTypes.func.isRequired
};
