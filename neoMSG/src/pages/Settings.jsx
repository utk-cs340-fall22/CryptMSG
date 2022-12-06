import React , { useContext } from 'react'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

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
    r.style.setProperty('--background-color', "#f6f6f6");
    r.style.setProperty('--light-text-color', "black");
    r.style.setProperty('--accent-color', "#0099ff");
    r.style.setProperty('--light-gray', "#e7e7e7");
    r.style.setProperty('--lighter-gray', "#dedede");
    r.style.setProperty('--settings-hover', "#cccccc");
    r.style.setProperty('--chat-preview-gray', "#181818");
  } else {
    r.style.setProperty('--background-color', "#111111");
    r.style.setProperty('--light-text-color', "#f6f6f6");
    r.style.setProperty('--accent-color', "#ffcb74");
    r.style.setProperty('--light-gray', "#181818");
    r.style.setProperty('--lighter-gray', "#212121");
    r.style.setProperty('--settings-hover', "#333333");
    r.style.setProperty('--chat-preview-gray', "lightgray");
  } 
}


const Settings = () => {
  const {currentUser} = useContext(AuthContext);

  return (
    <div className="settings">
      <h1>Settings</h1>
      <div className="settings-container">
        <Link to="/" id="close-settings"><AiIcons.AiOutlineCloseCircle/></Link>
        <div id="settings-flex">
          <span className="user-info">Display Name: <span>{currentUser.displayName}</span></span>
          <span className="user-info">Email: <span>{currentUser.email}</span></span>
          <span className="user-info">Avatar: <img src={currentUser.photoURL} alt="" className="profile-avatar"/></span>
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