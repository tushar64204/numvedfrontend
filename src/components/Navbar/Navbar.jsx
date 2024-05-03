import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navigate = useNavigate();

  const navToggle = () => {
    setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");

    // Icon Toggler
    setIcon(icon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler");
  };

  const handleNavigation = (path) => {
    navigate(path);
    navToggle(); // Close the menu after navigation
  };

  return (
    <div>
      
      <nav className="nav">
      <img
        src="./logo.png"
        alt="Company Logo"
        className="logo"
      
      />
        <a href="/" className="navybrand" onClick={() => handleNavigation("/")}>
          
          NumericVeda
        </a>
        <ul className={active}>
          <li className="nav__item">
            <a href="/" className="nav__link" onClick={() => handleNavigation("/")}>
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="/message.html" target="_blank" className="nav__link" onClick={() => handleNavigation("/message.html")}>
              messageUs
            </a>
          </li>
          <li className="nav__item">
            <a href="/sir.html" target="_blank" className="nav__link" onClick={() => handleNavigation("/drBhatia")}>
              Dr. Bhatia
            </a>
          </li>
          
          <li className="nav__item">
          <Link to="/contact" target="_blank" >
              Contact
              </Link>
          </li>
          <li className="nav__item">
          <Link to="/Login">
          Login/Signup
              </Link>
              
           
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
