import React, { Component } from 'react';
import UserHeader from './UserHeader.js';
import GuestHeader from './GuestHeader.js';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    function Greeting(props) {
      const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
        return <UserHeader/>;
      }
      return <GuestHeader/>;
    }
    return (
      <div className="header row">
        <div className="col-xl-6 colxs-6 textLeft">
          <h1><span className="logoSmooth">Game</span><span className="logoSwipe">Swipe</span></h1>
        </div>
        <div className="col-xl-6 colxs-6 textRight">
          {Greeting(this.props)}
        </div>  
      </div>
    );
  }
}

export default Header;