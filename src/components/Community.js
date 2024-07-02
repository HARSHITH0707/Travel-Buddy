import React from 'react';
import './Community.css';

const Community = () => {
  return (
    <div className="community-container">
      <nav className="navbar">
        <h1 className="logo">Travelor</h1>
        <ul className="nav-links">
          <li><a href="#stays">Stays</a></li>
          <li><a href="#flights">Flights</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </nav>

      <main className="main-content">
        <section className="hero-section">
          <h2>Explore the World with Ease</h2>
          <p>Discover new cultures and create lifelong memories!</p>
          <button className="book-now">Book Now</button>
        </section>

        <section id="destinations" className="destinations-section">
          <h2>Our Top Destinations</h2>
          <div className="destinations-grid">
            <div className="destination-card">Destination 1</div>
            <div className="destination-card">Destination 2</div>
            <div className="destination-card">Destination 3</div>
          </div>
        </section>

        <section id="services" className="services-section">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">Hotels</div>
            <div className="service-card">Flights</div>
            <div className="service-card">Cars</div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Travelor. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Community;
