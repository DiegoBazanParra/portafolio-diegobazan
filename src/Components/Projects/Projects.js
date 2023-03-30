import "../../Styles/Projects.css";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectCard2 from "./ProjectCard2";

import Waves from "./Waves";
function Projects() {
  return (
    <div className="project" id="projects">
      <Waves />
      <div className="project-content">
        <h2 className="project-title">Proyectos Wordpress</h2>
        <ProjectCard2 />
      </div>
      <Waves />
      <div className="project-content">
        <br/>
        <h2 className="project-title">Proyectos React JS</h2>
        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects;
