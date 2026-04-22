import React from "react";
import { useParams } from "react-router-dom";

const User = () => {

  const { username } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <h2>Welcome {username}</h2>
    </div>
  );
};

export default User;