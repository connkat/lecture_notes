import { createContext, useState } from "react";

export const ProjectsContext = createContext();

const ProjectsContextProvider = (props) => {
    const [projects, setProjects] = useState([
      { title: "tinyApp", stack: "EJS, HTML" },
      { title: "tweeter", stack: "CSS, JQUERY" },
    ]);

//   const projects = [
//     { title: "tinyApp", stack: "EJS, HTML" },
//     { title: "tweeter", stack: "CSS, JQUERY" },
//   ];

  return (
    <ProjectsContextProvider value={{ projects, setProjects }}>
      {props.children}
    </ProjectsContextProvider>
  );
};

export default ProjectsContextProvider;
