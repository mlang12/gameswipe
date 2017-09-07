import React, { Component } from 'react';
import Home from './components/Home.js';
import Profile from './components/Profile.js';
import Signin from './components/Signin.js';
import Signup from './components/Signup.js';
import Header from './components/Header.js';
import Gameview from './components/Gameview.js';
import logo from './logo.svg';
import './App.css';
import helpers from './utils/helpers.js'
import { Switch, Route, Router, Link, Redirect, withRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landingDisplays: [],
      authState: null,
    };
    this.setAuthState = this.setAuthState.bind(this);
  }

  setAuthState(state) {
    this.setState({
      authState: state
    });
  }

  render() {
    const _this = this;
    function isAuth(cb) {
      helpers.checkAuth().then(function(response) {
        if (response.data !== undefined) {
          if (response.data.auth !== undefined) {
            _this.setAuthState(response.data.auth);
          }
        }  else {
          _this.setAuthState(false);
        }
      });
    }

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        this.state.authState ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
        )
      )}/>
    )

    if (this.state.authState === null) {
      isAuth();
    }

    return (
      <div className="container App bg textCenter">
        <div className="headerArea">
          <Header isAuth={this.state.authState}/>
        </div>
        <Switch>
          <Route exact path='/' component={Home}/>
          {/*<Route exact path='/signin' component={Signin} setAuth={this.setAuth}/>*/}
          {/*<Route exact path='/signup' component={Signup} setAuth={this.setAuth}/>*/}
          <PrivateRoute exact path='/profile' component={Profile} />
          <Route path="/gameview" component={Gameview} />
          <Route exact path='/signin' render={(props) => (
            <Signin {...props} isAuth={isAuth}/>
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
