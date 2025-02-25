import React, { useEffect, useState } from "react";
import './UserDashboard.css'; // Import the CSS file

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    profilepic: '',
    name: '',
    bio: '',
    email: '',
    communityJoined: '',
    dateOfBirth: '',
    interests: ''
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setDashboardData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching dashboard:", error);
      setLoading(false);
    }
  };

  const postDashboardData = async () => {
    try {
      const token = localStorage.getItem("token");
      await fetch("http://localhost:5000/api/dashboard/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ recentActivity: "Checked dashboard" }),
      });
      fetchDashboard();
    } catch (error) {
      console.error("Error updating dashboard:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await fetch("http://localhost:5000/api/dashboard/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      fetchDashboard();
    } catch (error) {
      console.error("Error updating dashboard:", error);
    }
  };

  if (loading) return <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>Loading dashboard...</p>;

  return (
    <>
      <h1>Dashboard</h1>
      <div className="profile-picture-container">
        <img src={formData.profilepic || "profile.png"} alt="Profile" className="profile-picture" />
      </div>
      <form onSubmit={handleSubmit} className="dashboard-form">
      
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <label>
          Bio:
          <textarea name="bio" value={formData.bio} onChange={handleInputChange}></textarea>
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <label>
          Community Joined:
          <input type="text" name="communityJoined" value={formData.communityJoined} onChange={handleInputChange} />
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} />
        </label>
        <label>
          Interests:
          <input type="text" name="interests" value={formData.interests} onChange={handleInputChange} />
        </label>
        <button type="submit onClick ={handleSubmit}">Update Dashboard</button>
      </form>
    </>
  );
};

export default Dashboard;