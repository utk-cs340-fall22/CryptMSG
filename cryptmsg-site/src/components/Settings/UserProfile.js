import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (user.username === NULL) {
    var name = user.nickname;
  } else {
    name = user.username;
  }

  return (
    isAuthenticated && (
      <div id="profile-wrapper">
        <div id="text-wrapper">
          <p>Username:
            <span>{name}</span>
          </p>
          <p>Email:
            <span>{user.email}</span>
          </p>
        </div>
        
        <img src={user.picture} alt="" />
      </div>
    )
  );
};

export default UserProfile;