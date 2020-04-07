import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './Home.css';
import LawAreaButton from '../lawAreaButton/LawAreaButton';
import { lawAreas } from '../../data/lawAreas';
import useModal from '../../hooks/useModal';

const Home = () => {
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

  return (
    <>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel='Example Modal'
      >
        {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
        <section className={styles.sectionBtn}>
          <button onClick={closeModal} className={styles.modalBtnExit}>
            Exit
          </button>

          <button className={styles.modalBtn}>Continue</button>
          <button className={styles.modalBtn}>Resource</button>
        </section>
        <div className={styles.modalContainer}>
          <h2>Please Read</h2>
          <form className={styles.form}>
            <article className={styles.modalInfo}>
             Safety Alert: Computer use can be monitored and is impossible to completely clear. If you are afraid your internet usage might be monitored, call the National Domestic Violence Hotline at 1−800−799−7233 or TTY 1−800−787−3224.
            </article>
          </form>
        </div>
      </Modal>

      <p className={styles.selectLaw}>Select an area of Law</p>
      <div className={styles.lawAreaButtonContainer}>
        <LawAreaButton area={lawAreas[0]} className={styles.lawAreaButton} />
        <LawAreaButton area={lawAreas[1]} className={styles.lawAreaButton} />
        <LawAreaButton area={lawAreas[2]} className={styles.lawAreaButton} />
        <LawAreaButton area={lawAreas[3]} className={styles.lawAreaButton} />
      </div>
    </>
  );
};

export default Home;
