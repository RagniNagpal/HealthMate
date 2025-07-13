// src/components/Navbar.js
import React from 'react';
import logo from './logo5.png';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ toggleTheme, isDarkTheme }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0f172a] text-white px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img src={logo} alt="logo" className="h-10 w-10" />
        <h1 className="text-xl font-bold">HealthMate</h1>
      </div>

      <div className="flex items-center gap-6">
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Feature</a>
        <a href="/contact" className="hover:underline">Contact</a>
        <button
          onClick={toggleTheme}
          className="rounded px-3 py-1 border bg-white text-black text-sm"
        >
          {isDarkTheme ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
