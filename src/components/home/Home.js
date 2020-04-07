import React, { useState } from 'react';
import styles from './Home.css';
import LawAreaButton from '../lawAreaButton/LawAreaButton';
import { lawAreas } from '../../data/lawAreas';

const Home = () => {
  return (
    <>
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
