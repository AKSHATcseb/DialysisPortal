import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      {/* LEFT - Logo */}
      <div className="big">
        <div className="logo">
          <img
            src="./images/newLogo.png"
            alt="HealthSetu Logo"
            className="logo-img"
          />
        </div>

        <span className="login-btn">Login</span>
      </div>

      {/* RIGHT - Buttons */}
      {/* <button className="login-btn">Login</button> */}

    </nav>
  );
}
