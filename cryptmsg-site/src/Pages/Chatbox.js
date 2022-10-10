import React from 'react'
import './Chatbox.css'

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