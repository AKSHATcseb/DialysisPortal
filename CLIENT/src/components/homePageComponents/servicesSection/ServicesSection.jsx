import "./ServicesSection.css";

export default function ServicesSection(){
  return(
    <section className="services">

      <h2>Our Services</h2>

      <div className="service-grid">

        <div className="card">
          <div className="icon-circle">🏥</div>
          <div className="card-text">Find Dialysis Centers</div>
        </div>

        <div className="card">
          <div className="icon-circle">📅</div>
          <div className="card-text">Book Appointments</div>
        </div>

        <div className="card">
          <div className="icon-circle">📄</div>
          <div className="card-text">Analyse Prescription</div>
        </div>

        <div className="card">
          <div className="icon-circle">💡</div>
          <div className="card-text">Health Tips</div>
        </div>

      </div>

    </section>
  )
}
