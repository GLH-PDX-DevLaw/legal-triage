import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChangeQuestion.css';

const ChangeQuestion = ({ handleChangeQuestion, index }) => {
  return (
    <div className={styles.Buttons}>
      <div className={styles.prevDiv}>
        <button
          value='previous'
          onClick={({ target }) => handleChangeQuestion(target.value, index)}
          className={styles.prev}
        ></button>
        <span className={styles.previousText}>Previous</span>
      </div>
      <div className={styles.nextDiv}>
        <span className={styles.nextText}>Next</span> 
        <button
          value='next'
          onClick={({ target }) => handleChangeQuestion(target.value, index)}
          className={styles.next}
        ></button>
      </div>
    </div>
  );
};

ChangeQuestion.propTypes = {
  handleChangeQuestion: PropTypes.func.isRequired, 
  index: PropTypes.number.isRequired
};

export default ChangeQuestion;
