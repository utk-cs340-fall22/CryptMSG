import React from 'react'
import { Component } from 'react'
import './Chatbox.css'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import autosize from 'autosize';
// import Message from '../Message'


const scrollToBottom = () =>{ 
    window.scrollTo({ 
        top: document.documentElement.scrollHeight, 
        behavior: 'smooth'
    }); 
}; 

function ResizeMsgBoard(msg_board) {
    var chatbox_height = document.querySelector(".chatbox").clientHeight;
    var nav_height = document.querySelector(".nav-container").clientHeight;
    var margin = window.innerHeight - chatbox_height - msg_board.clientHeight;

    if (margin <= nav_height) {
        margin = nav_height;
        msg_board.style.paddingBottom = chatbox_height + "px";
    }
    msg_board.style.marginTop = margin + "px";
}

// Activates when message is hovered over
function MessageHover() {
    console.log(this.dataTime);
}

const isValidUrl = urlString=> {
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
    '((\\d{1,3}\\.){3}\\d{1,3}))'+
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
    '(\\?[;&a-z\\d%_.~+=-]*)?'+
    '(\\#[-a-z\\d_]*)?$','i');
    return !!urlPattern.test(urlString);
}

function CreateLink(value) {
    var msg = document.createElement("a");
    var link = document.createTextNode(`${value}`);
    msg.appendChild(link);
    msg.href=`${value}`;
    msg.target = "_blank";
    msg.rel = "noopener noreferrer";
    return msg;
}

function AddMessage(msg_board, type, value) {
    // Create message date
    var date = new Date();
    let time = `${date.getHours()}:${date.getMinutes()}`;
    let test = `${time}`;

    // Create HTML elements
    var container = document.createElement("div");
    var msg;
    if (isValidUrl(value)) {
        msg = CreateLink(value);
    } else {
        msg = document.createElement("div");
    }
    var msgTime = document.createElement("h1");
    // var msg = document.createElement("div");

    msg.className = "messages";
    msg.id = type;
    container.className = type;
    msg.innerHTML = value;
    msg.dataTime = test;
    msg.addEventListener('mouseover', MessageHover);
    msgTime.innerHTML = test;
    msgTime.className = "msg-time";

    container.appendChild(msg);
    container.appendChild(msgTime);
    msg_board.prepend(container);
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
    AddMessage(msg_board, "received", text);
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