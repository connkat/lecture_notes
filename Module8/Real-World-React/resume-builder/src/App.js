import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import ProjectsContextProvider from "./contexts/ProjectsContext";

//styling
import "./App.css";
import ProjectsWithInput from "./pages/ProjectsWithInput";

const projects = [];

function App() {
  return (
    <div className="App">
      <ProjectsContextProvider>
        <Router>
          <Routes>
            {/* <Switch > */}
            <Route exact path="/" element={<Home projects={projects} />} />
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/projects-with-input" element={<ProjectsWithInput />} />

          </Routes>
        </Router>
      </ProjectsContextProvider>
    </div>
  );
}

export default App;
