import React, { Component } from 'react';

class Gametile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var picBackground = {
      backgroundImage: 'url(' + this.props.result.cover.url + ')'
    }

    return (
      <div className="row gameTile" style={picBackground}>
        <div className="gameTileInfo row">
          <h3 className="gameTileHeader">{this.props.result.name}</h3>
          <p>Summary Goes Here</p>
          <p>Genre: Platform:</p>
        </div>
      </div>
    );
  }
}

export default Gametile;