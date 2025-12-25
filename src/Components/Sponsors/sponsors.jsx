import React, { useEffect } from 'react';
import './sponsors.css';

const Sponsors = () => {
  const sponsors = [
    '/brandlogo (1).png',
    '/brandlogo (2).png',
    '/brandlogo (1).svg',
    '/brandlogo (1).webp',
  ];

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Adds the reveal class to the grid container
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);

    const target = document.querySelector('.sponsors-grid');
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sponsors-section">
      <div className="sponsors-header">
        <span className="sponsors-tag">Partners in Culture</span>
        <h1 className="main-heading">Our Valued <span>Sponsors</span></h1>

        
          
        <div className="sponsors-accent-gradient"></div>
      </div>

      <div className="sponsors-container">
        <div className="sponsors-grid">
          {sponsors.map((logo, index) => (
            <div
              className="sponsor-card"
              key={index}
              style={{ '--delay': `${index * 0.15}s` }} // Staggering effect
            >
              <div className="logo-wrapper">
                <img src={logo} alt={`Sponsor ${index + 1}`} />
              </div>
              <div className="card-accent-bar"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
