import React, { useState } from 'react';
import './relatedevents.css';

const eventData = {
  FamilySahityotsav: {
    title: 'Family Sahityotsav',
    description:
      'A celebration where the joy of literature touches every heart, bringing excitement and inspiration to families. This year, over two thousand families in the UAE come together to experience the magic of stories and creativity. For the little ones, it’s a first-ever stage to showcase their talents freely, while also a chance to relive cherished memories, sing together, and share their stories as a family.',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000',
  },
  Oridath: {
    title: 'Oridath',
    description:
      'A space to share experiences, exchange gifts, and nurture heartfelt conversations between mothers and children. A place where every voice is heard, and every story matters.',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000',
  },
  CampusSahityotsav: {
    title: 'Campus Sahityotsav',
    description:
      'An exquisite celebration of intellect and imagination unfolds across more than a hundred distinguished schools and campuses, where diverse languages and cultures converge in a graceful symphony of words. From these refined arenas of creativity rise exceptional talents, who ascend through the prestigious Zonal stages and onward to the National platform—carrying with them the brilliance of thought, the elegance of expression, and the promise of literary legacy.',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000',
  },
  ArtCorner: {
    title: 'Art Corner',
    description:
      'A vibrant space within the campuses where creativity takes flight exploring the delicate folds of Origami, the charm of Paper Art, the imagination of Crafts, and the personal touch of Card Making. A place to learn, create, and showcase the art that lives within every hand.',
    image:
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1000',
  },
  Kalolsaham: {
    title: 'Kalolsaham',
    description:
      'A tender burst of joy for those who toil without holidays, whose migrant lives rarely glimpse the world beyond work, and whose hearts slowly drift away from the warmth of art. For souls confined within the rhythms of labour camps, souks, and hypermarket accommodations, Kalotsaham becomes a celebration of life itself—a vibrant confluence that opens space for expression, connection, and shared joy.',
    image:
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000',
  },
  Sneholsav: {
    title: 'Sneholsav',
    description:
      'It is celebration of the many colors of the human mind. It opens a vibrant public stage where the unique talents of neurodivergent individuals—those living with autism, ADHD, dyslexia, dyspraxia, and other natural variations of intelligence—are discovered, expressed, and celebrated. Through art, performance, creativity, and skill, Snehostsav transforms difference into brilliance and diversity into strength.',
    image:
      'https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?q=80&w=1000',
  },
  EDUCorner: {
    title: 'EDU Corner',
    description:
      'A space to nurture professional growth and chart new horizons exploring opportunities for overseas studies, receiving expert career guidance, navigating job searches, and participating in dynamic career clinics. Engage with informative and innovative talks that inspire, empower, and illuminate the path to your future.',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000',
  },
};

const RelatedEvents = () => {
  const [activeTab, setActiveTab] = useState('FamilySahityotsav');

  return (
    <section className="events-container">
      <div className="events-header">
        <span className="sponsors-tag">Explore Our</span>

        <h1 className="main-heading">Related Events</h1>

        <div className="title-underline"></div>
      </div>

      <div className="events-grid">
        <div className="events-menu">
          {Object.keys(eventData).map((key, index) => (
            <button
              key={key}
              className={`menu-item item-color-${(index % 5) + 1} ${
                activeTab === key ? 'active' : ''
              }`}
              onClick={() => setActiveTab(key)}
            >
              <span className="menu-dot"></span>
              {eventData[key].title}
            </button>
          ))}
        </div>

        <div className="events-display">
          <div
            className={`content-panel panel-color-${
              (Object.keys(eventData).indexOf(activeTab) % 5) + 1
            }`}
            key={activeTab}
          >
            <div className="image-frame">
              <img
                src={eventData[activeTab].image}
                alt={eventData[activeTab].title}
              />
            </div>

            <div className="text-frame">
              <h3 className="display-title">{eventData[activeTab].title}</h3>
              <p className="display-desc">{eventData[activeTab].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedEvents;
