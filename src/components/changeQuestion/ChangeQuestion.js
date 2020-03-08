import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChangeQuestion.css';

const ChangeQuestion = ({ handleChangeQuestion }) => {
  return (
    <div className={styles.Buttons}>
      <span className={styles.previousText}>Previous</span>
      <button
        value={'previous'}
        onClick={({ target }) => handleChangeQuestion(target.value)}
        className={styles.prev}
      ></button>
      <button
        value={'next'}
        onClick={({ target }) => handleChangeQuestion(target.value)}
        className={styles.next}
      ></button>
      <span className={styles.nextText}>Next</span>
    </div>
  );
};

ChangeQuestion.propTypes = {
  handleChangeQuestion: PropTypes.func.isRequired
};

export default ChangeQuestion;
