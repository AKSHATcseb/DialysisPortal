import "./StatsGrid.css";

export default function StatsGrid(){
  return(
    <div className="stats-grid">

      <div className="stat-card">
        <h3>Appointments</h3>
        <p>3 Upcoming</p>
      </div>

      <div className="stat-card">
        <h3>Dialysis Centers</h3>
        <p>12 Nearby</p>
      </div>

      <div className="stat-card">
        <h3>Reports</h3>
        <p>5 Uploaded</p>
      </div>

    </div>
  )
}