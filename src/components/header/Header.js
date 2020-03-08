import React from 'react';
import styles from './Header.css';
import logo from '../../assets/cropLegalRouter.png';
import Footer from '../footer/Footer';

export default function Header() {
  return (
    <>
      <div className={styles.heroLogo}>
        <img className={styles.logo} src={logo} />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
