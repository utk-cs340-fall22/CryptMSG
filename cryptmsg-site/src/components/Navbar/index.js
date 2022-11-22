import React /*, { useState } */ from 'react';
import * as ReactDOM from 'react-dom/client';
// import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi'
// import * as BiIcons from 'react-icons/bi'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import './navbar.css';
import Settings from '../Settings';
import { Auth0Provider } from '@auth0/auth0-react';
import MessagingUser from './MessagingUser';

var EnterInput = function(event) {
  if (event.keyCode === 13) {
      event.preventDefault();
      newMessage();
  }
}

var opened = false;

function Navbar() {
  // const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => setSidebar(!sidebar);

  return(
    <div className="nav-container">
      {/* <IconContext.Provider value={ {className: 'nav-bars-icon'} }>
        <FaIcons.FaBars onClick={showSidebar}/>
      </IconContext.Provider> */}
      {/* <Link to="/home" className="nav-title"> */}
        <h1 className="nav-title">CryptMSG</h1>
      {/* </Link> */}

      {/* Side navbar */}
      {/* <nav className={sidebar ? 'nav-sidebar active' : 'nav-sidebar'}> */}
      <nav className="nav-sidebar active">
        <div className="nav-sidenav-icon-container">
          {/* <IconContext.Provider value={ {className: 'nav-close-icon'} }>
            <IoIcons.IoMdClose onClick={showSidebar}/>
          </IconContext.Provider> */}
        </div>
        {/* <ProfileSelector userName="Profile 1" />
        <ProfileSelector userName="Profile 2" />
        <ProfileSelector userName="Profile 3" />
        <ProfileSelector userName="Profile 4" />
        <ProfileSelector userName="Profile 5" /> */}
        <p id="nav-message-title">Chatroom ID:</p>
        <p id="nav-message-hash"></p>
        <div id="nav-user">
          <Auth0Provider
            domain = "dev-px7bcvvev6wa7dfa.us.auth0.com"
            clientId = "BaEPsOUj2QzvJKjPKst09hRrmvPe7flf"
            redirectUri = {"http://cryptmsg.net/home"}
          >
            <MessagingUser />
          </Auth0Provider>
        </div>


        <div className="nav-settings" onClick={displaySettings}>
          <IconContext.Provider value={ {className: 'nav-settings-icon'} }>
            <FiIcons.FiSettings />
          </IconContext.Provider>
          Settings
        </div>
      </nav>

        {/* <button id="new-message-button">Send</button> */}
        <textarea id="new-message-input" rows="1" cols="20" maxLength="27" onKeyDown={EnterInput} />
    
      <div onClick={newMessage} id="icon">
        <IconContext.Provider value={ {className: 'nav-newMessage-icon'} }>
          <FaIcons.FaPenNib />
        </IconContext.Provider>
      </div>
    </div>
  );
}

// Displays a tile in the sidenav for the people that the user can chat with
// function ProfileSelector(props) {
//   return(
//     <div className="nav-profile-option">
//       <IconContext.Provider value={ {className: 'nav-sidebar-icon'} }>
//         <BiIcons.BiPencil />
//       </IconContext.Provider>
//       {props.userName}
//     </div>
//   )
// }

function displaySettings () {
  let settings = <Settings />
  const root = ReactDOM.createRoot(document.getElementById("empty-settings"));
  root.render(settings);

  document.getElementsByClassName("chatbox")[0].style.display = "none";
  document.getElementById("message-board").style.display = "none";
}

var hash;

function newMessage () {
  let newChatBox = document.getElementById("new-message-input");
  let newChatIcon = document.getElementsByClassName("nav-newMessage-icon")[0].style;
  
  if (opened === false) {
    newChatBox.style.visibility = "visible";
    newChatBox.style.width = "255px";
    newChatBox.style.transitionDuration = "1s";
    newChatIcon.border = "1px solid var(--accent-color)";
    newChatIcon.borderRadius = "10px";
    newChatIcon.padding = "4px";

    opened = true;
  } else {
    submitHash(newChatBox);
    
    newChatBox.style.visibility = "hidden";
    newChatBox.style.width = "0px";
    newChatBox.style.transitionDuration = "0.2s";
    newChatIcon.padding = "5px";
    newChatIcon.border = "none";
    opened = false;
  }
}

function submitHash(newChatBox) {
  hash = newChatBox.value;
  console.log(hash);
  newChatBox.value = "";
  if (hash !== "") document.getElementById("nav-message-hash").innerHTML = hash;
}

export default Navbar;