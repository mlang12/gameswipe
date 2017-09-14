import React, { Component } from 'react';
import LandingTiles from './LandingTiles.js';
import Loading from './Loading.js'

class Home extends Component {
  render() {
    if (this.props.displayContent !== undefined) {
      return (
        <div className="landingTileArea">
          <LandingTiles results={this.props.displayContent}/>
        </div>
      );
    } else {
      return (
        <Loading />
      );
    }
  }
}

export default Home;
