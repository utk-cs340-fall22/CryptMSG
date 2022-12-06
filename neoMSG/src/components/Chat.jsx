import React, { useContext , useState , useEffect } from "react";
import * as FaIcons from 'react-icons/fa';
import Messages from "./Messages";
import Input from "./Input";
import { Link } from 'react-router-dom'
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const [active, setActive] = useState(false);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    if (JSON.stringify(data.user) === '{}') setActive(false);
    else setActive(true);
  }, [data.user])
  
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
        <Link to="/settings" className="settings-link">
          <FaIcons.FaCog className="settings-icon"/>
        </Link>
      </div>
      {active && <Messages/>}
      {active && <Input/>}
    </div>
  )
}

export default Chat