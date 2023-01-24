import React from "react";
import Nav from "react-bootstrap/Nav";

function Resume() {
    return(
        <Nav className="links" style={{margin: "0 1rem"}}>
            <a
            href="https://google.com"
            className="nav-link"
            download
            >
                Resume
            </a>
        </Nav>
    );
    
}

export default Resume;