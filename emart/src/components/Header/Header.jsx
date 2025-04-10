import React from 'react'
import styles from '../Header/Header.module.css'

export const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className={styles.header}>
      <h1>EMart</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.search}
      />
    </header>
  )
}
