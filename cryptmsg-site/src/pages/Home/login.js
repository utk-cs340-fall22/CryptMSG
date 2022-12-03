import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (isAuthenticated) {
    return <div><Link to="/messages" className="home-link">Welcome</Link></div>;
  } else {
    return <button className="home-link" onClick={()=>loginWithRedirect()}>Log In</button>;
  }
};

export default LoginButton;