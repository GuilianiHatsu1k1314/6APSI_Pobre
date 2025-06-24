import React from 'react';
import './landing.css';
import rocket from './rocket.png';
import moon from './moon.png';

function Landing() {
  return (
    <div className="moon-landing">
    <div className="sky">
    <div className="center-container">
      <img src={rocket} alt="Rocket" className="rocket" />
      <img src={moon} alt="Moon" className="moon" />
    </div>
    <h1 className="landing-text">Welcome to the Landing Page! 🌕</h1>
  </div>
</div>

  );
}

export default Landing;
