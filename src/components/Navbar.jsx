import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="logo">PGYM</h3>
      <ul className="nav-links">
        
        <li><a href="">Services</a></li>
        <li><a href="">Facility</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">join now</a></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
