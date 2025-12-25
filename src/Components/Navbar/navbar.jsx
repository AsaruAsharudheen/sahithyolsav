import { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`navbra-section ${scrolled ? "sticky" : ""}`}>
        {/* Hamburger Icon */}
        <div 
          className={`hamburger ${menuOpen ? "open" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Menu */}
        <div className={`first-navbar ${menuOpen ? "mobile-visible" : ""}`}>
          <p className="active" onClick={() => setMenuOpen(false)}>Home</p>
          <p onClick={() => setMenuOpen(false)}>Events</p>
          <p onClick={() => setMenuOpen(false)}>Schedule</p>
          <p onClick={() => setMenuOpen(false)}>Gallery</p>
        </div>

        <div className="second-navbar">
          <button>Book Ticket</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;