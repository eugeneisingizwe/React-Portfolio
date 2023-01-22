import React from "react";
// import {Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navbar (props) {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <NavLink to="/about">
        <a class="nav-link" href="#aboutme">About Me <span class="sr-only"></span></a>
      </NavLink>
      </li>

      <li class="nav-item">
      <NavLink to="/portfolios">
        <a class="nav-link" href="#portfolio">Portfolio</a>
        </NavLink>
      </li>

      <li class="nav-item">
      <NavLink to="/contact">
        <a class="nav-link" href="#contactme">Contact Me</a>
        </NavLink>
      </li>

      <li class="nav-item">
      <NavLink to="/resume">
        <a class="nav-link" href="#myresume">Resume</a>
        </NavLink>
      </li>
    </ul>
  </div>
</nav>
    );
}

export default Navbar;