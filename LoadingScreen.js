import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ isFadingOut }) => {
  return (
    <div className={`loading-container ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="bubble-loader"></div>
      <h1>Jig Analyzer</h1>
      <p>Loading Your Workspace...</p>
    </div>
  );
};

export default LoadingScreen;