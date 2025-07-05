import React from 'react';
import './MainMenu.css';

const MainMenu = ({ onNavigate }) => {
  const handleExit = () => {
    // In a real desktop app (e.g., Electron), this would close the window.
    // For a web app, we can just show an alert.
    alert("In a real app, this would exit. For now, enjoy the bubbles!");
  };

  return (
    <div className="main-menu-container">
      <h1>Jig Analyzer</h1>
      <p>Create and analyze your jig layouts.</p>
      <div className="menu-buttons">
        <button className="bubble-button primary" onClick={() => onNavigate('create')}>
          Create New
        </button>
        <button className="bubble-button secondary" onClick={handleExit}>
          Exit
        </button>
      </div>
    </div>
  );
};

export default MainMenu;