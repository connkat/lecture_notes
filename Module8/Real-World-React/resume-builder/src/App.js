import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

//styling
import "./App.css";
// import ProjectsContextProvider from "./contexts/ProjectsContext";

const projects = [];

function App() {
  return (
    <div className="App">
      {/* <ProjectsContextProvider> */}
        <Router>
          <Routes>
            {/* <Switch > */}
            <Route exact path="/" element={<Home projects={projects} />} />
            {/* <Route exact path="/" component={Home}></Route> */}
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/projects" element={<Projects />} />
          </Routes>
        </Router>
      {/* </ProjectsContextProvider> */}
    </div>
  );
}

export default App;
