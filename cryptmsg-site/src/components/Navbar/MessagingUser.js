import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const MessagingUser = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <div id="nav-username">Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <img src={user.picture} alt="" id="nav-img" />
    )
  );
};

export default MessagingUser;