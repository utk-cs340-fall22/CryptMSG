import React from 'react'
import './Chatbox.css'

function sendText() {
    var text = document.getElementById("input-box").innerHTML;

    if (text.length > 0) {
        document.getElementById("message-board").innerHTML += `<div>${text}</div>`;
    }

    document.getElementById("input-box").innerHTML = "";
}

function Chatbox() { 
    return (
        <div className='chatbox'>
            <div>
                <div id="input-box" contentEditable />
                <button id="input-submit" onClick={sendText}>&#9650;</button>
            </div>
        </div>
    )
}

export default Chatbox