import React, { Component } from 'react';

class Signin extends Component {
  render() {
    return (
      <div className="signin">
        <form className="form-signin">       
          <h2 className="form-signin-heading">Please login</h2>
          <input type="text" className="form-control" name="username" placeholder="Email..."/>
          <input type="password" className="form-control" name="password" placeholder="Password..."/>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
        </form>
      </div>
    );
  }
}

export default Signin;