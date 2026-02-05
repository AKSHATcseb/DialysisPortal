import { useState } from "react"
import "./Sidebar.css"

export default function Sidebar(){
  const [open, setOpen] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  return(
    <>
      {/* Mobile Top Bar */}
      <div className="mobile-topbar">

        <div className="hamburger" onClick={() => setOpen(true)}>
          ☰
        </div>

        <div 
          className="profile-icon" 
          onClick={() => setShowProfile(!showProfile)}
        >
          👤
        </div>

      </div>

      {/* Profile dropdown */}
      {showProfile && (
        <div className="profile-menu">
          <p className="p-name">Akshat</p>
          <p className="p-email">akshat@email.com</p>

          <button className="profile-btn">Edit Profile</button>
          <button className="profile-btn logout">Logout</button>
        </div>
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${open ? "open" : ""}`}>

        <div className="close-btn" onClick={() => setOpen(false)}>
          ✕
        </div>

        <h2 className="brand">HealthSetu</h2>

        <button className="side-link active">Dashboard</button>
        <button className="side-link">Appointments</button>
        <button className="side-link">Centers</button>
        <button className="side-link">Reports</button>
        <button className="side-link">Profile</button>

      </aside>
    </>
  )
}
