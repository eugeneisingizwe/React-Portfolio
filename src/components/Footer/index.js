import React from "react";

function Footer() {
    return (
        <footer>
        <section class="contact-info">
            <div class="links">
                <a class="github" href="#mygithub">Github</a>
                <i class="fa fa-github" style={{"font-size":"36px"}}></i>
                <a class="LinkedIn" href="#mylinkedIn">LinkedIn</a>
                <i class="fa fa-linkedin-square" style={{"font-size":"36px"}}></i>
            </div>
        </section>
        <p>&copy; 2022 Eugene Isingizwe Portfolio.</p>
    </footer>
    )
}

export default Footer;