import React, { Component } from 'react';
import helpers from '../utils/helpers.js';
import { Redirect, Route } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      warn: ""
    });
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  handleSubmit(event){
    const _this = this;
    helpers.signUp(this.state).then(function(response) {
      if (response) {
        if (response.data !== undefined && !response.data.error){
          console.log(response.data)
          _this.props.setAuth(true);
        } else {
          _this.setState({
            warn: response.data.error
          });
        }
      }
    }).catch(function(err){
      console.log(err);
    });
    event.preventDefault();
  }

  render() {
    if (this.props.isAuth === true) {
      return <Redirect to="/likes" />;
    } else {
      return (
        <div className="signup formWrapper">
          <form className="form-signup" onSubmit={this.handleSubmit}>       
            <h2 className="form-signup-heading">Please fill in the fields below</h2>
            <input type="text" className="form-control" name="username" onChange={this.handleChange} placeholder="Username..."/>
            <input type="text" className="form-control" name="email" onChange={this.handleChange} placeholder="Email..."/>
            <input type="password" className="form-control" name="password" onChange={this.handleChange} placeholder="Password..."/>
            <button className="btn btn-lg btn-primary btn-block">Signup</button>
            <p className="inputWarn">{this.state.warn}</p>
          </form>
        </div>
      ); 
    } 
  }
}

export default Signup;