import React, { Component } from 'react';
import helpers from '../utils/helpers.js';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var name = event.target.name;
    console.log(name)
    this.setState({[name]: event.target.value});
  }

  handleSubmit(event){
    helpers.signUp(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="signup">
        <form className="form-signup col-md-4 offset-md-4" onSubmit={this.handleSubmit}>       
          <h2 className="form-signup-heading">Please fill in the fields below</h2>
          <input type="text" className="form-control" name="username" onChange={this.handleChange} placeholder="Username..."/>
          <input type="text" className="form-control" name="email" onChange={this.handleChange} placeholder="Email..."/>
          <input type="password" className="form-control" name="password" onChange={this.handleChange} placeholder="Password..."/>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Signup</button>   
        </form>
      </div>
    );  
  }
}

export default Signup;