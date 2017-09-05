import React, { Component } from 'react';

class GuestHeader extends Component {
  render() {
    return (
      <span className="header alignRight">
        <a href="/filters" className="menuItem">Filters</a>
        <a href="/likes" className="menuItem">Likes</a>
      </span>
    );
  }
}

export default GuestHeader;