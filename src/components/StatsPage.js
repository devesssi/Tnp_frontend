import React from "react";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom'; 

import {
  FaUsers,
  FaChalkboardTeacher,
  FaBriefcase,
  FaChartLine,
} from "react-icons/fa";
import "./StatsPage.css";

const StatsPage = () => {
  return (
    <div className="stats-page">
      <Navbar />
      <header className="stats-header">
        <h1 className="stats-hero-title">Portal Statistics</h1>
        <p className="stats-hero-subtitle">
          Overview of platform engagement and success
        </p>
      </header>

      <section className="stats-content">
        <div className="stats-cards">
          <div className="stats-card">
            <div className="stats-card-header">
              <h3>Total Students</h3>
              <FaUsers className="stats-card-icon" />
            </div>
            <div className="stats-card-number">500+</div>
            <div className="stats-card-increment">+20 from last month</div>
          </div>

          <div className="stats-card">
            <div className="stats-card-header">
              <h3>Active Communities</h3>
              <FaChalkboardTeacher className="stats-card-icon" />
            </div>
            <div className="stats-card-number">30+</div>
            <div className="stats-card-increment">+5 from last month</div>
          </div>

          <div className="stats-card">
            <div className="stats-card-header">
              <h3>Job Placements</h3>
              <FaBriefcase className="stats-card-icon" />
            </div>
            <div className="stats-card-number">100+</div>
            <div className="stats-card-increment">+10 from last month</div>
          </div>

          <div className="stats-card">
            <div className="stats-card-header">
              <h3>Success Rate</h3>
              <FaChartLine className="stats-card-icon" />
            </div>
            <div className="stats-card-number">80%</div>
            <div className="stats-card-increment">+2% from last month</div>
          </div>
        </div>
      </section>

      <section className="big-divs">
        <div className="big-div">
          <h2 className="big-div-title">Top Communities</h2>
          <p className="big-div-subtitle">Most active learning communities</p>
          <ul className="community-list">
            <li>
              <span className="community-name">Web Development</span>
              <span className="community-stats">+15%</span>
              <p className="community-members">250 members</p>
            </li>
            <li>
              <span className="community-name">Machine Learning</span>
              <span className="community-stats">+12%</span>
              <p className="community-members">180 members</p>
            </li>
            <li>
              <span className="community-name">Data Structures</span>
              <span className="community-stats">+8%</span>
              <p className="community-members">150 members</p>
            </li>
            <li>
              <span className="community-name">Cloud Computing</span>
              <span className="community-stats">+11%</span>
              <p className="community-members">120 members</p>
            </li>
          </ul>
        </div>

        <div className="big-div">
          <h2 className="big-div-title">Placement Statistics</h2>
          <p className="big-div-subtitle">Job placement by industry</p>
          <ul className="community-list">
            <li>
              <span className="community-name">Software Development</span>
              <span className="community-stats">+20%</span>
              <p className="community-members">45 placements</p>
            </li>
            <li>
              <span className="community-name">Data Science</span>
              <span className="community-stats">+15%</span>
              <p className="community-members">40 placements</p>
            </li>
            <li>
              <span className="community-name">Data Structures</span>
              <span className="community-stats">+18%</span>
              <p className="community-members">20 placements</p>
            </li>
            <li>
              <span className="community-name">Cloud Computing</span>
              <span className="community-stats">+11%</span>
              <p className="community-members">18 placements</p>
            </li>
          </ul>
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

export default StatsPage;
