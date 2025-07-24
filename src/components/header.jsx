import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import Logo from '../assets/logo WOMEN ECONOMIC Congress 2020.png'; // adjust path if needed


function Header() {
    return (
    <header className={styles.header}>
      <div className={styles.logo}>
      <Link to="/">
  <img src={Logo} alt="EMEA Venture Logo" className={styles.logoImage} />
</Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/speakers" className={styles.navLink}>Speakers</Link>
        <Link to="/sponsorships" className={styles.navLink}>Sponsorships</Link>
        <Link to="/globalawards" className={styles.navLink}>Global Awards</Link>

      </nav>
    </header>
    );
}
export default Header;

