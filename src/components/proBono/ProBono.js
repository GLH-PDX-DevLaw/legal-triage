import React from 'react';
import styles from './proBono.css';

export default function ProBono() {

  return ( 
    <>
      <h1>
        Pro Bono Lawyers in your area
      </h1>

      <br />
      <p>Based on your current location, these lawyers have the soonest availablity to work with you.
      </p>

      <img className={styles.lawyerProfilePicture} src='src\assets\2019-olio-shiwanni johnsen-3449.jpg' />
      <img className={styles.lawyerProfilePicture} src='src\assets\78529459_10218916451456207_1069468361605251072_n.jpg' />
    </>
  );
}
