import React from "react";

export const Project = ({ project }) => {
  console.log(project);
  return (
    <div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <p>completed: {project.completed.toString()}</p>
    </div>
  );
};
