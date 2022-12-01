import React from 'react';
import './wtm.css';


class WaitToMessage extends React.Component {
  handleInput = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.props.parentCallBack(true);
      let hash = document.getElementById("wait-to-message-input").value;
      if (hash !== "") document.getElementById("nav-message-hash").innerHTML = hash;
    }
  }

  render() {
    return(
      <div className="wait-to-message-container">
        <h1 className="wait-to-message-text">Please enter chatroom id:</h1>
        <textarea id="wait-to-message-input" rows="1" cols="20" maxLength="27" onKeyDown={this.handleInput}/>
      </div>
    )
  }
}

// function WaitToMessage() {
//   return(
//     <div className="wait-to-message-container">
//       <h1 className="wait-to-message-text">Please enter chatroom id:</h1>
//       <textarea id="wait-to-message-input" rows="1" cols="20" onKeyDown={handleInput}/>
//     </div>
//   )
// }

export default WaitToMessage;