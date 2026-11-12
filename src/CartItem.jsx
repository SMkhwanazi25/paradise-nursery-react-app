import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, incrementQuantity, decrementQuantity } from './CartSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  if (cart.items.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Your cart is empty.</h2>
        <Link to="/products" style={{ color: '#4CAF50', textDecoration: 'underline' }}>Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#2e7d32' }}>Your Shopping Cart</h1>
      <div style={{ marginTop: '30px' }}>
        {cart.items.map((item) => (
          <div key={item.id} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #ddd', padding: '15px 0' }}>
            <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' }} />
            <div style={{ flex: 1, marginLeft: '20px' }}>
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price}</p>
              <p style={{ fontWeight: 'bold' }}>Total Cost: ${item.totalPrice}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button onClick={() => dispatch(decrementQuantity(item.id))} style={{ padding: '5px 10px', cursor: 'pointer' }}>-</button>
              <span style={{ fontSize: '1.2rem' }}>{item.quantity}</span>
              <button onClick={() => dispatch(incrementQuantity(item.id))} style={{ padding: '5px 10px', cursor: 'pointer' }}>+</button>
            </div>
            <button 
              onClick={() => dispatch(removeFromCart(item.id))}
              style={{ marginLeft: '20px', padding: '8px 15px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <h2>Total Cart Amount: ${cart.totalAmount}</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          <button onClick={() => alert('Coming Soon!')} style={{ padding: '15px 30px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1.2rem', cursor: 'pointer' }}>
            Checkout
          </button>
          <Link to="/products">
            <button style={{ padding: '15px 30px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1.2rem', cursor: 'pointer' }}>
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
