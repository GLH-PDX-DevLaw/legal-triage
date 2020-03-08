import React from 'react';
import Question from '../question/Question';
import styles from './Questionnaire.css';
import sweep from '../../assets/sweep.png';
import mask from '../../assets/mask.png';
import useQuestions from '../../hooks/useQuestions';
import ChangeQuestion from '../changeQuestion/ChangeQuestion';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import useModal from '../../hooks/useModal';
import styles2 from '../home/Home.css';

export default function Questionnaire() {
  const params = useParams();

  const { questionnaire, currentQuestionIndex, questionToUse, hasAnswered, setHasAnswered, handleChangeQuestion } = useQuestions();

  const { isOpen, setIsOpen } = useModal();

  Modal.setAppElement('#root');
  // const openModal = () => {
  //   setIsOpen(true);
  // };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  let modal;
  if(params.area === 'dv'){
    modal = (
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel='Example Modal'
      >
        {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
        <section className={styles2.sectionBtn}>
          <button onClick={closeModal} className={styles2.modalBtnExit}>
            Exit
          </button>

          <button className={styles2.modalBtn}>Continue</button>
          <button className={styles2.modalBtn}>Resource</button>
        </section>
        <div className={styles2.modalContainer}>
          <h2>Please Read</h2>
          <form className={styles2.form}>
            <article className={styles2.modalInfo}>
            Safety Alert: Computer use can be monitored and is impossible to completely clear. If you are afraid your internet usage might be monitored, call the National Domestic Violence Hotline at 1−800−799−7233 or TTY 1−800−787−3224.
            </article>
          </form>
        </div>
      </Modal>
    );
  }

  return (
    <>
      {modal}
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
          />
        </div>
      </section>
    </>
  );
}
