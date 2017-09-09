import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import helpers from '../utils/helpers.js';

class Logout extends Component {  
  componentWillMount() {
    const _this = this;
    helpers.logout().then(function(response) {
      _this.props.setAuth(false);
    });
  }

  render() {
    return <Redirect to="/" />;
  }
}


export default Logout;