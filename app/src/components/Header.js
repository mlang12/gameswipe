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
        <div className="row">
          <div className="col-xl-12 col-md-12 col-xs-12 textLeft">
            <div className="navEle">
              <Link className="navEle" to="/"><h1 className="logo navEle"><span className="logoSmooth">Game</span><span className="logoSwipe">Swipe</span></h1></Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-md-12 col-xs-12 textRight">
            <h2>{Greeting(this.props)}</h2>
          </div>  
        </div>
        <div className="row">
          <div className="col-xl-12 col-md-12 col-xs-12">
            <Search setDisplay={this.props.setDisplay} cn={"navEle"} />
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
