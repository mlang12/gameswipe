import React, { Component } from 'react';
import Home from './components/Home.js';
import Profile from './components/Profile.js';
import Signin from './components/Signin.js';
import Signup from './components/Signup.js';
import Header from './components/Header.js';
<<<<<<< HEAD
import Footer from './components/Footer.js';
=======
import Liked from './components/Liked.js';
import Filters from './components/Filters.js';
>>>>>>> 358f63a4a07d84b9cc817282f1f442598195c8a9
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
    function isAuth() {
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

    const PrivateRoute = ({ component: Component, ...rest }) => {
      console.log('Composing private route', Component, rest);
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

          <Route exact path='/signup' render={(props) => (
            <Signup {...props} isAuth={isAuth}/>
          )}/>
          <PrivateRoute exact path='/profile' component={Profile} />
          <PrivateRoute exact path='/likes' component={Liked} />
          <Route exact path='/filters' component={Filters} />

          <Route path="/gameview" component={Gameview} />
          <Route exact path='/signin' render={(props) => (
            <Signin {...props} isAuth={isAuth}/>
          )}/>
        </Switch>
        <div className="footerArea">
          <Footer isAuth={this.state.authState}/> 
        </div>
      </div>
    );
  }
}

export default App;
