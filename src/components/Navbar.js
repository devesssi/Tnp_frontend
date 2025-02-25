import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "lucide-react"; // ✅ Import Profile Icon
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo clickable-logo" />
        </Link>
        <h1>
          <Link to="/" className="clickable-text">T&P Portal</Link>
        </h1>

        <ul className="navbar-options">
          {isAuthenticated && <li><Link to="/community">Communities</Link></li>}
          {isAuthenticated && <li><Link to="/jobs">Jobs</Link></li>}
          <li><Link to="/stats">Stats</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        {isAuthenticated ? (
          <>
            {/* ✅ Profile Icon Instead of Dashboard Button */}
            <Link to="/dashboard" className="profile-link">
              <User size={30} className="profile-icon" />
            </Link>

            {/* ✅ Styled Logout Button */}
            <button className="logout-button" onClick={handleLogout}>
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="login-buttonld">Login</button>
            </Link>
            <Link to="/signup">
              <button className="signup-buttonld">Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
