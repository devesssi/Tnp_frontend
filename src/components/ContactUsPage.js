import React, { useState } from 'react';
import Navbar from './Navbar';
import './ContactUsPage.css';
import { Link } from 'react-router-dom'; 

const ContactUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <>
      <Navbar />
      <div className="contact-us-page">
        <div className="contact-header">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">We'd love to hear from you! Reach out to us with any questions, concerns, or feedback.</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Our Office</h3>
            <p><strong>Address:</strong> 123 T&P Portal Avenue, Borivali, Maharashtra, India</p>
            <p><strong>Phone:</strong> +91 12345 67890</p>
            <p><strong>Email:</strong> support@tpportal.com</p>
            <h3>Office Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Subject:</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Message:</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="contact-button">Submit</button>
            </form>
          </div>
        </div>
        <div className="map-container">
          <iframe
            title="office-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5049998562625!2d144.96305891531662!3d-37.81362897975167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727bfe7a3e6f0!2sFederation+Square!5e0!3m2!1sen!2sin!4v1602054646149!5m2!1sen!2sin"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        </div>
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
      
    </>
  );
};

export default ContactUsPage;
