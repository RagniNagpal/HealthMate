import React from 'react';
import logo from './logo5.png';
import image from './dashboard-dark.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faUserDoctor,
  faUserNurse,
  faUserInjured,
  faUserTie,
  faCapsules
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='body'>
      {/* Navbar */}
      <div className='main'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" />
          <h1>HealthMate</h1>
        </div>
        <div className="nav">
          <a href="#">About</a>
          <a href="#">Feature</a>
          <a href="#">Contact</a>
          <select id="theme" name="theme">
            <option value="Dark">🌜</option>
            <option value="Light">☀️</option>
          </select>
        </div>
      </div>

      {/* Hero Section */}
      <div className='first'>
        <h1>Welcome to HealthMate</h1>
        <p>Manage your hospital operations, patient records, and more with our powerful hospital management system.</p>
        <div>
          <button>New Patient</button>
          <button className="btn">Login to account</button>
        </div>
        <div className='img'>
          <img src={image} alt="dashboard preview" />
        </div>
      </div>

      {/* Portals Section */}
      <div className="second">
        <h1>Dedicated Portals for Every User</h1>
        <div className="portal-grid">

          <div className='box1'>
            <FontAwesomeIcon icon={faCircleUser} size="2x" />
            <h2>Admin Portal</h2>
            <p>Secure access for administrators to manage hospital resources.</p>
            <button>Admin Login</button>
          </div>

          <div className='box1'>
            <FontAwesomeIcon icon={faUserDoctor} size="2x" />
            <h2>Doctor Portal</h2>
            <p>View patient records, schedule appointments, and issue prescriptions.</p>
            <button>Doctor Login</button>
          </div>

          <div className='box1'>
            <FontAwesomeIcon icon={faUserNurse} size="2x" />
            <h2>Nurse Portal</h2>
            <p>Access assigned patients, manage vitals and ward reports.</p>
            <button>Nurse Login</button>
          </div>

          <div className='box1'>
            <FontAwesomeIcon icon={faUserInjured} size="2x" />
            <h2>Patient Portal</h2>
            <p>Book appointments, view test results and communicate with doctors.</p>
            <button>Patient Login</button>
          </div>

          <div className='box1'>
            <FontAwesomeIcon icon={faUserTie} size="2x" />
            <h2>Reception Portal</h2>
            <p>Register patients, assign doctors and manage OPD schedules.</p>
            <button>Reception Login</button>
          </div>

          <div className='box1'>
            <FontAwesomeIcon icon={faCapsules} size="2x" />
            <h2>Pharmacy Portal</h2>
            <p>Track prescriptions, manage medicine inventory, and billing.</p>
            <button>Pharmacy Login</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
