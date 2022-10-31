import React , { Component } from 'react';

class Message extends Component {
  render() {
    return(
      <div className={this.props.cname} id={this.props.msgID}>
        {this.props.text}
      </div>
    )
  }
}

export default Message;