import React from 'react';
import './Vcq.css';

const Vcq = () => {
  return (
    <div className="vcq">
      <div className="header">
        <div className="logo">
          <a href="https://valcheq.com">
            <img src={require('./icon10.png')} alt="Valcheq Logo" />
          </a>
        </div>
        <nav>
          <ul>
          {/*<li><button className="link-button">Exchanges</button></li>
          <li><button className="link-button">Products</button></li>
          <li><button className="link-button">About</button></li>*/}
          </ul>
        </nav>
        {/*<button className="sign-in">Sign In</button>*/}
      </div>

      <div className="hero">
        <h1>Valcheq – Your News-Powered Trading Terminal</h1>
        <p className="hero-paragraph">In today's fast-paced crypto market, staying ahead of the curve is crucial. Our innovative trading terminal 
          puts the power of real-time news and 
          seamless execution at your fingertips. </p>
        <p className="hero-paragraph">Here's what sets us apart:</p>
        <p className="hero-paragraph">Actionable News Feed: Our curated news feed filters out the noise, highlighting actionable insights that can inform your trading decisions.</p>
        <p className="hero-paragraph">All-in-one Interface: No more switching tabs! Execute trades directly on your chosen exchange through our secure and integrated platform.</p>
        <p className="hero-paragraph">Exchange Choice: We connect to a wide range of top crypto exchanges, giving you the freedom to choose the one that best suits your needs.</p>
        <div className="cta-buttons">
          <a href="mailto:kelvin@valcheq.com" className="contact-us">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Vcq;