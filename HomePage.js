import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div class="homepage">
      {/* <header>
        <div className="container1">
          
        </div>
      </header> */}
                <h1> SWIFT RIDES</h1>

      <main>
        <section className="hero">
          <div className="container2">
            <Link to="/reg" className="btn-primary">Get Started</Link>
          </div>
        </section>
        <section className="about">
          <div className="container">
            <h2>About SWIFT RIDES</h2>
            <p>SWIFT RIDES is the world's leading long-distance carpooling platform, connecting drivers with empty seats to people traveling the same way.</p>
            <p>Join millions of members already enjoying cheap, comfortable rides together!</p>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <h2>Why Choose SWIFT RIDES?</h2>
            <div className="feature-item">
              <div className="icon"><i className="fas fa-car"></i></div>
              <h3>Convenience</h3>
              <p>Find rides from your city to your destination hassle-free.</p>
            </div>
            <div className="feature-item">
              <div className="icon"><i className="fas fa-dollar-sign"></i></div>
              <h3>Affordability</h3>
              <p>Save money by sharing the cost of travel with fellow passengers.</p>
            </div>
            <div className="feature-item">
              <div className="icon"><i className="fas fa-globe"></i></div>
              <h3>Community</h3>
              <p>Connect with a community of like-minded travelers.</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container4">
          <p>&copy; 2024 SWIFT RIDES. All rights reserved.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i>Facebook</a>
            <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i>Twitter</a>
            <a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i>Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
