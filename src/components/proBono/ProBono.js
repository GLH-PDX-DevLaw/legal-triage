import React from 'react';
import styles from './proBono.css';
import pic1 from '../../assets/2019-olio-shiwanni johnsen-3449.jpg';
import pic2 from '../../assets/rob.jpg';

export default function ProBono() {
  return (
    <>
      <div className={styles.div}>
        <h1>Pro Bono Lawyers in your area</h1>
        <p className={styles.info}>
          Based on your current location, these lawyers have soonest
          availability to work with you.
        </p>
      </div>
      <div className={styles.picsDiv}>
        <img className={styles.lawyerProfilePicture} src={pic1} />
        <img className={styles.lawyerProfilePicture} src={pic2} />
      </div>
    </>
  );
}
