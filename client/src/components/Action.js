import React from "react";
import { Card } from "./styledComponents";

export const Action = ({ action, index }) => {
  return (
    <Card>
      <h3>
        #{index}: {action.description}
      </h3>
      <p>{action.notes}</p>
      <p>completed: {action.completed.toString()}</p>
    </Card>
  );
};
