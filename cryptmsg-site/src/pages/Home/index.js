import React , { Component } from 'react';
import './home.css';
import LoginButton from './login';

class Home extends Component {
  render() {
    return(
      <div className="home-container">
        <div className="home-diagonal-1"/>
        <div className="home-diagonal-2"/>
        <div className="home-diagonal-3"/>
        <h1 className="home-title">CryptMSG</h1>
        <LoginButton />
      </div>
    )
  }
}

export default Home;