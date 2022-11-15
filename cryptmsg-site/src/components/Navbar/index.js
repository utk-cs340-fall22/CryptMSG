import React /*, { useState } */ from 'react';
import * as ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi'
import * as BiIcons from 'react-icons/bi'
import { IconContext } from 'react-icons/lib'
import './navbar.css';
import Settings from '../Settings';
// import { FaAppStore } from 'react-icons/fa';

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
        <ProfileSelector userName="Profile 1" />
        <ProfileSelector userName="Profile 2" />
        <ProfileSelector userName="Profile 3" />
        <ProfileSelector userName="Profile 4" />
        <ProfileSelector userName="Profile 5" />
        <div className="nav-settings" onClick={displaySettings}>
          <IconContext.Provider value={ {className: 'nav-settings-icon'} }>
            <FiIcons.FiSettings />
          </IconContext.Provider>
          Settings
        </div>
      </nav>
    </div>
  );
}

// Displays a tile in the sidenav for the people that the user can chat with
function ProfileSelector(props) {
  return(
    <div className="nav-profile-option">
      <IconContext.Provider value={ {className: 'nav-sidebar-icon'} }>
        <BiIcons.BiPencil />
      </IconContext.Provider>
      {props.userName}
    </div>
  )
}

function displaySettings () {
  let settings = <Settings />
  const root = ReactDOM.createRoot(document.getElementById("empty-settings"));
  root.render(settings);

  document.getElementsByClassName("chatbox")[0].style.display = "none";
  document.getElementById("message-board").style.display = "none";
}

export default Navbar;