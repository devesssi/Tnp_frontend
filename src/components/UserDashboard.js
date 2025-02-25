import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>Loading dashboard...</p>;

  return (
    <div style={styles.dashboardContainer}>
      <h2 style={styles.title}>Dashboard Overview</h2>

      <div style={styles.formContainer}>
        {/* Recent Activities */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Recent Activities:</label>
          <ul style={styles.list}>
            {dashboardData.recentActivities.map((activity, index) => (
              <li key={index} style={styles.listItem}>{activity}</li>
            ))}
          </ul>
        </div>

        {/* Notifications */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Notifications:</label>
          <ul style={styles.list}>
            {dashboardData.notifications.map((note, index) => (
              <li key={index} style={styles.listItem}>{note.message}</li>
            ))}
          </ul>
        </div>

        {/* Update Activity Button at Bottom */}
        <div style={styles.buttonContainer}>
          <button 
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = "red")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "yellow")}
            onClick={postDashboardData}
          >
            Update Activity
          </button>
        </div>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  dashboardContainer: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  label: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#444",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    background: "#fff",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    fontSize: "16px",
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "yellow",
    color: "black",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
};

export default Dashboard;
