import React, { Component } from 'react';

class Screenshots extends Component {
  render() {
    if (this.props.imgs !== undefined) {
      return (
        <div className="row">
          <h3> Screenshots: </h3>
          {this.props.imgs.map(function(ss) {
            return (
              <span className="" key={ss.url}>
                <img className="ssImg" src={ss.url}/>
              </span>
            );
          })}
        </div>
      );
    } else {
      return <h4> Sorry this game doesn't have screenshots...</h4>;
    }
  }
}

export default Screenshots;