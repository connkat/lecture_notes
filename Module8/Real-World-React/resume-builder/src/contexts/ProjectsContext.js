import { createContext, useState } from "react";

export const ProjectsContext = createContext();

const ProjectsContextProvider = (props) => {
  const [projects, setProjects] = useState([
    { title: "tinyApp", stack: "EJS, HTML" },
    { title: "tweeter", stack: "CSS, JQUERY" },
  ]);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {props.children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsContextProvider;
