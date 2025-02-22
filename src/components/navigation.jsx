import { MdOutlineFoodBank } from "react-icons/md";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./style.css";

export default function Navigationbar() {
  const [state, setState] = useState({
    isSidebarOpen: false,
    isLoginOpen: false,
    isSignupOpen: false,
  });

  const toggleState = (key) => {
    setState((prevState) => ({
      isSidebarOpen: false,
      isLoginOpen: false,
      isSignupOpen: false,
      [key]: !prevState[key],
    }));
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/addrestaurants", label: "Add Restaurant" },
    { path: "/restaurants", label: "Restaurants" },
    { path: "/about", label: "About" },
    { path: "/search", icon: <FaSearch className="fs-5" /> },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-danger p-3">
        <div className="container-fluid">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand m-0 p-0 text-white">
            <b className="text-center fs-6">
              <MdOutlineFoodBank className="fs-2 mb-1" /> FlavorDash
            </b>
          </Link>

          {/* Sidebar Toggle Button */}
          <button className="navbar-toggler fs-6" onClick={() => toggleState("isSidebarOpen")}>
            <span className="navbar-toggler-icon fs-6"></span>
          </button>

          {/* Large Screen Navbar */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto align-items-center">
              {navLinks.map(({ path, label, icon }) => (
                <li className="nav-item" key={path}>
                  <Link to={path} className="nav-link text-white">
                    {icon || label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right Side Icons & Buttons */}
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <button className="btn btn-outline-light me-2" onClick={() => toggleState("isLoginOpen")}>
                  Login
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-light me-2" onClick={() => toggleState("isSignupOpen")}>
                  Register
                </button>
              </li>
              <li className="nav-item">
                <Link to="/user" className="nav-link text-white">
                  <FaUserCircle className="fs-4" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link text-white position-relative">
                  <IoCart className="fs-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div className={`sidebar ${state.isSidebarOpen ? "show" : ""}`}>
        <div className="sidebar-header d-flex justify-content-between align-items-center">
          <b className="fs-5 text-white">
            <MdOutlineFoodBank className="fs-3 mb-1" /> FlavorDash
          </b>
          <button className="btn-close btn-close-white" onClick={() => toggleState("isSidebarOpen")}></button>
        </div>
        <hr />
        <div className="sidebar-body text-center">
          <ul className="navbar-nav">
            {navLinks.map(({ path, label, icon }) => (
              <li className="nav-item" key={path}>
                <Link to={path} className="nav-link text-white" onClick={() => toggleState("isSidebarOpen")}>
                  {icon || label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Sidebar Bottom Section */}
          <ul className="navbar-nav mt-3">
            <li className="nav-item">
              <button className="btn btn-outline-light w-100" onClick={() => toggleState("isLoginOpen")}>
                Login
              </button>
            </li>
            <li className="nav-item mt-2">
              <button className="btn btn-outline-light w-100" onClick={() => toggleState("isSignupOpen")}>
                Register
              </button>
            </li>
            <li className="nav-item mt-3">
              <Link to="/user" className="nav-link text-white">
                <FaUserCircle className="fs-2" />
              </Link>
            </li>
            <li className="nav-item mt-2">
              <Link to="/cart" className="nav-link text-white">
                <IoCart className="fs-2" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Popup Login & Register Forms */}
      <Login isOpen={state.isLoginOpen} setIsOpen={() => toggleState("isLoginOpen")} openRegister={() => toggleState("isSignupOpen")} />
      <Register isOpen={state.isSignupOpen} setIsOpen={() => toggleState("isSignupOpen")} openLogin={() => toggleState("isLoginOpen")} />
    </>
  );
}
