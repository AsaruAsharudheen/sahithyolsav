import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-column brand-col">
          <div className="footer-logo">
            <img src="/logo.png" alt="Sahityotsav Logo" />
          </div>
          <p className="footer-desc">
            A vibrant celebration of language, art, and literature that connects 
            the global Malayali community to its cultural roots.
          </p>
          <div className="social-links">
            <a href="#" className="soc-1"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="soc-2"><i className="fab fa-twitter"></i></a>
            <a href="#" className="soc-3"><i className="fab fa-instagram"></i></a>
            <a href="#" className="soc-4"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="footer-column contact-col">
          <h3 className="footer-heading">Contact info</h3>
          <div className="contact-item">
            <div className="icon-box ib-1"><i className="fas fa-envelope"></i></div>
            <div className="text-box">
              <span>Email us:</span>
              <p>info@uaesahithyotsav.com</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon-box ib-2"><i className="fas fa-map-marker-alt"></i></div>
            <div className="text-box">
              <span>Location:</span>
              <p>Dubai – UAE</p>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-column links-col">
          <h3 className="footer-heading">Quick links</h3>
          <ul className="footer-links">
            <li><a href="#">Our Event</a></li>
            <li><a href="#">Our Programs</a></li>
            <li><a href="#">Event Schedule</a></li>
            <li><a href="#">Registration</a></li>
          </ul>
        </div>

        {/* Recent Posts Section */}
        <div className="footer-column posts-col">
          <h3 className="footer-heading">Recent Updates</h3>
          <div className="recent-post">
            <div className="post-img-wrapper">
               <img src="/post1.jpg" alt="Post" />
            </div>
            <div className="post-info">
              <span className="post-date date-1">Jan 11, 2026</span>
              <p>Be part of the UAE’s grand literary celebration.</p>
            </div>
          </div>
          <div className="recent-post">
             <div className="post-img-wrapper">
               <img src="/post2.jpg" alt="Post" />
            </div>
            <div className="post-info">
              <span className="post-date date-2">Jan 11, 2026</span>
              <p>Join the movement of cultural revival.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-line-gradient"></div>
        <p>&copy; 2025 UAE National Sahityotsav. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;