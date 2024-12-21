// Hero.js
import React from "react";
import "../style/Hero.css";

const Hero = () => {
    return (
      <section className="hero">
        <div className="hero-layered-bg">
          {/* Decorative Elements */}
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="grid-lines"></div>
        </div>
  
        <div className="hero-content">
          <h1 className="hero-title">Step Into the Infinite Cosmos</h1>
          <p className="hero-description">
            Connect with dreamers, explorers, and thinkers across the galaxy. 
            Your journey into the universe begins here.
          </p>
          <div className="hero-cta">
            <button className="cta-button">Launch Your Journey</button>
            <button className="cta-secondary">Discover More</button>
          </div>
        </div>
      </section>
    );
  };

export default Hero;
