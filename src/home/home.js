import React, { Component } from 'react';
import logo from '../pictures/logo.svg';
import './home.css';

import store from '../store'

import { Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aa: 'aaO',
      ...store.getState()
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            接入react-router-dom & redux/react-redux
          </p>
          <p>局部状态 { this.state.aa }</p>
          <Link className="App-link" to='/about'>全局状态Counter： { this.state.counter }</Link>
        </header>
      </div>
    )
  }
}

export default App;
