import React from 'react';
import logo from './logo5.png';
import image from './dashboard-dark.png';
import listimage from './list-dark.png'
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleSignup= () => {
    navigate('/signup');
  };
   const handleLogin = () => {
    navigate('/login');
  };
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
          <button className="btn" onClick={handleSignup}>New Patient</button>
          {/* <button className="btn">Login to account</button> */}
            <button className="btn" onClick={handleLogin}>Login to account</button>
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

     <div className="features-section">
  <h1>Enterprise-Grade Features</h1>

  <div className="portal-grid">
    <div className="box2">
      <h2>Hospital Operations</h2>
      <p>Streamline daily operations, resource allocation, and staff management.</p>
    </div>

    <div className="box2">
      <h2>Data Security</h2>
      <p>HIPAA-compliant security measures to protect sensitive patient data.</p>
    </div>

    <div className="box2">
      <h2>Clinical Management</h2>
      <p>Comprehensive tools for patient care and clinical workflow optimization.</p>
    </div>
  </div>
</div>
    <div className="img2">
      <img src={listimage} alt="dashboard" />
    </div>
    <div className="last">
  <div className="stat">
    <h2>100+</h2>
    <h3>Hospitals</h3>
  </div>
  <div className="stat">
    <h2>10K+</h2>
    <h3>Healthcare Professionals</h3>
  </div>
  <div className="stat">
    <h2>1M+</h2>
    <h3>Patients Served</h3>
  </div>
  <div className="stat">
    <h2>99.9%</h2>
    <h3>System Uptime</h3>
  </div>
</div>

    <div className="para">
      <h1>Ready to Transform Your Hospital Experience?</h1>
      <p>Take advantage of our awesome services and enjoy rich healthcare experience at the comfort of your home.</p>
      <button>Get Started</button>
    </div>
    <div className="foot">
      <div className="col1">
        <h3>HealthMate</h3>
        <p>Enterprise hospital management solution trusted by leading healthcare providers.</p>
      </div>
      <div className="col1">
        <h3>Company</h3>
        <p>About Us <br /> Contact Us <br /> Features</p>
      </div>
      <div className="col1">
        <h3>Support</h3>
        <p>Help Center <br /> Security</p>
      </div>
      <div className="col1">
        <h3>Legal</h3>
        <p>Privacy Policy <br /> Terms of Service</p>
      </div>
    </div>
    <hr />
    <div className="footer">
      <p>© 2024 Kinda Hospital Management System. All rights reserved.</p>
    </div>
    </div>
  );
};

export default Navbar;
