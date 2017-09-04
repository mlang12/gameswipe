import React, { Component } from 'react';
import Home from './components/Home.js';
import Profile from './components/Profile.js';
import Signin from './components/Signin.js';
import Signup from './components/Signup.js';
import Header from './components/Header.js';
import logo from './logo.svg';
import './App.css';
import helpers from './utils/helpers.js'
import { Switch, Route, Router } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landingDisplays: []
    };
  }

  render() {
    return (
      <div className="container App bg textCenter">
        <div className="headerArea">
          <Header/>
        </div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/signin' component={Signin}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/profile' component={Profile}/>
        </Switch>
      </div>
    );
  }
}

export default App;
