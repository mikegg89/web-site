import React, { Component } from 'react';
import logo from './ICO-logo.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="nav-bar">
        <ul>
          <li><img src={logo} alt="ico-logo" className="logo" /></li>
          <li className="nav-list-item">search</li>
        </ul>
      </div>
    );
  }
}

export default App;
