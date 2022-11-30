import React from 'react';
import './wtm.css';

// class WaitToMessage extends React.Component {
//   render() {
//     return(
      // <div className="wait-to-message-container">
      //   <h1 className="wait-to-message-container-text">Please enter chatroom id</h1>
      // </div>
//     )
//   }
// }

function WaitToMessage() {
  return(
    <div className="wait-to-message-container">
      <h1 className="wait-to-message-text">Please enter chatroom id</h1>
    </div>
  )
}

export default WaitToMessage;