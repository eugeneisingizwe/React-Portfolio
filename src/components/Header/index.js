import React from "react";
import {BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Navbar from "../Navbar";
import About from "../About";
import Portfolio from "../Portfolio";
import Resume from "../Resume";
import Contact from "../Contact";

function Header() {
  
        return(
            <Router>
 
            <header>
                <Navbar/>
            </header>
            <div className="scroll-containers">
                <Routes>

            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} /> 
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} /> 
            <Route path="*" element={<About />} />
                </Routes>
          </div>
                
          </Router>
            
        );
    }


export default Header;