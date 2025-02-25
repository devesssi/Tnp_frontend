import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Chat from "../components/post_components/chat";

const CommunityPage = () => {
  const [communities, setCommunities] = useState([]);
  const [communityName, setCommunityName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedCommunityId, setSelectedCommunityId] = useState(null);

  const userRole = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCommunities = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/communities/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCommunities(response.data);
      } catch (err) {
        setError("Failed to load communities. Please log in again.");
      }
      setLoading(false);
    };

    if (token) fetchCommunities();
  }, [token]);

  const handleCreateCommunity = async () => {
    if (userRole !== "professor") {
      alert("Only professors can create communities!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await axios.post(
        "http://localhost:5000/api/communities/create",
        { name: communityName, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Community created successfully!");
      
      const updatedResponse = await axios.get("http://localhost:5000/api/communities/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCommunities(updatedResponse.data);
      setCommunityName("");
      setDescription("");
      setShowCreateForm(false);
    } catch (err) {
      setError(err.response?.data?.msg || "Error creating community.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <Navbar />
      <div style={styles.container}>
        {error && <p style={styles.error}>{error}</p>}

        {userRole === "professor" && (
          <button onClick={() => setShowCreateForm(true)} style={styles.createButton}>
            Create Community
          </button>
        )}

        {showCreateForm && (
          <div style={styles.modalOverlay}>
            <div style={styles.modalContent}>
              <h2>Create a Community</h2>
              <button onClick={() => setShowCreateForm(false)} style={styles.closeButton}>❌</button>

              <div style={styles.formContainer}>
                <input
                  type="text"
                  placeholder="Community Name"
                  value={communityName}
                  onChange={(e) => setCommunityName(e.target.value)}
                  style={styles.input}
                />
                <textarea
                  placeholder="Community Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={styles.input}
                />
                <button onClick={handleCreateCommunity} style={styles.submitButton}>
                  {loading ? "Creating..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        )}

        <div style={styles.communityGrid}>
          {loading ? (
            <p>Loading communities...</p>
          ) : communities.length > 0 ? (
            communities.map((community) => (
              <CommunityCard key={community._id} community={community} setSelectedCommunityId={setSelectedCommunityId} />
            ))
          ) : (
            <p>No communities available.</p>
          )}
        </div>
      </div>

      {selectedCommunityId && (
        <div style={{ marginTop: "20px" }}>
          <h2 style={{ textAlign: "center" }}>Community Chat</h2>
          <Chat communityId={selectedCommunityId} />
          <button onClick={() => setSelectedCommunityId()} style={styles.viewButton}>
            Close Chat
          </button>
        </div>
      )}
    </div>
  );
};

const CommunityCard = ({ community, setSelectedCommunityId }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>{community.name}</h3>
      <p style={styles.cardDesc}>{community.description}</p>
      <p style={styles.cardCreator}><strong>Created By:</strong> {community.createdBy?.name || "Unknown"}</p>
   <button 
  style={styles.viewButton} 
  onClick={() => setSelectedCommunityId(community._id)}
>
<Link 
  to={`/communities/${community._id}`} 
  style={{ ...styles.viewButton, textDecoration: "none" }}
  onClick={() => setSelectedCommunityId(community._id)}
>
  View Community
</Link>

</button>

    </div>
  );
};

const styles = {
  page: { backgroundColor: "#f4f4f4", padding: "20px" },
  container: { textAlign: "center" },
  error: { color: "red", fontSize: "16px" },
  createButton: {
    backgroundColor: "#007bff", color: "white", padding: "15px 20px", borderRadius: "20px", cursor: "pointer",
    fontWeight: "bold", position: "absolute", right: "20px", top: "750px",
  },
  modalOverlay: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" },
  modalContent: { background: "white", padding: "20px", borderRadius: "10px", width: "400px", textAlign: "center", position: "relative" },
  input: { width: "90%", padding: "10px", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc" },
  viewButton: { backgroundColor: "#007bff", color: "white", padding: "10px 15px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", border: "none", marginTop: "10px" },
  submitButton: { backgroundColor: "green", color: "white", padding: "10px 15px", borderRadius: "5px", cursor: "pointer" },
  linkButton: { textDecoration: "none", color: "white", display: "inline-block", width: "100%" },
  communityGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", padding: "20px", justifyContent: "center" },
  card: { background: "#ffffff", padding: "20px", borderRadius: "10px", textAlign: "center", boxShadow: "0px 4px 8px rgba(0,0,0,0.1)" },
};

export default CommunityPage;