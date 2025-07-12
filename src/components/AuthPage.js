import React from 'react';
import './AuthPage.css';
import bg from './doctor.jpg'; // make sure this matches your right-side image

const AuthPage = () => {
  return (
    <div className="auth-wrapper">
      {/* Left Panel */}
      <div className="auth-left">
        <h2>Create your account</h2>
        <p>Welcome! Please fill in the details to get started.</p>

        <button className="google-btn">Continue with Google</button>

        <div className="divider">
          <span>or</span>
        </div>

        <div className="input-row">
          <div>
            <label>First name</label>
            <input type="text" placeholder="First name" />
          </div>
          <div>
            <label>Last name</label>
            <input type="text" placeholder="Last name" />
          </div>
        </div>

        <label>Email address</label>
        <input type="email" placeholder="Enter your email address" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <button className="continue-btn">Continue</button>

        <p className="signin-text">
          Already have an account? <a href="#">Sign in</a>
        </p>

        <footer>
          <p>Secured by Clerk</p>
          <p className="dev-mode">Development mode</p>
        </footer>
      </div>

      {/* Right Panel */}
      <div
        className="auth-right"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1>HealthMate</h1>
        <h3>You're welcome</h3>
      </div>
    </div>
  );
};

export default AuthPage;
