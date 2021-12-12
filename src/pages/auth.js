import React from "react";
import { useNavigate } from "react-router-dom";
const Auth = ({ authenticate }) => {
  const navigate = useNavigate();

  //auth button handler
  const onClick = () => {
    authenticate();
    navigate("profile");
  };
  return (
    <div>
      <h2> Please authenticate to continue </h2>
      <button onClick={onClick}>Authenticate</button>
    </div>
  );
};

export default Auth;
