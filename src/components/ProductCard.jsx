import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, addToCart }) => {
  const handleCardClick = () => {
    addToCart(product);
  };

  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
      data-testid={`product-${product.id}`}
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      <button 
        className={styles.button} 
        data-testid={`add-to-cart-${product.id}`}
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }} 
        disabled={!product.inStock}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard;