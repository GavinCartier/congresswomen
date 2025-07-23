import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import Logo from '../assets/emea_venture_logo.png'; // adjust path if needed


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
        <Link to="/blog" className={styles.navLink}>Blog</Link>
        <Link to="/contact" className={styles.navLink}>Contact Us</Link>
      </nav>
    </header>
    );
}
export default Header;

