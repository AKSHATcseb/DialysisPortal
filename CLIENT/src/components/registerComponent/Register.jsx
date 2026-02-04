import { useState } from "react";
import "./Register.css";

export default function Register() {

  const [role, setRole] = useState("Patient");

  return (
    <div className="register-container">
      <div className="register-card">

        <h2>Create Account</h2>
        <p>Register to continue</p>

        <form>

          {/* Role Selection */}
          <select 
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option>Patient</option>
            <option>Dialysis Center</option>
            <option>Admin</option>
          </select>

          {/* Email */}
          <input
            type="email"
            placeholder="Email address"
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            required
          />

          {/* OTP Button */}
          <button 
            type="button" 
            className="otp-btn"
          >
            Send Verification OTP
          </button>

          {/* Login line */}
          <p className="login-link">
            Already have an account? <span>Login</span>
          </p>

        </form>

      </div>
    </div>
  );
}
