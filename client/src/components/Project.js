import React from "react";
import { Card, StyledLink } from "./styledComponents";

export const Project = ({ project }) => {
  return (
    <Card>
      <StyledLink to={`/projects/${project.id}`}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p>completed: {project.completed.toString()}</p>
      </StyledLink>
    </Card>
  );
};
