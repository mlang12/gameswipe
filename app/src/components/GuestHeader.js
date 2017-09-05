import React, { Component } from 'react';

class GuestHeader extends Component {
  render() {
    return (
      <span className="headerMenu">
        <a href="/signin" className="menuItem">Login</a>
        <a href="/signup" className="menuItem">Sign-Up</a>
      </span>
    );
  }
}

export default GuestHeader;