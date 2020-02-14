import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Projects } from "./components/Projects";
import { ProjectDetails } from "./components/ProjectDetails";
import { GlobalStyle } from "./components/styledComponents";

function App() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Router>
        <Route exact path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/projects/:id">
          <ProjectDetails></ProjectDetails>
        </Route>
      </Router>
    </div>
  );
}

export default App;
