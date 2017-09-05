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
      <nav className="navbar header row">
        <div className="col-xl-6 col-md-6 col-xs-6 textLeft">
          <h1 className="logo"><span className="logoSmooth">Game</span><span className="logoSwipe">Swipe</span></h1>
        </div>
        <div className="col-xl-6 col-md-6 col-xs-6 textRight">
          <h2>{Greeting(this.props)}</h2>
        </div>  
      </nav>
    );
  }
}

export default Header;