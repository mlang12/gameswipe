import React, { Component } from 'react';
import Gametile from './Gametile.js';

class LandingTiles extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   tilesData: []
    // }
  }

  // componentDidReceiveProps(nextProps) {
  //   if (this.props !== nextProps && this.props !== 'undefined') {
  //     this.setState({
  //       tilesData: nextProps
  //     })
  //   }
  // }

  render() {
    return (
      <ul>
        {this.props.results.map(function(result) {
           return <Gametile key={result.id} result={result}/>;
        })}
      </ul>
    );
  }
}

export default LandingTiles;