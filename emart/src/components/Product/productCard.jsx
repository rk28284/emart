import React from 'react'
import styles from '../Product/Product.module.css'

export const ProductCard = ({product}) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  )
}
