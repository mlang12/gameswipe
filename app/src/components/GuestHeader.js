import React, { Component } from 'react';

class GuestHeader extends Component {
  render() {
    return (
      <div className="col-xs-6 col-xl-6 col-md-6 headerMenu">
        <a href="/signin" className="menuItem">Login</a>
        <a href="/signup" className="menuItem">Sign-Up</a>
      </div>
    );
  }
}

export default GuestHeader;