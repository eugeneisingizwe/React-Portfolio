import React from "react";
import {BrowserRouter as Router, Route,Routes, Navigate, HashRouter } from "react-router-dom";
import Navbar from "../Navbar";
import About from "../About";
import Portfolios from "../Portfolios";
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
            <Route path="/portfolios" element={Portfolios}/> 
            <Route path="/resume" element={Resume} />
            <Route path="/contact" element={Contact} /> 
            <Route path="*" element={<About />} />
                </Routes>
          </div>
                
          </Router>
            
        );
    }


export default Header;