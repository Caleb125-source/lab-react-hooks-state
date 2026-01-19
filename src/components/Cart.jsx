import React from 'react'

const Cart = ({cart, darkMode}) => {
  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + price;
  }, 0);
  
  return (
    <div
      style={{
        marginTop: '30px',
        padding: '20px',
        border: '2px solid #cbd5e0',
        borderRadius: '8px',
        backgroundColor: darkMode ? '#2d3748' : '#f7fafc',
        color: darkMode ? '#f7fafc' : '#1a202c',
      }}
    >
      <h2>Shopping Cart ({cart.length} items)</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cart.map((item, index) => (
          <li key={`${item.id}-${index}`}>{item.name} is in your cart</li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  )
}

export default Cart
