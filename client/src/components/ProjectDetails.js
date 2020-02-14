import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Action } from "./Action";
import { CardContainer } from "./styledComponents";

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
    <CardContainer>
      {actions.map((action, i) => (
        <Action key={action.id} action={action} index={i + 1}></Action>
      ))}
    </CardContainer>
  );
};
