import React, { useState } from 'react';
import Modal from 'react-modal';
import LawAreaButton from '../lawAreaButton/LawAreaButton';
import { lawAreas } from '../../data/lawAreas';

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);

  Modal.setAppElement('#root');
  const openModal = () => {
    setIsOpen(true);
  };
 
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
        contentLabel="Example Modal"
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
      <p>hola mundo</p>
      <LawAreaButton area={lawAreas[0]}/>
      <LawAreaButton area={lawAreas[0]}/>
      <LawAreaButton area={lawAreas[0]}/>
      <LawAreaButton area={lawAreas[0]}/>
    </>
  );
};

export default Home;
