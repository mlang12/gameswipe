import React, { Component } from 'react';
import loadgif from '../images/loading.gif';

class Loading extends Component {

  render() {
    return (
      <div className="loadTile">
        <img className="loadgif" src={loadgif}/>
      </div>
    );
  }
}

export default Loading;
