import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="cyber-border">
          <h1 className="hero-title">
            <span className="cyber-text">Full Stack</span>
            <span className="cyber-accent">Developer</span>
          </h1>
          <p className="hero-subtitle">
            Crafting digital experiences with cutting-edge technology
          </p>
          
        </div>
        <div className="cyber-grid"></div>
      </div>
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll Down</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero; 