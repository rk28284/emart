import React from 'react'
import styles from "../Sidebar/Sidebar.module.css"
export const Sidebar = ({ selectedCategories, onFilterChange }) => {
    const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"]

    const handleChange = (e) => {
      const { value, checked } = e.target
      onFilterChange(value, checked)
    }
  
    return (
      <aside className={styles.sidebar}>
        <h3>Filter by Category</h3>
        {categories.map((cat) => (
          <label key={cat} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              value={cat}
              checked={selectedCategories.includes(cat)}
              onChange={handleChange}
            />
            {cat}
          </label>
        ))}
      </aside>
    )
}
