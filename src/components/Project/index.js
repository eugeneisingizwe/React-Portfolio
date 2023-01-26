import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function ProjectCards (props) {
    return (
  <div className="card" >
  <div className="card-body">
  <img alt={props.name} src={props.image} />
</div>

<div className="Project-content">
    <h5 className="card-title">{props.title}</h5>
    <p class="project-icons-container">
    <a href={props.github}><img class="project-icon" src="https://img.icons8.com/fluent/48/000000/github.png" alt="github Icon"/></a>
    <a href={props.link}><img class="project-icon" src="https://img.icons8.com/pastel-glyph/64/null/external-link--v2.png" alt="links to deployed app" /></a>
    </p>'
    <h4 className="summary-title">{props.summaryTitle}</h4>
      <p class="summary">
        ({props.summary})
      </p>
      <h4 className="tech-title">{props.techTitle}</h4>
      <p class="tech">
        ({props.tech})
      </p>
  </div>
</div>
    )
}

export default ProjectCards;