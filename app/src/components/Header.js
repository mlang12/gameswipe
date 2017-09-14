import React, { Component } from 'react';
import UserHeader from './UserHeader.js';
import GuestHeader from './GuestHeader.js';
import Search from './Search.js'
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    function Greeting(props) {
      const isLoggedIn = props.isAuth;
      if (isLoggedIn) {
        return <UserHeader cn={"navEle"}/>;
      }
      return <GuestHeader cn={"navEle"}/>;
    }
    return (
      <nav className="navbar header row">
        <div className="col-xl-3 col-md-3 col-xs-3 textLeft">
          <div className="navEle">
            <Link className="navEle" to="/"><h1 className="logo navEle"><span className="logoSmooth">Game</span><span className="logoSwipe">Swipe</span></h1></Link>
          </div>
        </div>
        <div className="col-xl-5 col-md-5 col-xs-5">
          <Search setDisplay={this.props.setDisplay} cn={"navEle"}/>
        </div>
        <div className="col-xl-4 col-md-4 col-xs-4 textRight">
          <h2>{Greeting(this.props)}</h2>
        </div>  
      </nav>
    );
  }
}

export default Header;