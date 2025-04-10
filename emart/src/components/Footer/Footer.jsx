import React from 'react';
import styles from '../Footer/Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.subscription}>
        <h3>BE THE FIRST TO KNOW</h3>
        <p>Sign up for updates from mettā muse.</p>
        <div className={styles.subscribeForm}>
          <input type="email" placeholder="Enter your e-mail..." />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <div className={styles.contact}>
        <h4>CONTACT US</h4>
        <p>+44 221 133 5360</p>
        <p>customercare@mettamuse.com</p>

        <h4>CURRENCY</h4>
        <p>🇺🇸 USD</p>
        <small>
          Transactions will be completed in Euros and a currency reference is available on hover.
        </small>
      </div>
    </footer>
  );
};
