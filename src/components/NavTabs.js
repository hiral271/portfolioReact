import React from "react";
import "../pages/Navbar/navbar.css"


// const styles = {
//   navbarStyle: {
//     background: "#006b76",
//     justifyContent: "flex-end",
//     height: 63,
//     Color:"#006b76",
//     fontSize:25,
//     //#006b76
//   },
  
// };


function NavTabs(props) {
  return (
    <nav className="navbar">
    <ul className="nav nav-tabs"
    >
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Project"
          onClick={() => props.handlePageChange("Project")}
          className={props.currentPage === "Project" ? "nav-link active" : "nav-link"}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
    </nav>
  );
}

export default NavTabs;