import React, { Component } from 'react';

class Gametile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="gameTile">
        <img className="tileImg" src={this.props.imgUrl}/>
      </div>
    );
  }
}

export default Gametile;