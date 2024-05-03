import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setActive(false); // Close the menu after navigation
  };

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <nav className="nav">
      <div className="nav__header">
        <img src="./logo.png" alt="Company Logo" className="logo" />
        <a href="/" className="navybrand" onClick={() => handleNavigation("/")}>
          <span className="brand-text">NumericVeda</span>
        </a>
      </div>
      <div className={`nav__toggler ${active ? "toggle" : ""}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`nav__menu ${active ? "nav__active" : ""}`}>
        <li className="nav__item">
          <a href="/" className="nav__link" onClick={() => handleNavigation("/")}>
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/message.html" className="nav__link" onClick={() => handleNavigation("/message.html")}>
            Message Us
          </a>
        </li>
        <li className="nav__item">
          <a href="/sir.html" className="nav__link" onClick={() => handleNavigation("/drBhatia")}>
            Dr. Bhatia
          </a>
        </li>
        <li className="nav__item">
          <Link to="/contact" className="nav__link" onClick={() => handleNavigation("/contact")}>
            Contact
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Login" className="nav__link" onClick={() => handleNavigation("/Login")}>
            Login/Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
