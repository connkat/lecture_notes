import React, { useContext } from "react";
import { ProjectsContext } from "../contexts/ProjectsContext";

import Title from "../components/Title";
import Nav from "../components/Nav";

function Projects() {
//   const { projects } = useContext(ProjectsContext);

const projects = [
        { title: "tinyApp", stack: "EJS, HTML" },
        { title: "tweeter", stack: "CSS, JQUERY" },
      ];

  return (
    <div className="Projects">
      <Nav />
      <Title text="Projects" textColor="pink" />
      <ul>
        {projects.map((project) => {
          return (
            <li key={project.title}>
              <h3 style={{ color: "white" }}>{project.title}</h3>
              <p style={{ color: "white" }}>{project.stack}</p>
            </li>
          );
        })}
      </ul>

    </div>
  );
}

export default Projects;
