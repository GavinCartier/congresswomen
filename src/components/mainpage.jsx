import React from 'react';
import styles from './mainpage.module.css';
import BackgroundVideo from '../assets/backgroundvideo.mp4'; 
import { Link } from 'react-router-dom';
import TransparentLogo from '../assets/logo_transparent.png';

const MainPage = () => {
  return (
    <div
      className={styles.main}>
    <video
        className={styles.videoBackground}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}>
      <img src={TransparentLogo} alt="Transparent Logo" className={styles.logoImage} />
        <h2>
          <strong>BE AT THE FOREFRONT OF DISRUPTIVE TECHNOLOGY </strong>
          <strong>See You Next Year!  24 – 25 June 2026</strong> 
          </h2> 
        <div className={styles.buttonGroup}>
        <Link to="/contact" className={styles.secondary}>REGISTER INTEREST FOR 2026 </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
