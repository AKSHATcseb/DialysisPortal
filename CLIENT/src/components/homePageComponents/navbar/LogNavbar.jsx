import { useState } from "react";
import "./LogNavbar.css";

export default function LogNavbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LEFT - Logo */}
      <div className="logo">
        <img 
          src="./images/newLogo.png" 
          alt="HealthSetu Logo" 
          className="logo-img"
        />
      </div>

      {/* CENTER - Headings */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <button className="nav-link">Home</button>
        <button className="nav-link">Appointments</button>
        <button className="nav-link">About Us</button>
        <button className="nav-link">Contact</button>
      </div>

      {/* RIGHT - Icons */}
      <div className="user-actions">
        <button className="icon-btn">🔔</button>
        <button className="profile-icon">👤</button>

        {/* Hamburger */}
        <button 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

    </nav>
  );
}
