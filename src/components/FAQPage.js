import React, { useState } from 'react';
import Navbar from './Navbar';
import './FAQPage.css';
import { Link } from 'react-router-dom'; 

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is T&P Portal?",
      answer: "T&P Portal is a platform that connects students, professors, and HR professionals to facilitate learning, guidance, job opportunities, and career growth.",
    },
    {
      question: "How do I create an account?",
      answer: "To create an account, click on the 'Sign Up' button in the navigation bar and enter your details to get started.",
    },
    {
      question: "How do I login?",
      answer: "To login, click on the 'Login' button in the navigation bar and enter your email and password.",
    },
    {
      question: "What features does T&P Portal offer?",
      answer: "T&P Portal offers features such as student communities, expert guidance, job opportunities, interactive learning, career growth, and networking.",
    },
    {
      question: "How do I reset my password?",
      answer: "To reset your password, click on the 'Forgot Password' link on the login page and follow the instructions to reset your password.",
    },
    {
      question: "Can I change my role after creating an account?",
      answer: "Yes, you can change your role by going to your account settings and updating your profile information.",
    },
    {
      question: "What are the benefits of joining a community?",
      answer: "Joining a community allows you to connect with like-minded individuals, share knowledge, participate in discussions, and access exclusive resources and events.",
    },
    {
      question: "How can I post a job on the T&P Portal?",
      answer: "HR professionals can post job listings by navigating to the 'Post Job' section and filling out the required information.",
    },
    {
      question: "Is there a mobile app for T&P Portal?",
      answer: "Currently, T&P Portal is accessible via web browser on mobile devices. We are working on developing a dedicated mobile app.",
    },
    {
      question: "How do I contact support if I have a problem?",
      answer: "You can contact support by clicking on the 'Contact Us' link in the footer and filling out the support form.",
    },
    {
      question: "How do I join a community as a student?",
      answer: "Students can join communities by browsing the list of available communities and clicking the 'Join' button for the desired community.",
    },
    {
      question: "How do I become a mentor on the T&P Portal?",
      answer: "To become a mentor, you can apply by filling out the mentor application form available in the 'For Professors' section.",
    },
    {
      question: "Are there any fees for using the T&P Portal?",
      answer: "The T&P Portal offers both free and premium features. Some advanced features may require a subscription.",
    },
    {
      question: "How can I update my profile information?",
      answer: "You can update your profile information by going to your account settings and editing your profile details.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="faq-page">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question} <span className={`arrow ${activeIndex === index ? 'open' : ''}`}>&#9662;</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
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

export default FAQPage;
