import React, { Component } from 'react';

class Gametile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var coverImg;
    if (this.props.result.cover === undefined) {
      coverImg = '../images/noThumb.png'
    } else {
      coverImg = this.props.result.cover.url;
    }

    return (
      <div className="gameTile">
        <img className="tileImg" src={coverImg}/>
        <span>{this.props.result.name}</span>
      </div>
    );
  }
}

export default Gametile;