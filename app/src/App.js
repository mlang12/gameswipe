import React, { Component } from 'react';
import Home from './components/Home.js';
import Signin from './components/Signin.js';
import Signup from './components/Signup.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Liked from './components/Liked.js';
import Filters from './components/Filters.js';
import Gameview from './components/Gameview.js';
import Swipe from './components/Swipe.js';
import Logout from './components/Logout.js';
import helpers from './utils/helpers.js';
import './App.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landingDisplays: [],
      authState: null,
    };

    this.setAuthState = this.setAuthState.bind(this);
    this.setLandingDisplays = this.setLandingDisplays.bind(this);
  }

  setAuthState(state) {
    this.setState({
      authState: state
    });
  }

  setLandingDisplays(displays) {
    if (displays) {
      this.setState({
        landingDisplays: displays
      });
    }
  }

  componentDidMount(){
    if(this.state.landingDisplays.length === 0 || this.state.landingDisplays === 'undefined') {
      helpers.getLanding().then((displays) => {
        this.setState({
          landingDisplays: displays.data.body
        });
      });
    }
  }

  render() {
    const _this = this;
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
      <div className="App bg textCenter">
        <div className="headerArea">
          <Header setDisplay={this.setLandingDisplays} isAuth={this.state.authState}/>
        </div>
        <div className="container">
          <Switch>
            <Route exact path='/' render={(props) => (
              <Home {...props} displayContent={this.state.landingDisplays}/>
            )}/>
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
        </div>
        <div className="footerArea">
          <Footer/> 
        </div>
      </div>
    );
  }
}

export default App;
