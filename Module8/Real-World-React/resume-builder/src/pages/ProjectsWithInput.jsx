import React, { useContext, useState } from "react";
import { ProjectsContext } from "../contexts/ProjectsContext";

import Title from "../components/Title";
import Nav from "../components/Nav";

function ProjectsWithInput() {
  const { projects, setProjects } = useContext(ProjectsContext);

  const [titleValue, setTitleValue] = useState("");
  const [stackValue, setStackValue] = useState("");

  const handleTitleChange = (event) => {
    event.preventDefault()
    setTitleValue(event.target.value);
  };

  const handleStackChange = (event) => {
    event.preventDefault()
    setStackValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProject = { title: titleValue, stack: stackValue};
    setProjects(
      (projects) => [...projects, newProject]
      )
      setStackValue("")
      setTitleValue("")
  };

  return (
    <div className="Projects">
      <Nav />
      <Title text="Projects" textColor="pink" />
      <ul>
        {projects.map((project) => {
          return (
            <li>
              <h3 style={{ color: "white" }}>{project.title}</h3>
              <p style={{ color: "white" }}>{project.stack}</p>
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={titleValue}
          onChange={handleTitleChange}
          placeholder="Project Title"
        />
        <input
          type="text"
          name="stack"
          value={stackValue}
          onChange={handleStackChange}
          placeholder="Project Stack"
        />
        <button type="submit">Add to project</button>
      </form>
    </div>
  );
}

export default ProjectsWithInput;
