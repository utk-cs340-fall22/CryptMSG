import React from 'react'
import './Chatbox.css'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

const scrollToBottom = () =>{ 
    window.scrollTo({ 
        top: document.documentElement.scrollHeight, 
        behavior: 'smooth'
    }); 
}; 

function SendText() {
    var text = document.getElementById("input-box").innerHTML;

    if (text.length > 0) {
        var msg = document.createElement("div");
        msg.className = "messages";
        msg.id = "sent"
        msg.innerHTML = text;
        document.getElementById("message-board").appendChild(msg);
    }

    document.getElementById("input-box").innerHTML = "";
    scrollToBottom();
}

var EnterInput = function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        SendText();
    }
}

function Chatbox() {     
    return (
        <div className='chatbox'>
            <div>
                <div id="input-box" onKeyDown={EnterInput} contentEditable />
                {/* <button id="input-submit" onClick={SendText}>&#9650;</button> */}
                <IconContext.Provider value={{ className: 'input-submit-icon' }}>
                    <button id="input-submit" onClick={SendText}>
                        {/* &#9650; */}
                        <FaIcons.FaPaperPlane />
                    </button>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Chatbox