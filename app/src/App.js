import React, { Component } from 'react';
import LandingTiles from './components/LandingTiles.js'
import logo from './logo.svg';
import './App.css';
import helpers from './utils/helpers.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landingDisplays: []
    };
  }

  componentDidMount(){
    if(this.state.landingDisplays.length === 0 || this.state.landingDisplays === 'undefined') {
      helpers.getLanding().then((displays) => {
        this.setState({
          landingDisplays: displays.data.body
        });
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="landingTileArea">
          <LandingTiles results={this.state.landingDisplays}/>
        </div>
      </div>
    );
  }
}

export default App;
