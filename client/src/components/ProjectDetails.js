import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Action } from "./Action";

export const ProjectDetails = () => {
  const [actions, setActions] = useState([]);
  let params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/actions/${params.id}`)
      .then(res => setActions(res.data))
      .catch(err => console.error(err));
  }, [params.id]);

  return (
    <div>
      {actions.map(action => (
        <Action key={action.id} action={action}></Action>
      ))}
    </div>
  );
};
