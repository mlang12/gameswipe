import React, { Component } from 'react';
import helpers from '../utils/helpers.js';
import { Redirect, Route } from 'react-router-dom';

class Signin extends Component {
    constructor(props) {
    super(props);

    this.state = {
      id: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  handleSubmit(event){
    const _this = this;
    event.preventDefault();
    // const setAuth = this.props.setAuth
    helpers.signIn(this.state).then(function(response) {
      if(response.data._id !== undefined) {
        _this.setState({
          id: response.data._id
        });
      } else {
        console.log('Failed to login.');
      }
    });
  }

  render() {
    if (this.state.id !== null) {
      return <Redirect push to="/profile" />;
    } else {
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
}

export default Signin;