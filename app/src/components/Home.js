import React, { Component } from 'react';
import LandingTiles from './LandingTiles.js';
import helpers from '../utils/helpers.js'
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingDisplays: []
    }
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
      <div className="landingTileArea">
        <LandingTiles results={this.state.landingDisplays}/>
      </div>
    );
  }
}

export default Home;
