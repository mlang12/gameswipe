import React, { Component } from 'react';

class GuestHeader extends Component {
  render() {
    return (
      <div className="header alignRight">
        <a href="/filters" className="menuItem">Filters</a>
        <a href="/likes" className="menuItem">Likes</a>
      </div>
    );
  }
}

export default GuestHeader;