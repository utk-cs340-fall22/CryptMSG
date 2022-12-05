import React, { useContext } from "react";
import * as FaIcons from 'react-icons/fa';
import Messages from "./Messages";
import Input from "./Input";
import { Link } from 'react-router-dom'
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
        <Link to="/settings" className="settings-link">
          <FaIcons.FaCog className="settings-icon"/>
        </Link>
        <div className='chatIcons'>
          <img src="" alt=""/>
          <img src="" alt=""/>
          <img src="" alt=""/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat