import React , { Component } from 'react';
import Chatbox from '../../components/Chatbox';
import WaitToMessage from '../../components/WaitToMessage';
// import ChatSettings from '../../components/ChatSettings';
import Main from '../../components/Main';
import Navbar from '../../components/Navbar'



class Messaging extends Component {
  constructor() {
    super();
    this.state = {
      hasValidChatId: false
    }
  }

  validateChatIdCallback = (validId) =>  {
    this.setState({hasValidChatId: validId});
    console.log(this.state.hasValidChatId);
  }

  render() {
    return(
      <div>
        <Navbar parentCallBack={this.validateChatIdCallback}/>
        {this.state.hasValidChatId ? <Main/> : <div></div>}
        {this.state.hasValidChatId ? <Chatbox/> : <WaitToMessage/>}
      </div>
    )
  }
}

export default Messaging;