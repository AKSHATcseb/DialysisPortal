import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar(){

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

      <img 
        src="/images/newLogo.png" 
        className="logo-img" 
        alt="Logo" 
      />

      <button className="login-btn">Login</button>

    </nav>
  );
}
