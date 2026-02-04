import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left - Brand */}
        <div className="footer-brand">
          <img className="w-50" src="/images/newLogo.png" alt="" />
          <p>Your bridge to better healthcare services.</p>
        </div>

        {/* Middle - Links */}
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>

        {/* Right - Contact */}
        <div className="footer-contact">
          <p>Email: support@healthsetu.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} HealthSetu. All rights reserved.
      </div>

    </footer>
  );
}
