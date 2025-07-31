import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>

        {/* Row 1: Powered by + Logo */}
        <div className={styles.logoRow}>
          <span className={styles.logoText}>Powered by</span>
          <Link to="/" aria-label="Neema AI Home">
            <img
              src="/neemalogo.png"
              alt="Neema AI Logo"
              className={styles.logoImage}
            />
          </Link>
        </div>

        {/* Row 2: Left (address) • Center (icons) • Right (copyright) */}
        <div className={styles.footerRow}>
          <p className={styles.rights}>Av. Diagonal 452, Grácia 08006 Barcelona</p>

          <div className={styles.centerSection}>
            <a
              href="https://www.linkedin.com/company/emea-venture/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/speaker_nema/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className={styles.icon} />
            </a>
          </div>

          <p className={styles.rights}>© 2025 Neema AI. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
