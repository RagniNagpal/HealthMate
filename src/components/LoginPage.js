import React from 'react';
import './LoginPage.css';
import bg from './doctor.jpg'; // make sure this image is present

const LoginPage = () => {
  return (
    <div className="auth-wrapper">
      {/* Left Panel */}
      <div className="auth-left">
        <h2>Login to your account</h2>
        <p>Welcome back! Please enter your details to login.</p>

        <button className="google-btn">Continue with Google</button>

        <div className="divider">
          <span>or</span>
        </div>

        <form>
          <label>Email address</label>
          <input type="email" placeholder="Enter your email address" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <button className="continue-btn" type="submit">Login</button>
        </form>

        <p className="signin-text">
          Don't have an account? <a href="#">Sign up</a>
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
        <h1>Kinda HMS</h1>
        <h3>You’re welcome</h3>
      </div>
    </div>
  );
};

export default LoginPage;
