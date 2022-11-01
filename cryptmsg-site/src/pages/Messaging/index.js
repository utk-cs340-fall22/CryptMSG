import React , { Component } from 'react';
import Chatbox from '../../components/Chatbox';
// import ChatSettings from '../../components/ChatSettings';
import Main from '../../components/Main';
import Navbar from '../../components/Navbar'

class Messaging extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <Main />
        <Chatbox />
      </div>
    )
  }
}

export default Messaging;