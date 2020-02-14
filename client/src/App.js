import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Projects } from "./components/Projects";

function App() {
  return (
    <div>
      <Router>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/projects/:id"></Route>
      </Router>
    </div>
  );
}

export default App;
