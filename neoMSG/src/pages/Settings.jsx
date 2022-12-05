import React from 'react'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

var checked = false;

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


const Settings = () => {
  return (
    <div className="settings">
      <h1>Settings</h1>
      <div className="settings-container">
        <Link to="/" id="close-settings">X</Link>
        <div id="settings-flex">
          <div id="darkmode-flex">
            <p>Light Mode</p>
            { toggle() }
          </div>
          <Link to="/login" onClick={()=>signOut(auth)} id="logout-button">Logout</Link>
        </div>
      </div>
    </div>
  )
}

export default Settings