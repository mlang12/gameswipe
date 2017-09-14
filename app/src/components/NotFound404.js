import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound404 extends Component {
  render() {
    return (
      <div className="NotFound">
        <h1>404 - Site Not Found</h1>
        <h3>Hmm... not sure how you got here, but try <Link to="/signin" className="whiteLink">logging in.</Link></h3>
      </div>
    );
  }
}

export default NotFound404;
