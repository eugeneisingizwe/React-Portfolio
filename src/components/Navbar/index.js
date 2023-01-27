import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";



function Navbars ({props}) {
    return (


  <Navbar className="navbar">

    <Link className="nav-name" to="/">
      <h4 class="my-name">Eugene Isingizwe</h4>
    </Link>

  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-item-link" to="/about">
        About Me
      </Link>
      </li>

      <li class="nav-item">
      <Link class="nav-item-link" to="/portfolio">
       Portfolio
        </Link>
      </li>

      <li class="nav-item">
      <Link class="nav-item-link" to="/contact">
        Contact Me
        </Link>
      </li>

      <li class="nav-item">
      <Link class="nav-item-link" to="/resume">
        Resume
        </Link>
      </li>
    </ul>
  </div>
</Navbar>
    );
}

export default Navbars;