import React, { useState } from 'react';
import styles from '../Header/Header.module.css';

export const Header = ({ searchQuery, setSearchQuery }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>

      <h1 className={styles.logo}>LOGO</h1>

      <nav
        className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}
        aria-label="Main Navigation"
      >
        <a href="#">SHOP</a>
        <a href="#">SKILLS</a>
        <a href="#">STORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </nav>

      <div className={styles.rightSection}>
        <span title="Search">🔍</span>
        <span title="Wishlist">♡</span>
        <span title="Cart">🛍️</span>
        <span title="Account">👤</span>
        <span title="Language">ENG ▾</span>
      </div>

      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.search}
        aria-label="Search products"
      />

      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
    </header>
  );
};
