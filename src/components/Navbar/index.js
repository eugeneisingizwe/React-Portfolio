import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";



function Navbars ({props}) {
    return (


  <Navbar className="navbar">

    <Link className="nav-link" to="/">
      <h4 class="my-name">Eugene Isingizwe</h4>
    </Link>

  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link to="/about">
        <a class="nav-link" href="#aboutme">About Me <span class="sr-only"></span></a>
      </Link>
      </li>

      <li class="nav-item">
      <Link to="/portfolio">
        <a class="nav-link" href="#portfolio">Portfolio</a>
        </Link>
      </li>

      <li class="nav-item">
      <Link to="/contact">
        <a class="nav-link" href="#contactme">Contact Me</a>
        </Link>
      </li>

      <li class="nav-item">
      <Link to="/resume">
        <a class="nav-link" href="#myresume">Resume</a>
        </Link>
      </li>
    </ul>
  </div>
</Navbar>
    );
}

export default Navbars;