import React from 'react'
import { Component } from 'react'
import './Chatbox.css'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import autosize from 'autosize';


const scrollToBottom = () =>{ 
    window.scrollTo({ 
        top: document.documentElement.scrollHeight, 
        behavior: 'smooth'
    }); 
}; 

function SendText() {
    var text = document.getElementById("input-box").value;
    var height = document.getElementById("message-board").clientHeight;

    if (text.length > 0) {
        var msg = document.createElement("div");
        msg.className = "messages";
        msg.id = "sent"
        msg.innerHTML = text;
        document.getElementById("message-board").prepend(msg);
        document.getElementById("input-box").value = "";
    }

    document.getElementById("input-box").innerHTML = "";
    scrollToBottom();

    var margin = 750 - height;
    if (margin < 0) margin = 0;
    document.getElementById("message-board").style.marginTop = margin + "px";
}

var EnterInput = function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        SendText();
    }
}



class Chatbox extends Component {   
    componentDidMount(){
        // This causes the text area to autoresize when needing more or less lines of input
        const tarea = document.getElementById("input-box");
        autosize(tarea);
    } 

    render() {
        return (
            <div className='chatbox'>
                <div>
                    <textarea id="input-box" onKeyDown={EnterInput} rows="1" cols="50" wrap="soft"/>
                    <IconContext.Provider value={{ className: 'input-submit-icon' }}>
                        <button id="input-submit" onClick={SendText}>
                            <FaIcons.FaPaperPlane />
                        </button>
                    </IconContext.Provider>
                </div>
            </div>
        );
    } 
}

export default Chatbox