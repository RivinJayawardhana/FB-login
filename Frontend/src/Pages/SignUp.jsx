import React from "react";
import "./MobitelLogin.css";
import mobitelImage from "./mobitel-image.jpg"; // Background image for the left section
import headerImage from "./header-image.png"; // Header image for the Play and Win section

const PlayAndWinLogin = () => {
  const handleLoginWithFacebook = () => {
    alert("Logging in with Facebook...");
    // Implement Facebook login logic here
  };

  const handleLoginWithMobitel = () => {
    alert("Logging in with Mobitel Selfcare account...");
    // Implement Mobitel login logic here
  };

  const handleLoginWithGithub = () => {
    alert("Logging in with GitHub account...");
    // Implement GitHub login logic here
  };

  const handlePlayAndWinClick = () => {
    alert("Play and Win button clicked! Implement the play and win logic here.");
  };

  return (
    <div className="play-and-win-container">
      <div className="play-and-win-left">
        <img src={mobitelImage} alt="Mobitel" className="play-and-win-image" />
      </div>
      <div className="play-and-win-right">
        <div className="play-and-win-form">
          {/* Header Image */}
          <img src={headerImage} alt="Play and Win" className="header-image" />
          
          <h2>Play and Win</h2>
          <p>Login using any of the following options and start playing to win exciting rewards!</p>
          
          <a href="/facebook" >
  <button className="login-button fb-button" >
    Login with Facebook
  </button>
</a>

          <button className="login-button mobitel-button" onClick={handleLoginWithMobitel}>
            Login with Mobitel Selfcare Account
          </button>
          <button className="login-button github-button" onClick={handleLoginWithGithub}>
            Login with GitHub Account
          </button>
          
         
        </div>
      </div>
    </div>
  );
};

export default PlayAndWinLogin;
