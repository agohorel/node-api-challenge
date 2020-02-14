import React, { useEffect, useState } from "react";
import axios from "axios";

import { Project } from "./Project";
import { CardContainer } from "./styledComponents";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <CardContainer>
      {projects.map(project => (
        <Project key={project.id} project={project}></Project>
      ))}
    </CardContainer>
  );
};
