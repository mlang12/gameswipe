import React, { Component } from 'react';

class SwipeComp extends Component {

  render() {
    return (
      <div className="row swipeHolder">
        <img src={this.props.items[0].cover.url}/>
      </div>
    );
  }
}

export default SwipeComp;