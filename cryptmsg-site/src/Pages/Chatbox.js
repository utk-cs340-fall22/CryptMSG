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

function ResizeMsgBoard(msg_board) {
    var chatbox_height = document.querySelector(".chatbox").clientHeight;
    var margin = window.innerHeight - chatbox_height - msg_board.clientHeight;

    if (margin <= 0) {
        margin = 0;
        msg_board.style.paddingBottom = chatbox_height + "px";
    }
    msg_board.style.marginTop = margin + "px";
}

function AddMessage(msg_board, type, value) {
    var msg = document.createElement("div");
    msg.className = "messages";
    msg.id = type;
    msg.innerHTML = value;
    msg_board.prepend(msg);
}

function SendText() {
    var input_box = document.getElementById("input-box");
    var msg_board = document.getElementById("message-board");
    if (input_box.value.length === 0) { return; }
 
    AddMessage(msg_board, "sent", input_box.value);
    input_box.value = "";
    input_box.innerHTML = "";
    input_box.style.height = "30px";
    ResizeMsgBoard(msg_board);
    scrollToBottom();
}

function ReceiveText(text) {
    var msg_board = document.getElementById("message-board");
    AddMessage(msg_board, "received", text.value);
    ResizeMsgBoard(msg_board);
    scrollToBottom();
}

window.ReceiveText = ReceiveText;

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