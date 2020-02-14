import React from "react";

export const Action = ({ action }) => {
  console.log(action);
  return (
    <div>
      <h3>{action.description}</h3>
      <p>{action.notes}</p>
      <p>completed: {action.completed.toString()}</p>
    </div>
  );
};
