import React, { createElement } from 'react'
import './Chatbox.css'
import Message from './Message';

function sendText() {
    var text = document.getElementById("input-box").value;

    return text;
}


function Chatbox() {
    return (
        <div className='chatbox'>
            <div>
                <div id="input-box" contentEditable />
                <button id="input-submit" onClick={sendText()}>&#9650;</button>
            </div>
        </div>
    )
}

export default Chatbox