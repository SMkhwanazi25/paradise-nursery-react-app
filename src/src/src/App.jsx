import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';

const App = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="landing-page">
            <div className="landing-content">
              <h1>Paradise Nursery</h1>
              <p>Bring nature into your home.</p>
              <br />
              <Link to="/products" className="get-started-btn">Get Started</Link>
            </div>
          </div>
        } />
        <Route path="/about" element={
          <><Navbar totalQuantity={totalQuantity} /><AboutUs /></>
        } />
        <Route path="/products" element={
          <><Navbar totalQuantity={totalQuantity} /><ProductList /></>
        } />
        <Route path="/cart" element={
          <><Navbar totalQuantity={totalQuantity} /><CartItem /></>
        } />
      </Routes>
    </Router>
  );
};

const Navbar = ({ totalQuantity }) => (
  <nav className="navbar">
    <h2>Paradise Nursery</h2>
    <div>
      <Link to="/">Home</Link>
      <Link to="/products">Plants</Link>
      <Link to="/about">About Us</Link>
      <Link to="/cart" className="cart-icon">
        🛒 <span className="cart-count">{totalQuantity}</span>
      </Link>
    </div>
  </nav>
);

export default App;
