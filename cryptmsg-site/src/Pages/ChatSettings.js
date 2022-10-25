import React from 'react'
import { Component } from 'react'
import './ChatSettings.css'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

function OpenSidebar(name) {
    var sidebar = document.getElementById(`${name}-sidebar`);
    document.getElementById(`${name}-openbtn`).style.display = "none";
    document.getElementById(`${name}-closebtn`).style.display = "block";
    sidebar.style.width = "17vw";
    sidebar.style.borderWidth = "0 0 2px 2px";
    if (name == "contacts") {
        sidebar.style.borderWidth = "0 2px 2px 0";
    }
}

function CloseSidebar(name) {
    var sidebar = document.getElementById(`${name}-sidebar`);
    sidebar.style.width = "0";
    sidebar.style.borderWidth = "0";
    document.getElementById(`${name}-openbtn`).style.display = "block";
    document.getElementById(`${name}-closebtn`).style.display = "none";
}

class Settings extends Component { render() { return (
    <div className='chat-settings'>
        <div className='left-side'>
            <IconContext.Provider value={{ className: 'settings-icon' }}>
                <button className="settings-buttons" id="contacts-openbtn" onClick={() => OpenSidebar("contacts")}>
                    <FaIcons.FaUsers />
                </button>
            </IconContext.Provider>
            <div className='sidebar' id="contacts-sidebar" >
                <IconContext.Provider value={{ className: 'settings-icon' }}>
                    <button className="settings-buttons" id="contacts-closebtn" onClick={() => CloseSidebar("contacts")}>
                        <FaIcons.FaRegTimesCircle />
                    </button>
                </IconContext.Provider>
            </div>
        </div>
        <div className='right-side'>
            <IconContext.Provider value={{ className: 'settings-icon' }}>
                <button className="settings-buttons" id="chat-settings-openbtn" onClick={() => OpenSidebar("chat-settings")}>
                    <FaIcons.FaCog />
                </button>
            </IconContext.Provider>
            <div className='sidebar' id="chat-settings-sidebar">
                <IconContext.Provider value={{ className: 'settings-icon' }}>
                    <button className="settings-buttons" id="chat-settings-closebtn" onClick={() => CloseSidebar("chat-settings")}>
                        <FaIcons.FaRegTimesCircle />
                    </button>
                </IconContext.Provider>
            </div>
        </div>
    </div>
);}}

export default Settings