
import React from "react";
import ProjectCards from "../Project";
import portfolioData from "../../utils/portfolioData";
import "bootstrap/dist/css/bootstrap.min.css";

function Wrapper (props){
    return <div className="wrapper">{props.children}</div>
}

function Portfolio() {
    return(
        <section className="container">
            <div className="project">
                <h1 className="project-title">Completed Projects</h1>
                <hr></hr>
            </div>

         <Wrapper id="card-data">
          {portfolioData.map((project) =>(
            <ProjectCards key={project.id} image={project.image} title={project.title} github={project.github} link={project.link} summaryTitle={project.summaryTitle} summary={project.summary} techTitle={project.techTitle} tech={project.tech} />
          ))}  
            </Wrapper>   
        </section>
    );
}

export default Portfolio;
