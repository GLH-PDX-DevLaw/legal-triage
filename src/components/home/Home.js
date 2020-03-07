import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import LawAreaButton from '../lawAreaButton/LawAreaButton';


const Home = ({ setQuestionnaire }) => {

  const [isOpen, setIsOpen] = useState(true)

  Modal.setAppElement('#root')

  const openModal = () => {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
 
  const closeModal = () => {
    setIsOpen(false);
  }

  
  
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
      {/* <LawAreaButton setQuestionnaire={setQuestionnaire}/>
      <LawAreaButton setQuestionnaire={setQuestionnaire}/>
      <LawAreaButton setQuestionnaire={setQuestionnaire}/>
      <LawAreaButton setQuestionnaire={setQuestionnaire}/> */}
    </>
  )
}

Home.propTypes = {
  setQuestionnaire: PropTypes.func.isRequired
}

export default Home;