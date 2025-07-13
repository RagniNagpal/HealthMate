import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import AuthPage from './components/AuthPage';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
    console.log("Theme changed to", !isDarkTheme ? "Dark" : "Light");
  };

  return (
    <div className={isDarkTheme ? 'app dark' : 'app light'}>
      <Router>
        <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<AuthPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<h1>Test Route Works</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


