import PropTypes from "prop-types";
import "./style.css";
import { Link } from "react-router-dom";

export default function Login({ isOpen, setIsOpen, openRegister }) {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={() => setIsOpen(false)}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>&times;</button>

        <form className="mt-3">
          <h4 className="popup-title">Login</h4>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter Password" required />
          </div>
          <a href="" className="text-start m-0 text-decoration-none"><p>Forgot Password?</p></a>
          <button type="submit" className="submit-btn m-auto">Login</button>
        </form>

        <p className="signup-text">
          Don&apos;t have an account? <Link className="text-decoration-none" onClick={openRegister}>Register Here</Link>
        </p>
      </div>
    </div>
  );
}

Login.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  openRegister: PropTypes.func.isRequired,
};
