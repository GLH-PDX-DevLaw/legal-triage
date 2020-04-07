import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ChangeQuestion.css';
const ChangeQuestion = ({ handleChangeQuestion, index, questionsArray }) => {
  console.log(questionsArray)
  const history = useHistory();
  const buttonToRender = () => {
    if (index === questionsArray.length) {
      return (
        <div className={styles.nextDiv}>
          <span className={styles.nextText}>Submit</span>
          <button
            value='submit'
            onClick={history.push('/results')}
            className={styles.next}
          ></button>
        </div>
      )
    } else {
      return (
        <div className={styles.nextDiv}>
          <span className={styles.nextText}>Next</span>
          <button
            value='next'
            onClick={({ target }) => handleChangeQuestion(target.value, index)}
            className={styles.next}
          ></button>
        </div>
      )
    }
  }
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
      {buttonToRender()}
    </div>
  );
};
ChangeQuestion.propTypes = {
  handleChangeQuestion: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  questionsArray: PropTypes.array.isRequired
};
export default ChangeQuestion;
