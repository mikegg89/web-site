import React, { Component } from 'react';
import logo from './ICO-logo.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="nav-bar">
            <img src={logo} alt="ico-logo" className="logo" />        
      </div>
    );
  }
}

export default App;
