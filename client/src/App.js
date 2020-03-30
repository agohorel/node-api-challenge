import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { ProjectDetails } from "./components/ProjectDetails";
import { GlobalStyle } from "./components/styledComponents";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Redirect from="/" to="/projects" />
        <Nav></Nav>
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
