import React, { Component } from 'react';
import Gametile from './Gametile.js';

class LandingTiles extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        {this.props.results.map(function(result) {
           return <Gametile cn={"gameTileImg"} key={result.id} result={result}/>;
        })}
      </div>
    );
  }
}

export default LandingTiles;