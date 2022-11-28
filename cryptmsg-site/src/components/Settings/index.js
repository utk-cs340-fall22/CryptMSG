import React from 'react'
import './settings.css';
import LogoutButton from './logout';
import { Auth0Provider } from '@auth0/auth0-react';
import UserProfile from './UserProfile';

var checked = false;

const scrollToBottom = () =>{ 
  window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'smooth'
  }); 
}; 

function toggle() {  
  if (checked === false) {
    return (
      <label class="switch">
        <input type="checkbox" id="checkbox" onChange={lightmode} />
        <span class="slider round" />
      </label>
    )
  } else { 
    return (
      <label class="switch">
          <input type="checkbox" id="checkbox" onChange={lightmode} defaultChecked />
          <span class="slider round" />
      </label>
    )
  }
}

// <button id="logout-button">Logout</button>
// redirectUri = {"http://localhost:3000"}
// redirectUri = {"http://localhost:3000/messages"}

function Settings() {
  return (
    <div id="settings">
      <p id="close-settings" onClick={closeSettings}>X</p>
      <div id="settings-flex">
        <h1>Settings</h1>
        <Auth0Provider
          domain = "dev-px7bcvvev6wa7dfa.us.auth0.com"
          clientId = "BaEPsOUj2QzvJKjPKst09hRrmvPe7flf"
          redirectUri = {"https://cryptmsg.net"}
        >
           <UserProfile />
        </Auth0Provider>
        <div id="darkmode-flex">
          <p>Light Mode</p>
          { toggle() }
        </div>
        <Auth0Provider
          domain = "dev-px7bcvvev6wa7dfa.us.auth0.com"
          clientId = "BaEPsOUj2QzvJKjPKst09hRrmvPe7flf"
          redirectUri = {"https://cryptmsg.net/messages"}
        >
          <LogoutButton />
        </Auth0Provider>
      </div>
    </div>
  )
}

function closeSettings() {
  const settings = document.getElementById("settings");
  settings.remove();

  document.getElementsByClassName("chatbox")[0].style.display = "flex";
  document.getElementById("message-board").style.display = "flex";

  scrollToBottom();
}

function lightmode() {
  var r = document.querySelector(':root');
  var checkBox = document.getElementById("checkbox");
  checked = checkBox.checked;
  
  if (checked === true) {
    r.style.setProperty('--main-background', "#f6f6f6");
    r.style.setProperty('--light-text-color', "black");
    r.style.setProperty('--accent-color', "#0099ff");
    r.style.setProperty('--light-gray', "#e7e7e7");
    r.style.setProperty('--lighter-gray', "#dedede");
    r.style.setProperty('--settings-hover', "#cccccc");
  } else {
    r.style.setProperty('--main-background', "#111111");
    r.style.setProperty('--light-text-color', "#f6f6f6");
    r.style.setProperty('--accent-color', "#ffcb74");
    r.style.setProperty('--light-gray', "#181818");
    r.style.setProperty('--lighter-gray', "#212121");
    r.style.setProperty('--settings-hover', "#333333");
  } 
}

export default Settings