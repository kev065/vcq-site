import React from 'react';
import './Vcq.css';

const Vcq = () => {
  return (
    <div className="vcq">
      <div className="header">
        <div className="logo">
          <img src={require('./vcq-logo.png')} alt="Valcheq Logo" />
        </div>
        <nav>
          <ul>
          <li><button className="link-button">Exchange</button></li>
          <li><button className="link-button">Products</button></li>
          <li><button className="link-button">About</button></li>
          <li><button className="link-button">Insights</button></li>
          </ul>
        </nav>
        <button className="sign-in">SIGN IN</button>
      </div>

      <div className="hero">
        <h1>Valcheq – For All Your Trades</h1>
        <p>A Multi-Exchange Crypto Trading Platform to trade on all major crypto exchanges within a single interface.</p>
        <p>Smart trading tools and social signals for crypto traders to maximize profits across multiple exchanges</p>
        <p>20+ Connected Exchangs and more than 5000 Total Trading Pairs</p>
        <div className="cta-buttons">
          <button className="login">Login to Valcheq</button>
          <button className="open-account">Open Account</button>
        </div>
      </div>
    </div>
  );
};

export default Vcq;