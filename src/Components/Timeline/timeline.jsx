import React, { useEffect } from "react";
import "./timeline.css";

const editions = [
  { title: "1st edition", place: "Dubai", year: "2012" },
  { title: "2nd edition", place: "Dubai", year: "2013" },
  { title: "3rd edition", place: "Dubai", year: "2014" },
  { title: "4th edition", place: "Ajman", year: "2015" },
  { title: "5th edition", place: "Ras Al Khaimah", year: "2016" },
  { title: "6th edition", place: "Abu Dhabi", year: "2017" },
  { title: "7th edition", place: "Sharjah", year: "2018" },
  { title: "8th edition", place: "Al Ain", year: "2019" },
  { title: "9th edition", place: "Dubai", year: "2020" },
  { title: "10th edition", place: "Ajman", year: "2021" },
  { title: "11th edition", place: "Fujairah", year: "2022" },
  { title: "12th edition", place: "Online", year: "2023" },
  { title: "13th edition", place: "Umm Al Quwain", year: "2024" },
  { title: "14th edition", place: "Abu Dhabi", year: "2025" },
];

const Timeline = () => {
  const descendingEditions = [...editions].reverse();

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".timeline-entry").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="timeline-page">
      <div className="header-section">
        <p className="sub-heading">A Decade of Cultural Legacy</p>

        <h1 className="main-heading">Sahityotsav Journey</h1>
                <div className="sponsors-accent-gradient"></div>

      </div>

      <div className="timeline-structure">
        <div className="vertical-spine"></div>

        {descendingEditions.map((item, index) => (
          <div 
            key={index} 
            className={`timeline-entry ${index % 2 === 0 ? "even" : "odd"}`}
          >
            {/* The Node (Circle) */}
            <div className="node-outer">
              <div className="node-inner"></div>
            </div>

            {/* The Connection Line */}
            <div className="horizontal-connector"></div>

            <div className="card-wrapper">
              <div className="glass-card">
                <div className="year-display">{item.year}</div>
                <h3 className="edition-name">{item.title}</h3>
                <div className="luxury-divider"></div>
                <div className="location-box">
                  <span className="location-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>
                  <span className="location-name">{item.place}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;