import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">

      <div className="hero-content">

        {/* LEFT TEXT */}
        <div className="hero-left">

          <h1>YOUR BRIDGE TO BETTER</h1>
          <h1 className="highlight">MEDICAL CARE</h1>

          <button className="hero-btn">
            Register To Continue
          </button>
        </div>

        {/* RIGHT IMAGE */}
        {/* <div className="hero-right">
          <img 
            src="/images/doctor.png" 
            alt="Healthcare Illustration" 
            className="hero-image"
          />
        </div> */}

      </div>

    </section>
  );
}
