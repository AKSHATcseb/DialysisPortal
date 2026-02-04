import "./StatsSection.css";

export default function StatsSection(){
  return(
    <section className="stats">

      <div className="stat-card">
        <span className="stat-number">500+</span>
        <span className="stat-label">Centers</span>
      </div>

      <div className="stat-card">
        <span className="stat-number">10k+</span>
        <span className="stat-label">Patients</span>
      </div>

      <div className="stat-card">
        <span className="stat-number">99%</span>
        <span className="stat-label">Satisfaction</span>
      </div>

    </section>
  )
}
