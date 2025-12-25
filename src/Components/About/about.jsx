import React, { useEffect, useRef, useState } from "react";
import "./about.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className={`about-section ${isVisible ? "reveal" : ""}`} 
      ref={sectionRef}
    >
      <div className="about-container">
        {/* Visual Side */}
        <div className="about-visual">
          <div className="frame-decoration"></div>
          <div className="about-image">
            <img src="/about.png" alt="About Sahityotsav" />
          </div>
          {/* Experience Box using the Palette */}
          <div className="experience-box-wrapper">
            <div className="experience-box">
              <span className="exp-number">14</span>
              <span className="exp-label">Years of<br/>Excellence</span>
            </div>
          </div>
        </div>

        {/* Text Side */}
        <div className="about-content">
          <span className="about-tag">Since 2012</span>
          <h2 className="about-title">About The <span>Program</span></h2>
          
          {/* Accent line using the palette gradient */}
          <div className="about-accent-gradient"></div>
          
          <div className="about-text">
            <p className="highlight-p">
              The UAE Pravasi Sahityotsav is a luminous journey in pursuit of
              tomorrow’s victories, spreading joy and quiet delight along the way.
            </p>
            <p className="standard-p">
              Organized by <strong>Kalalayam Samksarika Vedi, UAE</strong>, this initiative 
              celebrates culture through song and story, art and word. It leaves behind gentle
              footprints and shapes a future bright with goodness.
            </p>
            <p className="standard-p">
              Even across distant lands, our language, art, and literature rise with renewed
              brilliance in every Sahityotsav season, uniting the diaspora in a shared 
              literary heritage.
            </p>
          </div>
          
          <div className="organizer-signature">
            Organized by Kalalayam Samksarika Vedi
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;