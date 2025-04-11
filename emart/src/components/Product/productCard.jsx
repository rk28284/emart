
import styles from '../Product/Product.module.css'
import { useState } from "react"


export const ProductCard = ({ product }) => {
  const [isWished, setIsWished] = useState(false)

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button
        onClick={() => setIsWished(!isWished)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '24px',
          color: isWished ? 'red' : 'gray',
        }}
      >
        ♥
      </button>

    </div>
  )
}
