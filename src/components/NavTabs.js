import React from "react";
import "../components/navbar.css"
import { Link, useLocation } from "react-router-dom";
// import Footer from "../pages/Footer/Footer"


function NavTabs() {
 
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <div id="navbar">
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Projects"
          className={location.pathname === "/Projects" ? "nav-link active" : "nav-link"}
        >
         Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      
    </ul>
    </div>
   
  );
}

export default NavTabs;
