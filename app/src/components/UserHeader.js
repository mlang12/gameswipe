import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GuestHeader extends Component {
  render() {
    return (
      <span className="header alignRight">
        <Link to="/swipe" className="menuItem">Swipe</Link>
        {/*<Link to="/filters" className="menuItem">Filters</Link>*/}
        <Link to="/likes" className="menuItem">Likes</Link>
        <Link to="/logout" className="menuItem">Logout</Link>
      </span>
    );
  }
}

export default GuestHeader;