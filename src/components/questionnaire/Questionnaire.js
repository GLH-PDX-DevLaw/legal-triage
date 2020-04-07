import React from 'react';
import Question from '../question/Question';
import styles from './Questionnaire.css';
import sweep from '../../assets/sweep.png';
import mask from '../../assets/mask.png';
import useQuestions from '../../hooks/useQuestions';
import ChangeQuestion from '../changeQuestion/ChangeQuestion';

export default function Questionnaire() {
  const { currentQuestionIndex, questionToUse, setHasAnswered, handleChangeQuestion, questionsArray } = useQuestions();

  return (
    <>
      <div className={styles.icons}>
        <img src={mask} alt='mask' />
        <img src={sweep} alt='sweep' />
        <h2 className={styles.heading}>
          Question {currentQuestionIndex + 1}
        </h2>
      </div>
    
      <section className={styles.main}>
        <div className={styles.questions}>
          <Question
            setHasAnswered={setHasAnswered}
            questionToUse={questionToUse}
          />
        </div>
        <div className={styles.questionBtns}>
          <ChangeQuestion
            index={currentQuestionIndex}
            handleChangeQuestion={handleChangeQuestion}
            questionsArray={questionsArray}
          />
        </div>
      </section>
    </>
  );
}

