import React, { Component } from 'react';

class Gameview extends Component {
  render() {
    return (
      <div className="row gameview">
        {this.props.title}
      </div>
    );
  }
}

export default Gameview;