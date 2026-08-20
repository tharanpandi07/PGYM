import React from "react";
import "./Hero.css"; // optional styles

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-slogan">Unleash Your<br/>
             Inner Athlete</p>
        <p className="hero-subtext">We are dedicated to helping you transform your <br/>body and mind through the power of fitness</p>
        <ul className="hero-button">
        <button className="hero-btn">JOIN NOW</button>
        <button className="hero-btn2">FREE TRIAL</button>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
