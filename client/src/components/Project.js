import React from "react";
import { Link } from "react-router-dom";

export const Project = ({ project }) => {
  console.log(project);
  return (
    <div>
      <Link to={`/projects/${project.id}`}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p>completed: {project.completed.toString()}</p>
      </Link>
    </div>
  );
};
