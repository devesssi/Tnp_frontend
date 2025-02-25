import React from "react"; 
import Navbar from "./Navbar";
// import Footer from "./Footer";
import "./LandingPage.css";
import { Link } from 'react-router-dom'; 

import {
  FaUsers,
  FaChalkboardTeacher,
  FaBriefcase,
  FaProjectDiagram,
  FaChartLine,
  FaNetworkWired,
} from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <header className="header">
        <h2 className="hero-title">
          Your Gateway to{" "}
          <span className="gradient-text">Professional Success</span>
        </h2>
        <p className="hero-subtitle">
          Connect with industry experts, join learning communities, and discover
          exciting career opportunities
        </p>
        <div className="cta-buttons">
          <button className="cta-button">
            Get Started <span className="arrow">→</span>
          </button>
          <button className="cta-button-secondary">Explore Communities</button>
        </div>
      </header>

      <section className="features">
        <h2>Our Features</h2>
        <div className="cards-container">
          <div className="card">
            <FaUsers className="card-icon" />
            <h3>Student Communities</h3>
            <p>
              Join specialized learning communities led by experienced
              professors.
            </p>
          </div>
          <div className="card">
            <FaChalkboardTeacher className="card-icon" />
            <h3>Expert Guidance</h3>
            <p>
              Learn directly from industry professionals and experienced
              faculty.
            </p>
          </div>
          <div className="card">
            <FaBriefcase className="card-icon" />
            <h3>Job Opportunities</h3>
            <p>Access exclusive job postings from top companies.</p>
          </div>
          <div className="card">
            <FaProjectDiagram className="card-icon" />
            <h3>Interactive Learning</h3>
            <p>Engage in discussions and collaborate in projects.</p>
          </div>
          <div className="card">
            <FaChartLine className="card-icon" />
            <h3>Career Growth</h3>
            <p>Track your progress and achieve your career goals.</p>
          </div>
          <div className="card">
            <FaNetworkWired className="card-icon" />
            <h3>Networking</h3>
            <p>
              Connect with peers and industry experts to build your network.
            </p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="statsld-card">
          <div className="stats-item">
            <strong>500+</strong>
            <p>Active Students</p>
          </div>
          <div className="stats-item">
            <strong>50+</strong>
            <p>Expert Professors</p>
          </div>
          <div className="stats-item">
            <strong>30+</strong>
            <p>Learning Communities</p>
          </div>
          <div className="stats-item">
            <strong>100+</strong>
            <p>Job Opportunities</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h4>For Students</h4>
            <ul>
              <li>
                <a href="#communities">Communities</a>
              </li>
              <li>
                <a href="#job-list">Job List</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>For Professors</h4>
            <ul>
              <li>
                <a href="#create-community">Create Community</a>
              </li>
              <li>
                <a href="#manage-resources">Manage Resources</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>For HR</h4>
            <ul>
              <li>
                <a href="#post-job">Post Job</a>
              </li>
              <li>
                <a href="#talent-pool">Talent Pool</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              </li>
              <li>
              <li><Link to="/faq">FAQ</Link></li>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms-of-service">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyright">
          © 2025 Shri L.R. Tiwari College of Engineering. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

  


export default LandingPage;
