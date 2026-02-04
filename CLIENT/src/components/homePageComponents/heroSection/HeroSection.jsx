import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">

      <div className="hero-content">

        {/* LEFT TEXT */}
        <div className="hero-left">

          <h1>Your Bridge to Better</h1>
          <h1 className="highlight">Medical Care</h1>



          {/* <p className="hero-subtext">
            Find dialysis centers, manage appointments, and receive care
            easily with HealthSetu.
          </p> */}

          <button className="hero-btn">
            Register To Continue
          </button>
        </div>

      </div>

    </section>
  );
}
