import { useState } from "react";
import "./Login.css";

export default function Login() {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="login-container">

            {/* Animated background shapes */}
            <div className="bg-animation">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="login-card">
                <h2>Welcome Back</h2>
                <p>Login to your account</p>

                <form>

                    <input
                        type="email"
                        placeholder="Email address"
                        required
                    />

                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            required
                        />

                        {/* <button
                            type="button"
                            className="show-btn"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "🙈" : "👁"}
                        </button> */}

                    </div>

                    <button type="submit" className="login-btn">Login</button>

                    <div className="extra-links">
                        <a href="#">Forgot password?</a>
                        <a href="#">Sign up</a>
                    </div>

                </form>
            </div>
        </div>
    );
}
