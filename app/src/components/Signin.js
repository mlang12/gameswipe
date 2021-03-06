import React, { Component } from 'react';
import helpers from '../utils/helpers.js';
import { Redirect, Route } from 'react-router-dom';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warn: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var name = event.target.name;
    this.setState({
      [name]: event.target.value,
      warnColor: ""
    });
  }

  handleSubmit(event){
    const _this = this;
    event.preventDefault();
    // const setAuth = this.props.setAuth
    helpers.signIn(this.state).then(function(response) {
      console.log('response after signin: ', response);
      if(!response.data.error) {
        _this.props.setAuth(true);
      } else {
        _this.props.setAuth(false);
        _this.setState({
          warn: response.data.error[0],
          warnColor: "badWarn disappear"
        })
        console.log('Failed to login.');
      }
    });
  }

  render() {
    if (this.props.isAuth === true) {
      return <Redirect to="/likes" />;
    } else {
      return (
        <div className="signin formWrapper">
          <form className="form-signin" onSubmit={this.handleSubmit}>       
            <h2 className="form-signin-heading">Please login</h2>
            <input type="text" className="form-control inputBar" name="username" onChange={this.handleChange} placeholder="Username..."/>
            <input type="password" className="form-control inputBar" name="password" onChange={this.handleChange} placeholder="Password..."/>
            <button className="btn btn-lg likeButton btn-block inputBar">Login</button>
            <p className={"inputWarn " + this.state.warnColor }>{this.state.warn}</p>
          </form>
        </div>
      );
    }
  }
}

export default Signin;