import React, { Component } from 'react';
import { Switch, Route, Router, Link, Redirect, withRouter } from 'react-router-dom';
class Swipe extends Component {
  render() {
    return (
      <div className="row swipeHolder">
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
          
        </div>

        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
          
        </div>

        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
          
        </div>
      </div>
    );
  }
}

export default Swipe;