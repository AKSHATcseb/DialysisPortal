import "./Navbar.css";

export default function Navbar() {
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

      {/* RIGHT - Buttons */}
      <div className="nav-buttons">
        <button className="login-btn">Login</button>
      </div>

    </nav>
  );
}
