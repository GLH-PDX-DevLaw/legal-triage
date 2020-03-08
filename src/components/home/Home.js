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
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
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
