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
import { Switch, Route, Router } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landingDisplays: [],
      isAuth: {
        state: false,
        profile: null
      }
    };

    this.setAuth = this.setAuth.bind(this);
  }

  setAuth(authStatus, profile) {
    this.setState({
      isAuth: {
        state: authStatus,
        profile: profile
      }
    });
  }

  render() {
    return (
      <div className="container App bg textCenter">
        <div className="headerArea">
          <Header/>
        </div>
        <Switch>
          <Route exact path='/' component={Home}/>
          {/*<Route exact path='/signin' component={Signin} setAuth={this.setAuth}/>*/}
          {/*<Route exact path='/signup' component={Signup} setAuth={this.setAuth}/>*/}
          <Route exact path='/profile' component={Profile} authStatus={this.state.isAuth}/>
          <Route path="/gameview" component={Gameview} />
          <Route exact path='/signin' render={(props) => (
            <Signin {...props} setAuth={this.setAuth} />
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
