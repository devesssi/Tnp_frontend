import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ Use axios correctly
import "./LoginPage.css";
import "./LandingPage.js";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // ✅ Error handling
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
  
      console.log("Login API Response:", response.data); // ✅ Check response
  
      if (response.data.accessToken) {
        console.log("✅ Token Received:", response.data.accessToken);
        console.log("✅ Role Received:", response.data.user.role);
        console.log("✅ User ID Received:", response.data.user._id);
  
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("role", response.data.user.role);
        localStorage.setItem("userId", response.data.user._id);
  
        navigate("/");
      } else {
        console.error("❌ No token received from API");
      }
    } catch (error) {
      console.error("❌ Login Error:", error.response?.data || error.message);
    }
  };
  
  
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        {error && <p className="error-message">{error}</p>} {/* ✅ Show errors */}
        <form onSubmit={handleLogin}>
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
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <a href="/signup">Don't have an account? Sign Up</a>
      </div>
    </div>
  );
};

export default LoginPage;
