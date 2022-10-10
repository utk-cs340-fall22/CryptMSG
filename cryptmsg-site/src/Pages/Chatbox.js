import React, { createElement } from 'react'
import './Chatbox.css'

function sendText() {
    var text = document.getElementById("input-box").value;

    return text;
}


function Chatbox() {
    return (
        <div className='chatbox'>
            <div>
                <div id="input-box" contentEditable />
                <button id="input-submit">&#9650;</button>
            </div>
        </div>
    )
}

export default Chatbox