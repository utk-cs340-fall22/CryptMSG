import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

// FOR LOCALHOST TESTING:
// redirectUri = {"http://localhost:3000/messages"}
// redirectUri = {"http://127.0.0.1:8000/messages"}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain = "dev-px7bcvvev6wa7dfa.us.auth0.com"
      clientId = "BaEPsOUj2QzvJKjPKst09hRrmvPe7flf"
      redirectUri = {"http://127.0.0.1:8000"}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);