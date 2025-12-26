import React from 'react';
import './gallery.css';

const galleryItems = [
  { id: 1, url: '/gallery (1).jpeg', type: 'tall' },
  { id: 2, url: '/gallery (1).jpg', type: 'short' },
  { id: 2, url: '/gallery (1).jpg', type: 'short' },
  { id: 1, url: '/gallery (1).jpeg', type: 'tall' },
  { id: 3, url: '/gallery (2).jpeg', type: 'medium' },
  { id: 2, url: '/gallery (1).jpg', type: 'short' },
  { id: 4, url: '/gallery (2).jpg', type: 'tall' },
  { id: 2, url: '/gallery (1).jpg', type: 'short' },
  { id: 5, url: '/gallery (3).jpeg', type: 'medium' },
  { id: 6, url: '/gallery (3).jpg', type: 'short' },
  { id: 7, url: '/gallery (2).jpeg', type: 'tall' },
  { id: 8, url: '/gallery (3).jpg', type: 'medium' },
];

const PinterestGallery = () => {
  return (
    <section className="pinterest-pure-section">
      {/* The Section Heading stays here */}
      <div className="gallery-header">
        <span className="sponsors-tag">VISUAL COLLECTIONS</span>

        <h1 className="main-heading">
          Moments <span>Captured</span>
        </h1>

        <div className="sponsors-accent-gradient"></div>
      </div>

      <div className="pinterest-masonry-grid">
        {galleryItems.map(item => (
          <div key={item.id} className={`pinterest-item ${item.type}`}>
            <img src={item.url} alt="Gallery item" />
            <div className="pure-overlay"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PinterestGallery;
