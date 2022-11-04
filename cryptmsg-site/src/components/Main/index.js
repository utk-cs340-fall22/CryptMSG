import React from 'react'
import './Main.css'
import MessageBoard from '../MessageBoard'

function Main() {
  return (
    <div id='main-body'>
        <div id="empty-settings"></div>
        <MessageBoard />
    </div>
  )
}

export default Main