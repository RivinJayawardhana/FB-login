import React from 'react';
import './FBLoginUI.css'; // Import the CSS file for styling

const FBLoginUI = () => {
  return (
    <div className="fb-login-container">
      <div className="fb-login-left">
        <h1>facebook</h1>
        <p>Connect with friends and the world around you on Facebook.</p>
      </div>
      <div className="fb-login-right">
        <div className="fb-login-form">
          <input type="text" placeholder="Email or Phone" />
          <input type="password" placeholder="Password" />
          <button className="fb-login-button">Log In</button>
          <a href="#" className="forgot-password-link">Forgotten password?</a>
          <div className="divider"></div>
          <button className="create-account-button">Create New Account</button>
        </div>
      </div>
    </div>
  );
};

export default FBLoginUI;
