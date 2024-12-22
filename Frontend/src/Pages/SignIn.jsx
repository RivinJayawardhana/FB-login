import React from 'react';
import './FBLoginUI.css';
import { useState } from "react"; // Import the CSS file for styling

const FBLoginUI = () => {

  const [username, setusername] = useState([]);
  const [pass, setpass] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await fetch('/api/user/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password,
            }),
        });

       

    } catch (error) {
        dispatch(singInFailure(error.message));
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
          <input type="text" placeholder="Email or Phone" />
          <input type="password" placeholder="Password" />
          <button className="fb-login-button" >Log In</button>
          <a href="#" className="forgot-password-link">Forgotten password?</a>
          <div className="divider"></div>
          <button className="create-account-button" type='submit'>Create New Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FBLoginUI;
