import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import MainMenu from './components/MainMenu/MainMenu';
import CreatePage from './components/CreatePage/CreatePage';
import './App.css';

function App() {
  // State to manage the current page. Starts with 'loading'.
  const [currentPage, setCurrentPage] = useState('loading');
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      // Start fading out the loading screen
      setIsFadingOut(true);
      // After the fade-out animation completes, change the page
      setTimeout(() => {
        setCurrentPage('menu');
      }, 500); // This should match the animation duration in LoadingScreen.css
    }, 2500); // 2.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  // Function to navigate between pages
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return <MainMenu onNavigate={navigateTo} />;
      case 'create':
        return <CreatePage onNavigate={navigateTo} />;
      default:
        // Render loading screen with fade-out control
        return <LoadingScreen isFadingOut={isFadingOut} />;
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default App;