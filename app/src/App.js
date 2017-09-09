import React, { Component } from 'react';
import Home from './components/Home.js';
import Profile from './components/Profile.js';
import Signin from './components/Signin.js';
import Signup from './components/Signup.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Liked from './components/Liked.js';
import Filters from './components/Filters.js';
import Gameview from './components/Gameview.js';
import Swipe from './components/Swipe.js';
import Logout from './components/Logout.js';
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
    // function isAuth() {
    //   // helpers.checkAuth().then(function(response) {
    //   //   if (response.data !== undefined) {
    //   //     if (response.data.auth !== undefined) {
    //   //       _this.setAuthState(response.data.auth);
    //   //     }
    //   //   }  else {
    //   //     _this.setAuthState(false);
    //   //   }
    //   // });
    // }

    const PrivateRoute = ({ component: Component, ...rest }) => {
      return (<Route {...rest} render={props => (
        _this.state.authState ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/signin',
            state: { from: props.location }
          }}/>
        )
      )}/>);
    }

    return (
      <div className="container App bg textCenter">
        <div className="headerArea">
          <Header isAuth={this.state.authState}/>
        </div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path="/gameview" component={Gameview} />
          <Route exact path='/signup' render={(props) => (
            <Signup {...props} setAuth={this.setAuthState} isAuth={this.state.authState}/>
          )}/>
          <Route exact path='/signin' render={(props) => (
            <Signin {...props} setAuth={this.setAuthState} isAuth={this.state.authState}/>
          )}/>
          
          <PrivateRoute exact path='/likes' component={Liked} />
          <PrivateRoute exact path='/filters' component={Filters} />
          <PrivateRoute exact path='/swipe' component={Swipe} />
          <Route exact path='/logout' render={(props) => (
            <Logout {...props} setAuth={this.setAuthState}/>
          )}/>
        </Switch>
        <div className="footerArea">
          <Footer/> 
        </div>
      </div>
    );
  }
}

export default App;
