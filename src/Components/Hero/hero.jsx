import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/navbar';
import './hero.css';

const Hero = () => {
  const slides = [
    "/hero.jpg",
    "/hero2.jpeg",
    "/hero3.jpeg",
    "/hero4.jpeg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // 6 seconds for a more relaxed premium feel

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <Navbar />
      <section className="hero-section">
        {slides.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="hero-overlay"></div>
          </div>
        ))}

        {/* Hero Content Layer - Key forces animation restart on slide change */}
        <div className="hero-content" key={currentSlide}>
           <span className="hero-tagline">UAE National Sahityotsav</span>
           <h1 className="hero-title">Experience the Magic of <span>Literature</span></h1>
           <div className="hero-palette-line"></div>
        </div>

        {/* Navigation Dots */}
        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot dot-${index + 1} ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;