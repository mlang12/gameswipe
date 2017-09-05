import React, { Component } from 'react';
import helpers from '../utils/helpers.js';

class Signin extends Component {
    constructor(props) {
    super(props);

    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.authPass = this.authPass.bind(this);
  }

  authPass(profile) {
    this.props.setAuth(true, profile);
  }

  handleChange(event) {
    var name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    const setAuth = this.props.setAuth
    const hist = this.props.history.pushState
    helpers.signIn(this.state).then(function(response) {
      if(response.data.local !== undefined) {
        setAuth(true, response);
        hist(null, 'profile');
      } else {
        console.log('Failed to login.');
      }
    });
  }

  render() {
    return (
      <div className="signin">
        <form className="form-signin col-md-4 offset-md-4" onSubmit={this.handleSubmit}>       
          <h2 className="form-signin-heading">Please login</h2>
          <input type="text" className="form-control" name="email" onChange={this.handleChange} placeholder="Email..."/>
          <input type="password" className="form-control" name="password" onChange={this.handleChange} placeholder="Password..."/>
          <button className="btn btn-lg btn-primary btn-block">Login</button>   
        </form>
      </div>
    );
  }
}

export default Signin;