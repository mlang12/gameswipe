import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <div className="signup">
        <form className="form-signup">       
          <h2 className="form-signup-heading">Please Enter Email and Password</h2>
          <input type="text" className="form-control" name="username" placeholder="Email..."/>
          <input type="password" className="form-control" name="password" placeholder="Password..."/>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Signup</button>   
        </form>
      </div>
    );  
  }
}

export default Signup;