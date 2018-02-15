import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './ICO-logo.png'
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="app">
      <div className="nav-bar">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={logo} alt="ico-logo" className="logo" />
            </div>
            <div className="col search-nav">
              Search
            </div>
          </div>
        </div>
      </div>
      <div className="top-body">
      </div>
      <div className="middle-body">
      </div>
      <div className="bottom-body">
      </div>
    </div>

    );
  }
}

export default App;
