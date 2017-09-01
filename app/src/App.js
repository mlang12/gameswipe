import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import helpers from './utils/helpers.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landingDisplays: []
    };
    this.getLanding = this.getLanding.bind(this);
  }

  getLanding() {
    this.setState({
      landingDisplays: helpers.getLanding()
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={getLanding}>
          Get Landing
        </button>
      </div>
    );
  }
}

export default App;
