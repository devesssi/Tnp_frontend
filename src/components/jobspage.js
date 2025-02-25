import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"; 
// import Footer from "./Footer";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const userRole = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/jobs/getalljobs", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setJobs(response.data.jobs);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load jobs.");
      }
    };

    fetchJobs();
  }, [token]);

  const handlePostJob = async () => {
    if (userRole !== "hr") {
      alert("Only HR can post jobs!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await axios.post(
        "http://localhost:5000/api/jobs/create",
        { title, description, company, location, salary },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Job posted successfully!");

      const updatedResponse = await axios.get("http://localhost:5000/api/jobs/getalljobs", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setJobs(updatedResponse.data.jobs);
      setShowModal(false);
      setTitle(""); setDescription(""); setCompany(""); setLocation(""); setSalary("");
    } catch (err) {
      console.error("Error posting job:", err);
      setError(err.response?.data?.msg || "Error posting job.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <div style={styles.container}>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {userRole === "hr" && (
          <button onClick={() => setShowModal(true)} style={styles.postJobButton}>
            Post a Job
          </button>
        )}

        {showModal && (
          <div style={styles.modalOverlay}>
            <div style={styles.modalContent}>
              <h2>Post a Job</h2>
              <button onClick={() => setShowModal(false)} style={styles.closeButton}>❌</button>

              <div style={styles.formContainer}>
                <input type="text" placeholder="Job Title" value={title} onChange={(e) => setTitle(e.target.value)} style={styles.input} />
                <textarea placeholder="Job Description" value={description} onChange={(e) => setDescription(e.target.value)} style={styles.input} />
                <input type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} style={styles.input} />
                <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} style={styles.input} />
                <input type="number" placeholder="Salary" value={salary} onChange={(e) => setSalary(e.target.value)} style={styles.input} />
                <button onClick={handlePostJob} style={styles.submitButton}>{loading ? "Posting..." : "Submit"}</button>
              </div>
            </div>
          </div>
        )}

        <div style={styles.jobGrid}>
          {jobs.length === 0 ? (
            <p>No job postings available.</p>
          ) : (
            jobs.map((job) => (
              <div key={job._id} style={styles.jobCard}>
                <h2>{job.title}</h2>
                <p>{job.description}</p>
                <p><strong>Company:</strong> {job.company}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Salary:</strong> ${job.salary}</p>
                <p><strong>Posted By:</strong> {job.postedBy?.name || "Unknown"}</p>
              </div>
            ))
          )}
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
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
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

const styles = {
  container: { 
    padding: "20px", 
    textAlign: "center", 
    position: "relative" // Ensures absolute elements inside work properly
  },

  postJobButton: { 
    backgroundColor: "#007bff", 
    color: "white", 
    padding: "15px 20px", 
    borderRadius: "10px", 
    cursor: "pointer", 
    fontWeight: "bold",
    position: "absolute",  // Positioning it absolutely
    right: "20px",         // Aligns it to the right
    top: "600px",           // Moves it down slightly
  },

  modalOverlay: { 
    position: "fixed", 
    top: 0, left: 0, 
    width: "100%", 
    height: "100%", 
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center" 
  },

  modalContent: { 
    background: "white", 
    padding: "20px", 
    borderRadius: "10px", 
    width: "400px", 
    textAlign: "center", 
    position: "relative" 
  },

  formContainer: { 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center" 
  },

  closeButton: { 
    position: "absolute", 
    top: "10px", 
    right: "10px", 
    background: "transparent", 
    border: "none", 
    fontSize: "20px", 
    cursor: "pointer" 
  },

  input: { 
    width: "90%", 
    padding: "10px", 
    margin: "10px 0", 
    borderRadius: "5px", 
    border: "1px solid #ccc" 
  },

  submitButton: { 
    backgroundColor: "green", 
    color: "white", 
    padding: "10px 15px", 
    borderRadius: "5px", 
    cursor: "pointer" 
  },

  jobGrid: { 
    display: "grid", 
    gridTemplateColumns: "repeat(3, 1fr)", 
    gap: "20px", 
    padding: "20px" 
  },

  jobCard: { 
    background: "#ffffff", 
    padding: "20px", 
    borderRadius: "10px", 
    textAlign: "center", 
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)", 
    transition: "transform 0.3s ease-in-out" // Adds a smooth hover effect
  },

  jobCardHover: { 
    transform: "scale(1.05)", 
    boxShadow: "0px 6px 12px rgba(0,0,0,0.2)" 
  }
};


export default JobsPage;
