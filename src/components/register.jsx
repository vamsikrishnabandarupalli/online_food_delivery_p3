import { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import { Link } from "react-router-dom";

export default function Register({ isOpen, setIsOpen, openLogin }) {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setIsRegistered(true);
    setTimeout(() => {
      setIsOpen(false);  
      openLogin();    
    }, 500); 
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={() => setIsOpen(false)}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>&times;</button>

        <form className="mt-3" onSubmit={handleRegister}>
          <h4 className="popup-title">Register</h4>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter Username" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter Password" required />
          </div>
          <button type="submit" className="submit-btn m-auto">Register</button>
        </form>

        <p className="signup-text">
          Already have an account? <Link className="text-decoration-none" onClick={openLogin}>Login Here</Link>
        </p>

        {isRegistered && <p className="success-message">Registration successful! Redirecting to login...</p>}
      </div>
    </div>
  );
}

Register.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  openLogin: PropTypes.func.isRequired,
};
