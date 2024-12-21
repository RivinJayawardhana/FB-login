import React from "react";
import "./MobitelLogin.css";
import mobitelImage from "./mobitel-image.jpg"; // Add your image path here

const MobitelLogin = () => {
  const handleLogin = () => {
    alert("Logging in... (Implement login logic here)");
  };

  const handleWinData = () => {
    alert("Win Data button clicked! Implement win data logic here.");
  };

  return (
    <div className="mobitel-login-container">
      <div className="mobitel-login-left">
        <img src={mobitelImage} alt="Mobitel" className="mobitel-image" />
      </div>
      <div className="mobitel-login-right">
        <div className="mobitel-login-form">
          <h2>Login</h2>
          <input type="text" placeholder="Mobile Number" />
          <input type="password" placeholder="Password" />
          <button className="login-button" onClick={handleLogin}>
            Log In
          </button>
          <button className="win-data-button" onClick={handleWinData}>
            Win Data
          </button>
          <div className="divider">OR</div>
          <button className="otp-button">Login with OTP</button>
          <a href="#" className="forgot-password-link">Forgot Password?</a>
          <div className="signup-link">
            Don't have an account? <a href="#">Sign up here</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobitelLogin;
