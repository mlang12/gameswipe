import React, { Component } from 'react';
import { Switch, Route, Router, Link, Redirect, withRouter } from 'react-router-dom';
class GuestHeader extends Component {
  render() {
    return (
      <span className="headerMenu">
        <div className={this.props.cn}>
          <Link to="/signin" className="menuItem">Login</Link>
          <Link to="/signup" className="menuItem">Sign-Up</Link>
        </div>
      </span>
    );
  }
}

export default GuestHeader;