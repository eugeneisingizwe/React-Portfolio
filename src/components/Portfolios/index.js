import React from "react";
// import ProjectCards from "../Projects";

import 'bootstrap/dist/css/bootstrap.min.css';

// // function Wrapper (props) {
// //     return <div className="wrapper">{props.children}</div>
// }

function Portfolio () {

    return (
        <section className="justify-body">
            <div class="work-card">
                <h1>Work</h1>
                <div class="project">
                    <div class="surf-report">
                        <h3>National Parker Founder 
                            <p><a href="https://rarellano5280.github.io/National-Park-Finder/">HTML, CSS, JavaScript</a>
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </h3>
                    </div>
                    <div class="led-wall">
                        <h3>Led Wall Node.LoT</h3>
                        <p><a href="https://thecut.herokuapp.com/login">TheCut App</a></p>
                    </div>
                    <div class="calculator">
                        <h3>calculator React/JavaScript/CSS</h3>
                    </div>
                    <div class="pastel-puzzels">
                        <h3>Pastel Puzzels MERN Stack</h3>
                    </div>
                    <div class="run-buddy">
                        <h3>Run Buddy THML/CSS</h3>
                    </div>
                    <div class="github-rep">
                        <h3>Github Repos</h3>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Portfolio;